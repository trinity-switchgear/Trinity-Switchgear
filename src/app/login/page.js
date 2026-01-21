"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin-login.module.css";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Change credentials
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "trinity123";

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminName", "Anuj");
      router.push("/broadcast");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  return (
    <section className="container">
      <div className={styles.card}>
        <h2 className={styles.title}>🔐 Admin Login</h2>

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
