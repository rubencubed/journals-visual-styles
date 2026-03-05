import { useState } from 'react'
import ColorPicker from './components/selectors/ColorPicker'
import Button from './components/visuals/Button'
import calculateContrast from './utils/contrast'
import convertHexColorToDecimalTuple from './utils/hexToDecimal'

function App() {
  const [popColor, setPopColor] = useState('#ffffff')
  const [borderRadius, setBorderRadius] = useState(2)
  console.log(setBorderRadius)

  const color = (popColor: string) => {
    const decimalTuple = convertHexColorToDecimalTuple(popColor)
    if (!decimalTuple) return '#ffffff'

    return calculateContrast(decimalTuple)['color']
  }

  return (
    <>
      <ColorPicker name='Pop' color={popColor} setColor={setPopColor} />

      <Button
        backgroundColor={popColor}
        color={color(popColor)}
        borderRadius={borderRadius}
      />
    </>
  )
}

export default App
