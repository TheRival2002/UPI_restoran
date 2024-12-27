import React from "react";
import "./login.css"; // Povezivanje CSS datoteke

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Your email or phone"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="login-footer">
          <a href="/reset-password">Forgot password?</a>
        </p>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="login-footer">
        Don’t have an account? <a href="/auth/register">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
