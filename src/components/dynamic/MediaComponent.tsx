// src/components/dynamic/MediaComponent.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { MediaType } from '../../types/componentTypes';
import FileInput from '../inputs/FileInput';

interface MediaComponentProps {
    data: MediaType;
    initialHtml: string;
    onHtmlChange: (html: string) => void;
}

const MediaComponent: React.FC<MediaComponentProps> = ({ data, initialHtml, onHtmlChange }) => {
    const [imageUrl, setImageUrl] = useState(data.additionalProps.imageUrl?.defaultValue || '');

    const generateHtml = useCallback(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = initialHtml.trim();
        const mediaElement = tempDiv.querySelector('img');
        if (mediaElement) {
            mediaElement.src = imageUrl;
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

export default MediaComponent;
