import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths.ts';
import c from '@styles/register.module.css';
import api, { endpoints } from '@utils/axios.ts';
import InputField from '@components/InputField/InputField.tsx';

// ----------------------------------------------------------------------

export default function RegisterForm() {
    const [ userData, setUserData ] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
    });
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post(
                endpoints.auth.register,
                userData
            );
            localStorage.setItem('accessToken', response.data.accessToken);

            setSuccess('Registration successful! You can now login.');
            setUserData({
                name: '',
                surname: '',
                username: '',
                email: '',
                password: '',
            });

            navigate(paths.home.root);
        } catch (err: any) {
            console.error(
                'Registration error:',
                err.response?.data || err.message
            );
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <form className={c.registerForm} onSubmit={handleSubmit}>
            <InputField
                label="First Name"
                type="text"
                inputId="name"
                placeholder="Your first name"
                value={userData.name}
                onChange={handleInputChange}
                required={true}
            />
            <InputField
                label="Last Name"
                type="text"
                inputId="surname"
                placeholder="Your last name"
                value={userData.surname}
                onChange={handleInputChange}
                required={true}
            />
            <InputField
                label="Username"
                type="text"
                inputId="username"
                placeholder="Your username"
                value={userData.username}
                onChange={handleInputChange}
                required={true}
            />
            <InputField
                label="E-mail"
                type="email"
                inputId="email"
                placeholder="Your email"
                value={userData.email}
                onChange={handleInputChange}
                required={true}
            />
            <InputField
                label="Password"
                type="password"
                inputId="password"
                placeholder="Your password"
                value={userData.password}
                onChange={handleInputChange}
                required={true}
            />
            {
                error && <p className={c.error}>{error}</p>
            }
            {
                success && <p className={c.success}>{success}</p>
            }
            <button type="submit" className={c.registerButton}>
                Register
            </button>
            ;
        </form>
    )
    ;
}
