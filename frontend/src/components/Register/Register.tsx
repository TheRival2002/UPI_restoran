import React, { useState } from "react";
import c from "./reg.module.css";
import axiosInstance from "../../utils/axios";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      setSuccess("Registration successful! You can now login.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className={c.registerContainer}>
      <h1 className={c.registerHeader}>Register</h1>
      <form className={c.registerForm} onSubmit={handleSubmit}>
        <div className={c.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={c.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={c.inputGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={c.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={c.error}>{error}</p>}
        {success && <p className={c.success}>{success}</p>}
        <button type="submit" className={c.registerButton}>
          Register
        </button>
      </form>
      <p className={c.registerFooter}>
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
