// src/components/inputs/ColorInput.tsx

import React from 'react';

interface ColorInputProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * ColorInput component for handling color inputs.
 */
const ColorInput: React.FC<ColorInputProps> = ({ name, value, onChange }) => {
    return (
        <input
            type="color"
            name={name}
            value={value}
            onChange={onChange}
            className="input input-bordered w-full"
        />
    );
};

export default ColorInput;
