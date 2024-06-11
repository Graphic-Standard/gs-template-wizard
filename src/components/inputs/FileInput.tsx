// src/components/inputs/FileInput.tsx

import React, { useState } from 'react';
import TextInput from './TextInput';

interface FileInputProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
}

/**
 * FileInput component for handling file inputs and URL inputs.
 */
const FileInput: React.FC<FileInputProps> = ({ name, value, onChange }) => {
    const [fileUrl, setFileUrl] = useState(value);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setFileUrl(result);
                onChange(result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUrlChange = (url: string) => {
        setFileUrl(url);
        onChange(url);
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Upload File</label>
                <input
                    type="file"
                    name={name}
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>
            <div>
                <TextInput
                    name={`${name}_url`}
                    value={fileUrl}
                    onChange={(e) => handleUrlChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FileInput;
