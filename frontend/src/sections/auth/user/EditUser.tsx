import InputField from '@components/inputField/InputField.tsx';
import { useAuthContext } from '@hooks/useAuthContext.ts';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import c from '@styles/register.module.css';
import React, { useEffect, useState } from 'react';
import { SingleValidationError } from '../../../types/common.ts';
import { UserProfileInfoDTO } from '../../../types/user.dto.ts';
import { z } from 'zod';

// -------------------------------------------------

export default function EditUser() {
    const { user, update } = useAuthContext();

    const [ userData, setUserData ] = useState<UserProfileInfoDTO>({
        id: user?.id || 0,
        name: user?.name || '',
        surname: user?.surname || '',
        username: user?.username || '',
        email: user?.email || '',
    });
    const [ validationError, setValidationError ] = useState<SingleValidationError>({
        field: '',
        message: '',
    });
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if (user) {
            setUserData({
                id: user.id,
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
            });
        }
    }, [ user ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const editUserValidationSchema = z.object({
        name: z.string().nonempty('First name must be entered').min(2, 'Must be at least 2 characters'),
        surname: z.string().nonempty('Last name must be entered').min(2, 'Must be at least 2 characters'),
        username: z.string().nonempty('Username must be entered').min(3, 'Must be at least 3 characters'),
        email: z.string().nonempty('Email must be entered').email('Must be a valid email'),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setValidationError({
            field: '',
            message: '',
        });
        setError('');
        setIsLoading(true);

        try {
            editUserValidationSchema.parse(userData);
            await update({ ...user, ...userData });
        } catch (err: any) {
            if (err instanceof z.ZodError) {
                setValidationError({
                    field: String(err.errors[0].path[0]),
                    message: err.errors[0].message,
                });
            } else {
                setError(err?.response?.data?.error || 'An error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card sx={{ mt: 3, maxWidth: 700, width: 1 }}>
            <CardHeader
                title={'Edit profile'}
            />
            <CardContent>
                <form onSubmit={handleSubmit} noValidate>
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

                    {error && <p className={c.error}>{error}</p>}

                    <Button
                        variant={'contained'}
                        type={'submit'}
                        loading={isLoading}
                        sx={{ color: 'common.white', textTransform: 'none', mt: 1 }}
                    >
                        Save changes
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
