// src/components/dynamic/LogoComponent.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { LogoType } from '../../types/componentTypes';
import FileInput from '../inputs/FileInput';

interface LogoComponentProps {
    data: LogoType;
    initialHtml: string;
    onHtmlChange: (html: string) => void;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ data, initialHtml, onHtmlChange }) => {
    const [imageUrl, setImageUrl] = useState(data.additionalProps.imageUrl?.defaultValue || '');

    const generateHtml = useCallback(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = initialHtml.trim();
        const logoElement = tempDiv.querySelector('img');
        if (logoElement) {
            logoElement.src = imageUrl;
        }
        return tempDiv.innerHTML;
    }, [imageUrl, initialHtml]);

    useEffect(() => {
        const html = generateHtml();
        onHtmlChange(html);
    }, [imageUrl, generateHtml]);

    return (
        <div className="space-y-4">
            <FileInput
                name="imageUrl"
                value={imageUrl}
                onChange={setImageUrl}
            />
        </div>
    );
};

export default LogoComponent;
