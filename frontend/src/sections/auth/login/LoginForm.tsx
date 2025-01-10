import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths.ts';
import c from '@styles/login.module.css';
import api, { endpoints } from '@utils/axios.ts';
import InputField from '@components/InputField/InputField.tsx';
import { z } from 'zod';
import { SingleValidationError } from '../../../types/common.ts';

// ----------------------------------------------------------------------

export default function LoginForm() {
    const [ credentials, setCredentials ] = useState({
        emailOrUsernameValue: '',
        password: '',
    });
    const [ error, setError ] = useState('');
    const [ validationError, setValidationError ] = useState<SingleValidationError>({
        field: '',
        message: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const loginValidationSchema = z.object({
        emailOrUsernameValue: z.string().nonempty('Email or username must be entered').min(3, 'Must be at least 3 characters'),
        password: z.string().nonempty('Password must be entered').min(8, 'Must be at least 8 characters'),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setValidationError({
            field: '',
            message: '',
        });
        setError('');

        const isEmailEntered = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            credentials.emailOrUsernameValue,
        );

        try {
            loginValidationSchema.parse(credentials);

            const response = await api.post(endpoints.auth.login, {
                [isEmailEntered ? 'email' : 'username']: credentials.emailOrUsernameValue,
                password: credentials.password,
            });
            localStorage.setItem('accessToken', response.data.accessToken);

            navigate(paths.home.root);
        } catch (err: any) {
            if (err instanceof z.ZodError) {
                setValidationError({
                    field: String(err.errors[0].path[0]),
                    message: err.errors[0].message,
                });
            } else {
                setError(err.response?.data?.error || 'LoginPage failed');
            }
        }
    };

    return (
        <form className={c.loginForm} onSubmit={handleSubmit} noValidate>
            <InputField
                label="Email / Username"
                inputId="emailOrUsernameValue"
                placeholder="Your email or username"
                value={credentials.emailOrUsernameValue}
                onChange={handleInputChange}
                error={validationError.field === 'emailOrUsernameValue' ? validationError.message : ''}
            />
            <InputField
                label="Password"
                type="password"
                inputId="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInputChange}
                error={validationError.field === 'password' ? validationError.message : ''}
            />

            {error && <p className={c.error}>{error}</p>}
            <button type="submit" className={c.loginButton}>
                Login
            </button>
        </form>
    );
}
