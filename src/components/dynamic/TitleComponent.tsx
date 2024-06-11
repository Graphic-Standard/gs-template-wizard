// src/components/dynamic/TitleComponent.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { TitleType } from '../../types/componentTypes';
import TextInput from '../inputs/TextInput';
import ColorPicker from '../inputs/ColorPicker';

interface TitleComponentProps {
    data: TitleType;
    initialHtml: string;
    onHtmlChange: (html: string) => void;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ data, initialHtml, onHtmlChange }) => {
    const [title, setTitle] = useState(data.value);
    const [fontFamily, setFontFamily] = useState(data.additionalProps.fontFamily?.defaultValue || 'Serif');
    const [textColor, setTextColor] = useState(data.additionalProps.textColor?.defaultValue || '#333');

    const generateHtml = useCallback(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = initialHtml.trim();
        const titleElement = tempDiv.querySelector('h1');
        if (titleElement) {
            titleElement.style.fontFamily = fontFamily;
            titleElement.style.color = textColor;
            titleElement.textContent = title;
        }
        return tempDiv.innerHTML;
    }, [title, fontFamily, textColor, initialHtml]);

    useEffect(() => {
        const html = generateHtml();
        onHtmlChange(html);
    }, [title, fontFamily, textColor, generateHtml]);

    return (
        <div className="space-y-4">
            <TextInput
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextInput
                name="fontFamily"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
            />
            <ColorPicker
                label="Text Color"
                value={textColor}
                onChange={setTextColor}
            />
        </div>
    );
};

export default TitleComponent;
