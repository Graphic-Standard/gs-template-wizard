// src/components/inputs/SelectInput.tsx

import React from 'react';

interface Option {
    label: string;
    value: string | number;
}

interface SelectInputProps {
    name: string;
    value: string | number;
    options: Option[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * SelectInput component for handling select dropdowns.
 */
const SelectInput: React.FC<SelectInputProps> = ({ name, value, options, onChange }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="select select-bordered w-full"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default SelectInput;
