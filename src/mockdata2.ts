import { ComponentEnum, ComponentType, InputEnum } from "./types/componentTypes";

export const htmlString = `
<div class="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style="background-image: url('https://path-to-your-background-image.png');">
    <!-- Book Title -->
    <h1 class="text-red-600 text-6xl font-bold mt-6" style="font-family: 'American Captain', sans-serif;" data-component-id="2">na některé záhady je i sherlock krátký</h1>
    
    <div class="flex flex-row items-start justify-between w-full max-w-6xl mt-6">
        <!-- Book Cover Image -->
        <div class="relative">
            <img src="https://images.placeholders.dev/?width=696&height=727&text=Kniha&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true" alt="Kniha Cover" class="shadow-lg rounded-lg" data-component-id="3">
            <!-- Sticker -->
            <div class="absolute top-1/4 right-[-50px] transform -translate-y-1/2 p-4 bg-white text-red-600 text-xl font-bold rounded-full shadow-lg" data-component-id="5">
                ZNÁTE Z NETFLIXU
            </div>
        </div>
        
        <!-- Logo -->
        <img src="https://images.placeholders.dev/?width=426&height=62&text=Fragment&bgColor=%23ffffff&textColor=%23000000" alt="Fragment Logo" class="mt-4" data-component-id="4">
    </div>
</div>
`;

export const components: ComponentType[] = [
    {
        "id": 1,
        "name": "Background",
        "value": "https://path-to-your-background-image.png",
        "componentType": ComponentEnum.Background,
        "additionalProps": {
            "backgroundColor": { "code": "backgroundColor", "label": "Background Color", "inputTypes": [InputEnum.Color], "defaultValue": "#000000" },
            "imageUrl": { "code": "imageUrl", "label": "Background Image", "inputTypes": [InputEnum.File, InputEnum.Text], "defaultValue": "https://path-to-your-background-image.png" }
        }
    },
    {
        "id": 2,
        "name": "Book Title",
        "value": "na některé záhady je i sherlock krátký",
        "componentType": ComponentEnum.Title,
        "additionalProps": {
            "fontFamily": { "code": "fontFamily", "label": "Font Family", "inputTypes": [InputEnum.Select], "defaultValue": "American Captain" },
            "fontSize": { "code": "fontSize", "label": "Font Size", "inputTypes": [InputEnum.Select], "defaultValue": "96px" },
            "textColor": { "code": "textColor", "label": "Text Color", "inputTypes": [InputEnum.Color], "defaultValue": "#bd1515" }
        }
    },
    {
        "id": 3,
        "name": "Book Cover Image",
        "value": "https://images.placeholders.dev/?width=696&height=727&text=Kniha&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true",
        "componentType": ComponentEnum.Media,
        "additionalProps": {
            "imageUrl": { "code": "imageUrl", "label": "Image URL", "inputTypes": [InputEnum.File, InputEnum.Text], "defaultValue": "https://images.placeholders.dev/?width=696&height=727&text=Kniha&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true" }
        }
    },
    {
        "id": 4,
        "name": "Logo",
        "value": "https://images.placeholders.dev/?width=426&height=62&text=Fragment&bgColor=%23ffffff&textColor=%23000000",
        "componentType": ComponentEnum.Logo,
        "additionalProps": {
            "imageUrl": { "code": "imageUrl", "label": "Image URL", "inputTypes": [InputEnum.File, InputEnum.Text], "defaultValue": "https://images.placeholders.dev/?width=426&height=62&text=Fragment&bgColor=%23ffffff&textColor=%23000000" }
        }
    },
    // {
    //     "id": 5,
    //     "name": "Sticker",
    //     "value": "ZNÁTE Z NETFLIXU",
    //     "componentType": ComponentEnum.Sticker,
    //     "additionalProps": {
    //         "text": { "code": "text", "label": "Text", "inputTypes": [InputEnum.Text], "defaultValue": "ZNÁTE Z NETFLIXU" },
    //         "backgroundColor": { "code": "backgroundColor", "label": "Background Color", "inputTypes": [InputEnum.Color], "defaultValue": "#ffffff" },
    //         "textColor": { "code": "textColor", "label": "Text Color", "inputTypes": [InputEnum.Color], "defaultValue": "#bd1515" },
    //         "borderRadius": { "code": "borderRadius", "label": "Border Radius", "inputTypes": [InputEnum.Number], "defaultValue": "50%" }
    //     }
    // }
];
