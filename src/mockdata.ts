// src/mockdata.ts

import { ComponentType, ComponentEnum, InputEnum } from './types/componentTypes';

// Example mock data with HTML structure
export const htmlString = `
<div class="relative bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
    <!-- Background component with gradient, linking back to its component definition -->
    <!-- Start 1 --><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600" data-component-id="1"></div><!-- End 1 -->

    <!-- Book Cover Image -->
    <div class="flex flex-col items-center justify-center z-10 p-4">
        <!-- Start 4 --><img src="https://images.placeholders.dev/?width=300&height=450&text=The+Great+Gatsby&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true" alt="The Great Gatsby Cover" class="shadow-lg rounded-lg" data-component-id="4"><!-- End 4 -->

        <!-- Book Title -->
        <!-- Start 2 --><h1 class="text-white text-4xl font-serif mt-6" data-component-id="2">The Great Gatsby</h1><!-- End 2 -->

        <!-- Book Tagline -->
        <!-- Start 3 --><p class="text-gray-300 text-lg font-sans mt-2" data-component-id="3">A timeless classic that offers a new perspective on the American dream.</p><!-- End 3 -->

        <!-- Buy Now Button -->
        <!-- Start 5 --><a href="#" class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow" data-component-id="5">Buy Now</a><!-- End 5 -->
        
        <!-- Logo -->
        <!-- Start 6 --><img src="https://images.placeholders.dev/?width=200&height=100&text=Your+Logo&bgColor=%23ffffff&textColor=%23000000" alt="Logo" class="mt-4" data-component-id="6"><!-- End 6 -->
    </div>
</div>
`;

export const components: ComponentType[] = [
    {
        id: 1,
        name: "Background",
        value: "https://images.placeholders.dev/?width=800&height=600",
        componentType: ComponentEnum.Background,
        additionalProps: {
            backgroundColor: { code: 'backgroundColor', label: 'Background Color', inputTypes: [InputEnum.Color], defaultValue: "#000000" },
            imageUrl: { code: 'imageUrl', label: 'Background Image', inputTypes: [InputEnum.File, InputEnum.Text], defaultValue: "https://images.placeholders.dev/?width=800&height=600&gradient=linear-gradient(120deg,%23a1c4fd,%2370a1ff)" }
        }
    },
    {
        id: 2,
        name: "Book Title",
        value: "The Great Gatsby",
        componentType: ComponentEnum.Title,
        additionalProps: {
            fontFamily: { code: 'fontFamily', label: 'Font Family', inputTypes: [InputEnum.Select], defaultValue: "Serif" },
            fontSize: { code: 'fontSize', label: 'Font Size', inputTypes: [InputEnum.Select], defaultValue: "32px" },
            textColor: { code: 'textColor', label: 'Text Color', inputTypes: [InputEnum.Color], defaultValue: "#FFFFFF" }
        }
    },
    {
        id: 3,
        name: "Book Tagline",
        value: "A timeless classic that offers a new perspective on the American dream.",
        componentType: ComponentEnum.Paragraph,
        additionalProps: {
            fontFamily: { code: 'fontFamily', label: 'Font Family', inputTypes: [InputEnum.Select], defaultValue: "Sans-serif" },
            fontSize: { code: 'fontSize', label: 'Font Size', inputTypes: [InputEnum.Select], defaultValue: "18px" },
            textColor: { code: 'textColor', label: 'Text Color', inputTypes: [InputEnum.Color], defaultValue: "#DDDDDD" },
            backgroundColor: { code: 'backgroundColor', label: 'Background Color', inputTypes: [InputEnum.Color], defaultValue: "transparent" }
        }
    },
    {
        id: 4,
        name: "Book Cover Image",
        value: "https://images.placeholders.dev/?width=300&height=450&text=The+Great+Gatsby&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true",
        componentType: ComponentEnum.Media,
        additionalProps: {
            imageUrl: { code: 'imageUrl', label: 'Image URL', inputTypes: [InputEnum.File, InputEnum.Text], defaultValue: "https://images.placeholders.dev/?width=300&height=450&text=The+Great+Gatsby&bgColor=%23f3f3f3&textColor=%23000000&textWrap=true" }
        }
    },
    {
        id: 5,
        name: "Buy Now Button",
        value: "Buy Now",
        componentType: ComponentEnum.Button,
        additionalProps: {
            buttonSize: { code: 'buttonSize', label: 'Button Size', inputTypes: [InputEnum.Select], defaultValue: "large" },
            backgroundColor: { code: 'backgroundColor', label: 'Background Color', inputTypes: [InputEnum.Color], defaultValue: "#008000" },
            hoverBackgroundColor: { code: 'hoverBackgroundColor', label: 'Hover Background Color', inputTypes: [InputEnum.Color], defaultValue: "#004d00" },
            textColor: { code: 'textColor', label: 'Text Color', inputTypes: [InputEnum.Color], defaultValue: "#ffffff" },
            hoverTextColor: { code: 'hoverTextColor', label: 'Hover Text Color', inputTypes: [InputEnum.Color], defaultValue: "#cccccc" }
        }
    },
    {
        id: 6,
        name: "Logo",
        value: "https://images.placeholders.dev/?width=200&height=100&text=Your+Logo&bgColor=%23ffffff&textColor=%23000000",
        componentType: ComponentEnum.Logo,
        additionalProps: {
            imageUrl: { code: 'imageUrl', label: 'Image URL', inputTypes: [InputEnum.File, InputEnum.Text], defaultValue: "https://images.placeholders.dev/?width=200&height=100&text=Your+Logo&bgColor=%23ffffff&textColor=%23000000" }
        }
    }
];
