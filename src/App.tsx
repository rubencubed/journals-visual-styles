import { useState } from 'react'
import ColorPicker from './components/selectors/ColorPicker'
import RadioPicker from './components/selectors/RadioPicker'
import ColorInput from './components/ColorInput'

import Button from './components/visuals/Button'
import Link from './components/visuals/Link'

import calculateContrast from './utils/contrast'
import convertHexColorToDecimalTuple from './utils/hexToDecimal'

const borderRadiusOptions = [
  { value: '0', label: 'Sharp' },
  { value: '.25rem', label: 'Slight' },
  { value: '.75rem', label: 'Medium' },
  { value: '1000rem', label: 'Rounded' },
]

const paddingOptions = [
  { value: '0', label: 'Trimmed' },
  { value: 'revert', label: 'Standard' },
  { value: '.5rem 1rem', label: 'More' },
  { value: '1rem 2rem', label: 'Much More' },
]

function App() {
  const [popColor, setPopColor] = useState('#ffffff')
  const [borderRadius, setBorderRadius] = useState('auto')
  const [padding, setPadding] = useState('auto')

  const color = (popColor: string) => {
    const decimalTuple = convertHexColorToDecimalTuple(popColor)
    if (!decimalTuple) return '#ffffff'

    return calculateContrast(decimalTuple)['color']
  }

  return (
    <>
      <div className='control-panel'>
        <ColorInput />
        <ColorPicker name='Primary' color={popColor} setColor={setPopColor} />
        <RadioPicker
          name='Corner Rounding'
          options={borderRadiusOptions}
          setSelectedOption={setBorderRadius}
        />
        <RadioPicker
          name='Padding'
          options={paddingOptions}
          setSelectedOption={setPadding}
        />
      </div>

      <div className='interface'>
        <Button
          backgroundColor={popColor}
          color={color(popColor)}
          borderRadius={borderRadius}
          padding={padding}
        />
        <Link color={popColor} />
      </div>
    </>
  )
}

export default App
