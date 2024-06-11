// src/components/inputs/NumberInput.tsx

import React from 'react';

interface NumberInputProps {
    label: string;
    name: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * NumberInput component for handling numerical inputs with a label.
 */
const NumberInput: React.FC<NumberInputProps> = ({ label, name, value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="number"
                name={name}
                id={name}
                value={value.toString()}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
};

export default NumberInput;
