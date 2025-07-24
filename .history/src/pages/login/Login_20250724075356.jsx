import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Button from "../../component/button/Button";
import { useAuth } from "../../contexts/FakeAuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("islamsaeed891@gmail.com");
  const [password, setPassword] = useState("123456");
  const { logIn, isAuthenticated } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    logIn(email, password);
  }
  useEffect(function () {
    if (isAuthenticated) navigate("/app");
  }, []);
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
