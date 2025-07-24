import { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../component/button/Button";
import { useAuth } from "../../contexts/FakeAuthContext";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("islamsaeed891@gmail.com");
  const [password, setPassword] = useState("123456");
  const { logIn, isAuthenticated } = useAuth();
  function handleLogin(e) {
    e.preventDefault();
    logIn();
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
