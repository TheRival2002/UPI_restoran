import c from './../../styles/inputField.module.css';
import { ChangeEventHandler } from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    inputId: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    required: boolean;
}

export default function InputField({
    label, type, inputId, placeholder, value, onChange, required
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
                required={required}
            />
        </div>
    );
}
