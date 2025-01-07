import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths.ts';
import c from '@styles/login.module.css';
import api, { endpoints } from '@utils/axios.ts';
import InputField from '@components/InputField/InputField.tsx';

// ----------------------------------------------------------------------

export default function LoginForm() {
    const [ credentials, setCredentials ] = useState({
        emailOrUsernameValue: '',
        password: '',
    });
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isEmailEntered = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            credentials.emailOrUsernameValue,
        );
        try {
            const response = await api.post(endpoints.auth.login, {
                [isEmailEntered ? 'email' : 'username']: credentials.emailOrUsernameValue,
                password: credentials.password,
            });
            localStorage.setItem('accessToken', response.data.accessToken);

            navigate(paths.home.root);
        } catch (err: any) {
            console.error('LoginPage error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'LoginPage failed');
        }
    };

    return (
        <form className={c.loginForm} onSubmit={handleSubmit}>
            <InputField
                label="Email / Username"
                type="text"
                inputId="emailOrUsernameValue"
                placeholder="Your email or username"
                value={credentials.emailOrUsernameValue}
                onChange={handleInputChange}
                required={true}
            />
            <InputField
                label="Password"
                type="password"
                inputId="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInputChange}
                required={true}
            />

            {error && <p className={c.errorMessage}>{error}</p>}
            <button type="submit" className={c.loginButton}>
                Login
            </button>
        </form>
    )
    ;
}
