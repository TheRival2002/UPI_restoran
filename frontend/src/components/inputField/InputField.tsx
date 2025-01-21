import c from './../../styles/inputField.module.css';
import { ChangeEventHandler } from 'react';

interface InputFieldProps {
    label: string;
    inputId: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    error?: string;
}

export default function InputField({
    label,
    inputId,
    placeholder,
    value,
    onChange,
    type = 'text',
    error,
}: InputFieldProps) {
    return (
        <div className={c.inputGroup}>
            <label htmlFor={inputId}>{label}</label>
            <input
                type={type}
                id={inputId}
                name={inputId}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <p className={c.error}>{error}</p>}
        </div>
    );
}
