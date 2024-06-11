import { ComponentType, BackgroundType, ComponentEnum, MediaType, TitleType, ParagraphType, ButtonType } from "./types/componentTypes"


// Define type guards for different component types
export const isBackgroundType = (
    component: ComponentType,
  ): component is BackgroundType => {
    return component.componentType === ComponentEnum.Background
  }
  
  export  const isMediaType = (component: ComponentType): component is MediaType => {
    return component.componentType === ComponentEnum.Media
  }
  
  export  const isTitleType = (component: ComponentType): component is TitleType => {
    return component.componentType === ComponentEnum.Title
  }
  
  export  const isParagraphType = (
    component: ComponentType,
  ): component is ParagraphType => {
    return component.componentType === ComponentEnum.Paragraph
  }
  
  export  const isButtonType = (component: ComponentType): component is ButtonType => {
    return component.componentType === ComponentEnum.Button
  }