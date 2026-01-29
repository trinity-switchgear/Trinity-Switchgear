"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./broadcast.module.css";

export default function Broadcast() {
  const router = useRouter();
  const logRef = useRef(null);
  const [toast, setToast] = useState(null);

  const [token, setToken] = useState(null); // 👈 SAFE
  const [status, setStatus] = useState("Ready");
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sentCount, setSentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [backups, setBackups] = useState([]);
  const [selectedBackup, setSelectedBackup] = useState("");

  // ✅ Load token safely in browser only
  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/login");
    } else {
      setToken(t);
      loadBackups(t);
    }
  }, [router]);

  async function loadBackups(authToken) {
    try {
      const res = await fetch(
        "https://waitressless-shemika-unwitting.ngrok-free.dev/admin/list-backups",
        {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to load backups");
      }

      setBackups(data.backups || []);
    } catch (err) {
      setToast({
        message: "❌ Failed to load backups",
        type: "error", // 🔴 red toast
      });
      setTimeout(() => setToast(null), 3000);
    }
  }

  async function backupNow() {
    if (!token) return;

    try {
      const res = await fetch(
        "https://waitressless-shemika-unwitting.ngrok-free.dev/admin/backup-now",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Backup failed");
      }

      setToast({ type: "success", message: "💾 Backup created successfully!" });
      setTimeout(() => setToast(null), 3000);

      loadBackups();
    } catch (err) {
      console.error("Backup error:", err);
      setToast({
        type: "error",
        message: "❌ Backup failed: " + err.message,
      });
      setTimeout(() => setToast(null), 3000);
    }
  }

  async function restoreBackup() {
    if (!selectedBackup) return alert("Select a backup first");

    const ok = confirm(
      `⚠️ Restore backup?\nThis will overwrite contacts.xlsx!\n\n${selectedBackup}`,
    );
    if (!ok) return;

    const res = await fetch(
      "https://waitressless-shemika-unwitting.ngrok-free.dev/admin/restore",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ fileName: selectedBackup }),
      },
    );

    const data = await res.json();

    if (res.ok && data.success) {
      setToast({
        type: "success",
        message: "♻️ Backup restored successfully!",
      });
      setTimeout(() => setToast(null), 3000);
    } else {
      setToast({
        type: "error",
        message: "❌ Restore failed: " + (data.error || "Unknown error"),
      });
      setTimeout(() => setToast(null), 3000);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!token) return;

    const formData = new FormData(e.target);

    setStatus("⏳ Broadcasting...");
    setProgress(0);
    setLog([]);
    setIsRunning(true);
    setIsPaused(false);
    setSentCount(0);
    setTotalCount(0);

    const res = await fetch(
      "https://waitressless-shemika-unwitting.ngrok-free.dev/broadcast",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
        cache: "no-store",
      },
    );

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

      for (const line of lines) {
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

        if (data.done) {
          setStatus(`✅ Broadcast Completed: ${sent}/${total}`);
          setProgress(100);
          setIsRunning(false);
          setIsPaused(false);
        }

        if (data.stopped) {
          setStatus(`⏹ Broadcast Stopped: ${sent}/${total}`);
          setIsRunning(false);
          setIsPaused(false);
        }

        if (data.error) {
          setStatus(`❌ ${data.error}`);
          setIsRunning(false);
          setIsPaused(false);
        }
      }
    }
  }

  async function getCount(target) {
    if (!target || !token) return;

    const res = await fetch(
      `https://waitressless-shemika-unwitting.ngrok-free.dev/count?target=${target}`,
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    setCount(data.count);
  }

  async function pauseBroadcast() {
    await fetch(
      "https://waitressless-shemika-unwitting.ngrok-free.dev/broadcast/pause",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    setIsPaused(true);
  }

  async function resumeBroadcast() {
    await fetch(
      "https://waitressless-shemika-unwitting.ngrok-free.dev/broadcast/resume",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    setIsPaused(false);
  }

  async function stopBroadcast() {
    await fetch(
      "https://waitressless-shemika-unwitting.ngrok-free.dev/broadcast/stop",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    setIsRunning(false);
    setIsPaused(false);
  }

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <section className={styles.container}>
      {toast && (
        <div
          className={`${styles.toast} ${
            toast.type === "success" ? styles.toastSuccess : styles.toastError
          }`}
        >
          {toast.message}
        </div>
      )}

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
            <option value="WhatsApp JID">Whatsapp Autosaved</option>
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
              onClick={pauseBroadcast}
              disabled={!isRunning || isPaused}
            >
              ⏸ Pause
            </button>
            <button
              type="button"
              onClick={resumeBroadcast}
              disabled={!isPaused}
            >
              ▶ Resume
            </button>
            <button type="button" onClick={stopBroadcast} disabled={!isRunning}>
              ⏹ Stop
            </button>
          </div>

          <div className={styles.progress}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
          </div>

          <p className={styles.status}>{status}</p>

          <div ref={logRef} className={styles.log}>
            {log.map((item, i) => (
              <div key={i}>
                {item.jid} – {item.success ? "Sent" : "Failed"}
              </div>
            ))}
          </div>
        </form>

        <div className={styles.backupBox}>
          <div className={styles.backupTitle}>📂 Excel Backups</div>

          <div className={styles.backupRow}>
            <select
              className={styles.backupSelect}
              value={selectedBackup}
              disabled={isRunning}
              onChange={(e) => setSelectedBackup(e.target.value)}
            >
              <option value="">Select backup to restore</option>
              {backups.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={backupNow}
              className={`${styles.backupBtn} ${styles.backupBtnPrimary}`}
            >
              💾 Backup Now
            </button>

            <button
              type="button"
              onClick={restoreBackup}
              className={`${styles.backupBtn} ${styles.backupBtnDanger}`}
              disabled={isRunning || !selectedBackup}
            >
              ♻️ Restore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
