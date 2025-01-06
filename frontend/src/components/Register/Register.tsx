import React, { useState } from "react";
import c from "./reg.module.css";
import axiosInstance from "../../utils/axios";

const Register: React.FC = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
                "/auth/register",
                userData
            );
            console.log("Registration successful:", response.data);
            setSuccess("Registration successful! You can now login.");
            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
        } catch (err: any) {
            console.error(
                "Registration error:",
                err.response?.data || err.message
            );
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
                        name="firstName"
                        placeholder="Your first name"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={c.inputGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        value={userData.lastName}
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
                Already have an account? <a href="/auth/login">Login</a>
            </p>
            <p className={c.registerFooter}>
                <a href="/">Go to Home</a>
            </p>
        </div>
    );
};

export default Register;
