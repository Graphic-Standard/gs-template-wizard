// src/components/dynamic/ParagraphComponent.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { ParagraphType } from '../../types/componentTypes';
import TextInput from '../inputs/TextInput';
import ColorPicker from '../inputs/ColorPicker';

interface ParagraphComponentProps {
    data: ParagraphType;
    initialHtml: string;
    onHtmlChange: (html: string) => void;
}

const ParagraphComponent: React.FC<ParagraphComponentProps> = ({ data, initialHtml, onHtmlChange }) => {
    const [text, setText] = useState(data.value);
    const [fontFamily, setFontFamily] = useState(data.additionalProps.fontFamily?.defaultValue || 'Sans-serif');
    const [textColor, setTextColor] = useState(data.additionalProps.textColor?.defaultValue || '#666');
    const [backgroundColor, setBackgroundColor] = useState(data.additionalProps.backgroundColor?.defaultValue || 'transparent');

    const generateHtml = useCallback(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = initialHtml.trim();
        const paragraphElement = tempDiv.querySelector('p');
        if (paragraphElement) {
            paragraphElement.style.fontFamily = fontFamily;
            paragraphElement.style.color = textColor;
            paragraphElement.style.backgroundColor = backgroundColor;
            paragraphElement.textContent = text;
        }
        return tempDiv.innerHTML;
    }, [text, fontFamily, textColor, backgroundColor, initialHtml]);

    useEffect(() => {
        const html = generateHtml();
        onHtmlChange(html);
    }, [text, fontFamily, textColor, backgroundColor, generateHtml]);

    return (
        <div className="space-y-4">
            <TextInput
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
            <ColorPicker
                label="Background Color"
                value={backgroundColor}
                onChange={setBackgroundColor}
            />
        </div>
    );
};

export default ParagraphComponent;
