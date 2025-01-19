import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths.ts';
import c from '@styles/register.module.css';
import InputField from '@components/inputField/InputField.tsx';
import { z } from 'zod';
import { SingleValidationError } from '../../../types/common.ts';
import { UserRegisterDataDTO } from '../../../types/user.dto.ts';
import { useAuthContext } from '../../../hooks/useAuthContext.ts';

// ----------------------------------------------------------------------

export default function RegisterForm() {
    const [ userData, setUserData ] = useState<UserRegisterDataDTO>({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
    });
    const [ validationError, setValidationError ] = useState<SingleValidationError>({
        field: '',
        message: '',
    });
    const [ error, setError ] = useState('');
    const { register } = useAuthContext();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const registerValidationSchema = z.object({
        name: z.string().nonempty('First name must be entered').min(2, 'Must be at least 2 characters'),
        surname: z.string().nonempty('Last name must be entered').min(2, 'Must be at least 2 characters'),
        username: z.string().nonempty('Username must be entered').min(3, 'Must be at least 3 characters'),
        email: z.string().nonempty('Email must be entered').email('Must be a valid email'),
        password: z.string()
            .nonempty('Password must be entered')
            .min(8, 'Must be at least 8 characters')
            .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least 1 letter and 1 number'),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setValidationError({
            field: '',
            message: '',
        });
        setError('');

        try {
            registerValidationSchema.parse(userData);
            await register(userData);
            navigate(paths.home.root);
        } catch (err: any) {
            if (err instanceof z.ZodError) {
                setValidationError({
                    field: String(err.errors[0].path[0]),
                    message: err.errors[0].message,
                });
            } else {
                setError(err.response?.data?.error || 'Registration failed');
            }
        }
    };

    return (
        <form className={c.registerForm} onSubmit={handleSubmit} noValidate>
            <InputField
                label="First Name"
                inputId="name"
                placeholder="Your first name"
                value={userData.name}
                onChange={handleInputChange}
                error={validationError.field === 'name' ? validationError.message : ''}
            />
            <InputField
                label="Last Name"
                inputId="surname"
                placeholder="Your last name"
                value={userData.surname}
                onChange={handleInputChange}
                error={validationError.field === 'surname' ? validationError.message : ''}
            />
            <InputField
                label="Username"
                inputId="username"
                placeholder="Your username"
                value={userData.username}
                onChange={handleInputChange}
                error={validationError.field === 'username' ? validationError.message : ''}
            />
            <InputField
                label="E-mail"
                type="email"
                inputId="email"
                placeholder="Your email"
                value={userData.email}
                onChange={handleInputChange}
                error={validationError.field === 'email' ? validationError.message : ''}
            />
            <InputField
                label="Password"
                type="password"
                inputId="password"
                placeholder="Your password"
                value={userData.password}
                onChange={handleInputChange}
                error={validationError.field === 'password' ? validationError.message : ''}
            />

            {error && <p className={c.error}>{error}</p>}
            <button type="submit" className={c.registerButton}>
                Register
            </button>
        </form>
    )
    ;
}
