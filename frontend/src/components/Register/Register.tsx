import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import c from './reg.module.css';
import axiosInstance, { endpoints } from '../../utils/axios';

const Register: React.FC = () => {
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(endpoints.auth.register, {
                name,
                surname,
                username,
                email,
                password,
            });
            localStorage.setItem('accessToken', response.data.accessToken);

            setSuccess('Registration successful! You can now login.');
            setName('');
            setSurname('');
            setUsername('');
            setEmail('');
            setPassword('');

            navigate('/');
        } catch (err: any) {
            console.error('Registration error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className={c.registerContainer}>
            <h1 className={c.registerHeader}>Register</h1>
            <form className={c.registerForm} onSubmit={handleSubmit}>
                <div className={c.inputGroup}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your first name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="surname">Last Name</label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Your last name"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
