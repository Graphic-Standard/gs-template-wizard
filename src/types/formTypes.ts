/**
 * Type for form values, encompassing all possible fields for different component types.
 */
export type FormValues = {
  backgroundColor?: string;
  imageUrl?: string;
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  buttonSize?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  value?: string;
  backgroundType?: 'color' | 'image';
};
