// src/App.tsx

import React, { useState, useRef, useEffect } from 'react';
import BasicSettings from './BasicSettings';
import Wizard from './Wizard';
import Confirmation from './Confirmation';

const WizardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [settings, setSettings] = useState({ name: '', width: 800, height: 600, tags: '' });
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    useEffect(() => {
        if (containerRef.current) {
            console.log(containerRef.current.clientHeight)
            setContainerHeight(containerRef.current.clientHeight - 75);
        }
    }, []);

    const handleSettingsNext = (newSettings: { name: string; width: number; height: number; tags: string }) => {
        setSettings(newSettings);
        setActiveTab(2);
    };

    const handleSave = () => {
        console.log('Saving data to the database...');
        setActiveTab(3);
    };

    return (
        <div className="min-h-screen max-h-screen bg-gray-100 p-4 flex flex-col items-center">
            <div className="flex justify-center space-x-4 mb-4">
                <button className={`px-6 py-2 rounded-md text-white ${activeTab === 1 ? 'bg-blue-500' : 'bg-blue-300'}`} onClick={() => setActiveTab(1)}>Basic Settings</button>
                <button className={`px-6 py-2 rounded-md text-white ${activeTab === 2 ? 'bg-blue-500' : 'bg-blue-300'}`} onClick={() => setActiveTab(2)}>Components</button>
                <button className={`px-6 py-2 rounded-md text-white ${activeTab === 3 ? 'bg-blue-500' : 'bg-blue-300'}`} onClick={() => setActiveTab(3)}>Confirmation</button>
            </div>
            <div ref={containerRef} className="p-4 border border-gray-300 shadow grow rounded-lg bg-white overflow-hidden w-full max-h-full">
                {activeTab === 1 && <BasicSettings onNext={handleSettingsNext} />}
                {activeTab === 2 && <Wizard containerHeight={containerHeight} />}
                {activeTab === 3 && <Confirmation settings={settings} onSave={handleSave} />}
            </div>
        </div>
    );
};

export default WizardPage;
