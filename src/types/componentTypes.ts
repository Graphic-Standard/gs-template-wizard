// src/types/componentTypes.ts

/**
 * Enumerations defining the types of input methods available for configuring component properties.
 */
export enum InputEnum {
    Text = 'text',
    File = 'file',
    Color = 'color',
    Gradient = 'gradient',
    Select = 'select'
}

/**
 * Enumerations defining the various types of components that can exist within the system.
 */
export enum ComponentEnum {
    Title = 'title',
    Paragraph = 'paragraph',
    Background = 'background',
    Media = 'media',
    Button = 'button',
    Logo = 'logo'
}

/**
 * Enumeration defining standardized button sizes to ensure consistency across the UI.
 */
export enum ButtonSizeEnum {
    Small = 'small',
    Normal = 'normal',
    Large = 'large'
}

/**
 * Common attributes shared by all components, providing a base structure for further extensions.
 * @typedef {Object} CommonType
 * @property {number} id - Unique identifier for the component.
 * @property {string} name - Display name of the component.
 * @property {string} value - Default value or content associated with the component.
 * @property {ComponentEnum} componentType - Specifies the type of component.
 */
export interface CommonType {
    id: number;
    name: string;
    value: string;
    componentType: ComponentEnum;
}

/**
 * Describes the configuration for each property that can be edited within a component,
 * including validation and default values.
 */
export interface PropDefinition<T = any> {
    code: string;
    label: string;
    inputTypes: InputEnum[];
    defaultValue: T;
    validate?: (value: T) => boolean;
}

/**
 * Maps property names to their respective definitions, enabling dynamic property configuration.
 */
export interface AdditionalPropsConfig {
    [property: string]: PropDefinition;
}

/**
 * Defines the additional properties that can be configured on components, tailored to each type.
 */
export interface AdditionalPropsType {
    fontFamily?: PropDefinition<string>;
    fontSize?: PropDefinition<string>;
    textColor?: PropDefinition<string>;
    backgroundColor?: PropDefinition<string>;
    imageUrl?: PropDefinition<string>;
    buttonSize?: PropDefinition<string>;
    hoverBackgroundColor?: PropDefinition<string>;
    hoverTextColor?: PropDefinition<string>;
}

/**
 * Specific component types, each combining common attributes with a set of additional properties
 * appropriate for that component type.
 */
export type TitleType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'fontFamily' | 'fontSize' | 'textColor'> };
export type ParagraphType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'fontFamily' | 'fontSize' | 'textColor' | 'backgroundColor'> };
export type BackgroundType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'backgroundColor' | 'imageUrl'> };
export type MediaType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'imageUrl'> };
export type ButtonType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'buttonSize' | 'backgroundColor' | 'hoverBackgroundColor' | 'textColor' | 'hoverTextColor'> };
export type LogoType = CommonType & { additionalProps: Pick<AdditionalPropsType, 'imageUrl'> };

/**
 * A union type that encompasses all possible component types within the system.
 */
export type ComponentType = TitleType | ParagraphType | BackgroundType | MediaType | ButtonType | LogoType;
