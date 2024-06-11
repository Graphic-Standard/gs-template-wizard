// src/components/Wizard.tsx

import React, { useState } from 'react';
import HTMLPreview from './HtmlPreview';
import {
    TitleComponent,
    ParagraphComponent,
    BackgroundComponent,
    MediaComponent,
    ButtonComponent,
    LogoComponent,
} from './dynamic';
import { ComponentType, TitleType, ParagraphType, BackgroundType, MediaType, ButtonType, LogoType } from '../types/componentTypes';
import { components, htmlString } from '../mockdata';

interface WizardProps {
    containerHeight: number;
}

const Wizard: React.FC<WizardProps> = ({ containerHeight }) => {
    const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);
    const [hoveredComponentId, setHoveredComponentId] = useState<number | null>(null);
    const [htmlContent, setHtmlContent] = useState<string>(htmlString);
    const [selectedComponentIds, setSelectedComponentIds] = useState<number[]>([]);

    const handleHtmlChange = (newHtml: string, componentId: number) => {
        const updatedHtml = htmlContent.replace(
            new RegExp(`(<!-- Start ${componentId} -->)[\\s\\S]*?(<!-- End ${componentId} -->)`, 'gm'),
            `$1${newHtml}$2`
        );
        setHtmlContent(updatedHtml);
    };

    const renderComponentEditor = (component: ComponentType) => {
        const componentHtmlMatch = htmlContent.match(new RegExp(`<!-- Start ${component.id} -->([\\s\\S]*?)<!-- End ${component.id} -->`));
        const initialHtml = componentHtmlMatch ? componentHtmlMatch[1] : '';

        switch (component.componentType) {
            case 'title':
                return <TitleComponent data={component as TitleType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            case 'paragraph':
                return <ParagraphComponent data={component as ParagraphType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            case 'background':
                return <BackgroundComponent data={component as BackgroundType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            case 'media':
                return <MediaComponent data={component as MediaType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            case 'button':
                return <ButtonComponent data={component as ButtonType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            case 'logo':
                return <LogoComponent data={component as LogoType} initialHtml={initialHtml} onHtmlChange={(html) => handleHtmlChange(html, component.id)} />;
            default:
                return null;
        }
    };

    const handleCheckboxChange = (id: number) => {
        setSelectedComponentIds(prev =>
            prev.includes(id) ? prev.filter(compId => compId !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex h-full max-h-full overflow-hidden">
            <div className="w-1/4 p-4 overflow-auto bg-white max-h-full">
                {components.map(comp => (
                    <div
                        key={comp.id}
                        className="flex items-center mb-2"
                        onMouseEnter={() => setHoveredComponentId(comp.id)}
                        onMouseLeave={() => setHoveredComponentId(null)}
                    >
                        <input
                            type="checkbox"
                            checked={selectedComponentIds.includes(comp.id)}
                            onChange={() => handleCheckboxChange(comp.id)}
                            className="mr-2"
                        />
                        <button
                            className={`flex-grow text-left p-2 bg-white rounded shadow hover:bg-gray-200 ${selectedComponent?.id === comp.id ? 'bg-gray-300' : ''}`}
                            onClick={() => setSelectedComponent(comp)}
                        >
                            {comp.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className="w-1/4 p-4 overflow-auto bg-white max-h-full">
                {selectedComponent ? (
                    renderComponentEditor(selectedComponent)
                ) : (
                    <p className="text-center text-gray-500">Select a component to edit its properties</p>
                )}
            </div>
            <div className="w-1/2 p-4 overflow-hidden max-h-full">
                <HTMLPreview htmlContent={htmlContent} selectedComponentId={selectedComponent?.id || null} hoveredComponentId={hoveredComponentId} containerHeight={containerHeight} />
            </div>
        </div>
    );
};

export default Wizard;
