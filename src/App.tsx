import { useState } from 'react'
import RadioPicker from './components/selectors/RadioPicker'
import ColorPicker from './components/selectors/ColorPicker'

import Button from './components/visuals/Button'
import Link from './components/visuals/Link'

import calculateContrast from './utils/contrast'
import { convertHexColorToDecimalTuple, decimalToHex } from './utils/conversion'

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
  const [mainColor, setMainColor] = useState<[number, number, number]>([
    0, 45, 114,
  ])

  const [borderRadius, setBorderRadius] = useState('auto')
  const [padding, setPadding] = useState('auto')

  const contrastColor = (mainColor: string) => {
    const decimalTuple = convertHexColorToDecimalTuple(mainColor)
    if (!decimalTuple) return '#ffffff'

    return calculateContrast(decimalTuple)['color']
  }

  return (
    <>
      <div className='control-panel'>
        <ColorPicker name='Main' color={mainColor} setColor={setMainColor} />
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
          backgroundColor={decimalToHex(mainColor)}
          color={contrastColor(decimalToHex(mainColor))}
          borderRadius={borderRadius}
          padding={padding}
        />
        <Link color={decimalToHex(mainColor)} />
      </div>
    </>
  )
}

export default App
