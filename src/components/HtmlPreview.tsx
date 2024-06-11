// src/components/HTMLPreview.tsx

import React, { useEffect, useRef, useState } from 'react';

interface HTMLPreviewProps {
    htmlContent: string;
    selectedComponentId: number | null;
    hoveredComponentId: number | null;
    containerHeight: number;
}

const HTMLPreview: React.FC<HTMLPreviewProps> = ({ htmlContent, selectedComponentId, hoveredComponentId, containerHeight }) => {
    const previewRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (previewRef.current && containerHeight) {
            const contentHeight = previewRef.current.scrollHeight;
            console.log(`Container Height: ${containerHeight}, Content Height: ${contentHeight}`); // Debugging

            if (contentHeight > containerHeight) {
                const newScale = containerHeight / contentHeight;
                console.log(`Scaling to: ${newScale}`); // Debugging
                setScale(newScale);
            } else {
                setScale(1);
            }
        }
    }, [htmlContent, containerHeight]);

    useEffect(() => {
        if (previewRef.current) {
            const elements = previewRef.current.querySelectorAll('[data-component-id]');
            elements.forEach(element => {
                const id = parseInt(element.getAttribute('data-component-id') || '0', 10);
                element.classList.remove('highlight', 'hover-highlight');

                if (id === selectedComponentId) {
                    element.classList.add('highlight');
                }

                if (id === hoveredComponentId) {
                    element.classList.add('hover-highlight');
                }
            });
        }
    }, [htmlContent, selectedComponentId, hoveredComponentId]);

    return (
        <div className="html-preview-wrapper max-h-full h-full overflow-hidden relative">
            <div
                className="html-preview transform origin-top max-h-full h-full"
                ref={previewRef}
                style={{ transform: `scale(${scale})`}}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
};

export default HTMLPreview;
