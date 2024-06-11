// src/components/inputs/TextInput.tsx

import React from 'react';

interface TextInputProps {
    label?: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * TextInput component for handling text inputs with a label.
 */
const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange }) => {
    return (
        <div className="mb-4">
            {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>}
            <input
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
};

export default TextInput;
