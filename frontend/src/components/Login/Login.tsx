import React, { useState } from "react";
import c from "./index.module.css";
import axiosInstance from "../../utils/axios";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/auth/login", {
                email,
                password,
            });
            console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);
            window.location.href = "/";
        } catch (err: any) {
            console.error("Login error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className={c.loginContainer}>
            <h1 className={c.loginHeader}>Login</h1>
            <form className={c.loginForm} onSubmit={handleSubmit}>
                <div className={c.inputGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email or phone"
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={c.error}>{error}</p>}
                <button type="submit" className={c.loginButton}>
                    Login
                </button>
            </form>

            <p className={c.loginFooter}>
                Don’t have an account? <a href="/auth/register"> Register</a>
            </p>
        </div>
    );
};

export default Login;
