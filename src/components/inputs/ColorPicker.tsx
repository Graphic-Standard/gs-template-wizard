import React, { useState } from 'react';

interface ColorPickerProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-1 flex items-center space-x-2">
                <div
                    className="w-10 h-10 border rounded"
                    style={{ backgroundColor: value }}
                    onClick={() => setShowPicker(!showPicker)}
                ></div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            {showPicker && (
                <input
                    type="color"
                    value={value}
                    onChange={handleChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
            )}
        </div>
    );
};

export default ColorPicker;
