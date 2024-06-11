// src/components/dynamic/ButtonComponent.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { ButtonType } from '../../types/componentTypes';
import TextInput from '../inputs/TextInput';
import ColorPicker from '../inputs/ColorPicker';
import SelectInput from '../inputs/SelectInput';

interface ButtonComponentProps {
    data: ButtonType;
    initialHtml: string;
    onHtmlChange: (html: string) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ data, initialHtml, onHtmlChange }) => {
    const [buttonText, setButtonText] = useState(data.value);
    const [buttonSize, setButtonSize] = useState(data.additionalProps.buttonSize?.defaultValue || 'large');
    const [backgroundColor, setBackgroundColor] = useState(data.additionalProps.backgroundColor?.defaultValue || '#008000');
    const [hoverBackgroundColor, setHoverBackgroundColor] = useState(data.additionalProps.hoverBackgroundColor?.defaultValue || '#004d00');
    const [textColor, setTextColor] = useState(data.additionalProps.textColor?.defaultValue || '#ffffff');
    const [hoverTextColor, setHoverTextColor] = useState(data.additionalProps.hoverTextColor?.defaultValue || '#cccccc');

    useEffect(() => {
        // Remove previous style elements to prevent duplicate styles
        const existingStyleElement = document.getElementById('dynamic-button-styles');
        if (existingStyleElement) {
            existingStyleElement.remove();
        }

        const styleElement = document.createElement('style');
        styleElement.id = 'dynamic-button-styles';
        styleElement.innerHTML = `
            .btn-dynamic {
                background-color: ${backgroundColor};
                color: ${textColor};
                padding: ${buttonSize === 'large' ? '12px 24px' : buttonSize === 'medium' ? '8px 16px' : '4px 8px'};
            }
            .btn-dynamic:hover {
                background-color: ${hoverBackgroundColor};
                color: ${hoverTextColor};
            }
        `;
        document.head.appendChild(styleElement);
    }, [buttonSize, backgroundColor, hoverBackgroundColor, textColor, hoverTextColor]);

    const generateHtml = useCallback(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = initialHtml.trim();
        const buttonElement = tempDiv.querySelector('a');
        if (buttonElement) {
            buttonElement.textContent = buttonText;
            buttonElement.className = `btn-dynamic`;
        }
        return tempDiv.innerHTML;
    }, [buttonText, initialHtml]);

    useEffect(() => {
        const html = generateHtml();
        onHtmlChange(html);
    }, [buttonText, generateHtml]);

    return (
        <div className="space-y-4">
            <TextInput
                name="buttonText"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
            />
            <SelectInput
                name="buttonSize"
                value={buttonSize}
                options={[
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                ]}
                onChange={(e) => setButtonSize(e.target.value)}
            />
            <ColorPicker
                label="Background Color"
                value={backgroundColor}
                onChange={setBackgroundColor}
            />
            <ColorPicker
                label="Hover Background Color"
                value={hoverBackgroundColor}
                onChange={setHoverBackgroundColor}
            />
            <ColorPicker
                label="Text Color"
                value={textColor}
                onChange={setTextColor}
            />
            <ColorPicker
                label="Hover Text Color"
                value={hoverTextColor}
                onChange={setHoverTextColor}
            />
        </div>
    );
};

export default ButtonComponent;
