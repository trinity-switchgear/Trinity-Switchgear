"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./broadcast.module.css";

export default function Broadcast() {
  const router = useRouter();
  const logRef = useRef(null);

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) router.push("/login");
  }, [router]);

  const [status, setStatus] = useState("Ready");
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // 🔥 NEW STATE
  const [sentCount, setSentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    setStatus("⏳ Broadcasting...");
    setProgress(0);
    setLog([]);
    setIsRunning(true);
    setIsPaused(false);
    setSentCount(0);
    setTotalCount(0);

    const res = await fetch("https://trinity-broadcast-backend.onrender.com/broadcast", {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    if (!res.body) {
      setStatus("❌ No response from server");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let sent = 0,
      total = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n").filter(Boolean);

      lines.forEach((line) => {
        const data = JSON.parse(line.replace("data: ", ""));

        if (data.sent !== undefined) {
          sent = data.sent;
          total = data.total;

          setSentCount(sent);
          setTotalCount(total);

          setProgress((sent / total) * 100);
          setStatus(`Sending ${sent} / ${total}`);

          if (data.jid) {
            setLog((prev) => [
              ...prev,
              { jid: data.jid, success: data.success },
            ]);
          }
        }

        if (data.stopped) {
          setStatus(`⏹ Broadcast Stopped: ${sent}/${total}`);
          setIsRunning(false);
          setIsPaused(false);
        }

        if (data.done) {
          setStatus(`✅ Broadcast Completed: ${sent}/${total}`);
          setProgress(100);
          setIsRunning(false);
          setIsPaused(false);
        }

        if (data.error) {
          setStatus(data.error);
          setIsRunning(false);
          setIsPaused(false);
        }
      });
    }
  }

  async function getCount(target) {
    const res = await fetch(`https://trinity-broadcast-backend.onrender.com/count?target=${target}`);
    const data = await res.json();
    setCount(data.count);
  }

  async function pauseBroadcast() {
    await fetch("https://trinity-broadcast-backend.onrender.com/broadcast/pause", { method: "POST" });
    setIsPaused(true);
    setStatus(`⏸ Broadcast Paused: ${sentCount}/${totalCount}`);
  }

  async function resumeBroadcast() {
    await fetch("https://trinity-broadcast-backend.onrender.com/broadcast/resume", { method: "POST" });
    setIsPaused(false);
    setStatus(`▶ Broadcast Resumed: ${sentCount}/${totalCount}`);
  }

  async function stopBroadcast() {
    await fetch("https://trinity-broadcast-backend.onrender.com/broadcast/stop", { method: "POST" });
    setIsRunning(false);
    setIsPaused(false);
    setStatus(`⏹ Broadcast Stopped: ${sentCount}/${totalCount}`);
  }

  // Auto-scroll log
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2>📢 Broadcast Panel</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <textarea name="message" placeholder="Message (optional)" />

          <select
            name="target"
            required
            onChange={(e) => getCount(e.target.value)}
            disabled={isRunning}
          >
            <option value="">Select Target</option>
            <option value="All">All</option>
            <option value="Contractors">Contractors</option>
            <option value="Individual Customers">Individual Customers</option>
            <option value="Retailers">Retailers</option>
          </select>

          <p>Total: {count}</p>

          <input type="file" name="image" disabled={isRunning} />
          <input
            name="imageCaption"
            placeholder="Image caption"
            disabled={isRunning}
          />

          <input type="file" name="pdf" disabled={isRunning} />
          <input
            name="pdfCaption"
            placeholder="PDF caption"
            disabled={isRunning}
          />

          <button
            type="submit"
            disabled={isRunning}
            className={styles.startBtn}
          >
            🚀 Start Broadcast
          </button>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.pauseBtn}
              onClick={pauseBroadcast}
              disabled={!isRunning || isPaused}
            >
              ⏸ Pause
            </button>
            <button
              type="button"
              className={styles.resumeBtn}
              onClick={resumeBroadcast}
              disabled={!isPaused}
            >
              ▶ Resume
            </button>
            <button
              type="button"
              className={styles.stopBtn}
              onClick={stopBroadcast}
              disabled={!isRunning}
            >
              ⏹ Stop
            </button>
          </div>

          <div className={styles.progress}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
          </div>

          <p className={styles.status}>{status}</p>

          <div ref={logRef} className={styles.log}>
            {log.map((item, i) => (
              <div
                key={i}
                className={item.success ? styles.success : styles.fail}
              >
                {item.jid} – {item.success ? "Sent" : "Failed"}
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
