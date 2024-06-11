// src/components/dynamic/BackgroundComponent.tsx

import React, { useEffect, useState, useCallback } from 'react'
import { BackgroundType } from '../../types/componentTypes'
import TextInput from '../inputs/TextInput'
import ColorPicker from '../inputs/ColorPicker'
import FileInput from '../inputs/FileInput'
import SelectInput from '../inputs/SelectInput'

interface BackgroundComponentProps {
  data: BackgroundType
  initialHtml: string
  onHtmlChange: (html: string) => void
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({
  data,
  initialHtml,
  onHtmlChange,
}) => {
  const [backgroundType, setBackgroundType] = useState<'color' | 'image'>(
    'color',
  )
  const [backgroundColor, setBackgroundColor] = useState(
    data.additionalProps.backgroundColor?.defaultValue || '#ffffff',
  )
  const [imageUrl, setImageUrl] = useState(
    data.additionalProps.imageUrl?.defaultValue || '',
  )

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setImageUrl(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateHtml = useCallback(() => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = initialHtml.trim()
    const backgroundElement = tempDiv.querySelector('div')
    if (backgroundElement) {
      if (backgroundType === 'image' && imageUrl) {
        backgroundElement.style.backgroundImage = `url(${imageUrl})`
        backgroundElement.style.backgroundColor = ''
      } else {
        backgroundElement.style.backgroundImage = ''
        backgroundElement.style.backgroundColor = backgroundColor
      }
    }
    return tempDiv.innerHTML
  }, [backgroundType, backgroundColor, imageUrl, initialHtml])

  useEffect(() => {
    const html = generateHtml()
    onHtmlChange(html)
  }, [backgroundType, backgroundColor, imageUrl, generateHtml])

  return (
    <div className="space-y-4">
      <SelectInput
        name="backgroundType"
        value={backgroundType}
        options={[
          { label: 'Color', value: 'color' },
          { label: 'Image', value: 'image' },
        ]}
        onChange={(e) => setBackgroundType(e.target.value as 'color' | 'image')}
      />
      {backgroundType === 'color' ? (
        <ColorPicker
          label="Background Color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e)}
        />
      ) : (
        <div>
          <FileInput name="imageUrl" value={imageUrl} onChange={setImageUrl} />
        </div>
      )}
    </div>
  )
}

export default BackgroundComponent
