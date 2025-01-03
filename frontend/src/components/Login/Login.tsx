import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import c from './index.module.css';
import axiosInstance, { endpoints } from '../../utils/axios';

const Login: React.FC = () => {
    const [ emailOrUsernameValue, setEmailOrUsernameValue ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isEmailEntered = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailOrUsernameValue);
        try {
            const response = await axiosInstance.post(endpoints.auth.login, {
                [isEmailEntered ? "email" : "username"]: emailOrUsernameValue,
                password,
            });
            localStorage.setItem("accessToken", response.data.accessToken);

            navigate('/');
        } catch (err: any) {
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className={c.loginContainer}>
            <h1 className={c.loginHeader}>Login</h1>
            <form className={c.loginForm} onSubmit={handleSubmit}>
                <div className={c.inputGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Your email or username"
                        value={emailOrUsernameValue}
                        onChange={(e) => setEmailOrUsernameValue(e.target.value)}
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
