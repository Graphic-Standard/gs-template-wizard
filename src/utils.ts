import { AdditionalPropsType, PropDefinition } from "./types/componentTypes";
import { FormValues } from "./types/formTypes";

/**
 * Transform additionalProps to FormValues by extracting default values.
 * @param {Partial<AdditionalPropsType>} additionalProps - The additional properties to transform.
 * @param {string} value - The main value of the component.
 * @returns {FormValues} - The transformed form values.
 */
const transformAdditionalPropsToFormValues = (additionalProps: Partial<AdditionalPropsType>, value: string): FormValues => {
    const formValues: FormValues = { value: value ?? '' };
  
    for (const key in additionalProps) {
      if (additionalProps.hasOwnProperty(key)) {
        const propDefinition = additionalProps[key as keyof AdditionalPropsType] as PropDefinition<any>;
        formValues[key as keyof FormValues] = propDefinition.defaultValue ?? '';
      }
    }
  
    return formValues;
  };
  
  export default transformAdditionalPropsToFormValues;