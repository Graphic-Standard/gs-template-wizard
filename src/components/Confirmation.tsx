// src/components/Confirmation.tsx

import React from 'react';

interface ConfirmationProps {
    settings: { name: string; width: number; height: number; tags: string };
    onSave: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ settings, onSave }) => {
    return (
        <div className="p-4 max-h-full overflow-auto">
            <h2 className="text-lg font-bold mb-4">Confirm Your Settings</h2>
            <p><strong>Name:</strong> {settings.name}</p>
            <p><strong>Width:</strong> {settings.width}px</p>
            <p><strong>Height:</strong> {settings.height}px</p>
            <p><strong>Tags:</strong> {settings.tags}</p>
            <button onClick={onSave} className="btn btn-success mt-4">Save to Database</button>
        </div>
    );
};

export default Confirmation;
