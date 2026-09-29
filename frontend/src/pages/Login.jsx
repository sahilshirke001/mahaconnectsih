import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

   alert("Login successful!");
navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🏛️
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to your MahaConnect account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login →
          </button>

        </form>

        <p className="login-note">
          Don't have an account? Registration will be added soon.
        </p>

      </div>

    </div>
  );
}

export default Login;