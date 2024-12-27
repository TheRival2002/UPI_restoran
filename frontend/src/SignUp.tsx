import React from "react";
import "./signup.css"; // Povezivanje CSS datoteke

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>
      <form className="signup-form">
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="signup-footer">
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
