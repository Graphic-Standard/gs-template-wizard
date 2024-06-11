// src/components/BasicSettings.tsx

import React, { useState } from 'react';
import TextInput from './inputs/TextInput';
import NumberInput from './inputs/NumberInput';

const BasicSettings: React.FC<{ onNext: (settings: { name: string; width: number; height: number; tags: string }) => void }> = ({ onNext }) => {
    const [name, setName] = useState('');
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const [tags, setTags] = useState('');

    const handleSubmit = () => {
        onNext({ name, width, height, tags });
    };

    return (
        <div className="p-4 max-h-full overflow-auto">
            <TextInput
                label="Template Name"
                name="templateName"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <NumberInput
                label="Width"
                name="templateWidth"
                value={width}
                onChange={e => setWidth(parseInt(e.target.value, 10))}
            />
            <NumberInput
                label="Height"
                name="templateHeight"
                value={height}
                onChange={e => setHeight(parseInt(e.target.value, 10))}
            />
            <TextInput
                label="Tags"
                name="templateTags"
                value={tags}
                onChange={e => setTags(e.target.value)}
            />
            <button onClick={handleSubmit} className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
    );
};

export default BasicSettings;
