import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '../../routes/paths.ts';
import c from './reg.module.css';
import axiosInstance, { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

const Register: React.FC = () => {
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
            const response = await axiosInstance.post(
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
        <div className={c.registerContainer}>
            <h1 className={c.registerHeader}>Register</h1>
            <form className={c.registerForm} onSubmit={handleSubmit}>
                <div className={c.inputGroup}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your first name"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="surname">Last Name</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Your last name"
                        value={userData.surname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your username"
                        value={userData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        value={userData.password}
                        onChange={handleInputChange}
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
                Already have an account? <a href={paths.auth.login}>Login</a>
            </p>
            <p className={c.registerFooter}>
                <a href={paths.home.root}>Go to Home</a>
            </p>
        </div>
    );
};

export default Register;
