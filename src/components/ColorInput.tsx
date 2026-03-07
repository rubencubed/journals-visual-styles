import { useState } from 'react'

const ColorInput = () => {
  const [color, setColor] = useState(180)

  const oklch = (hue: number) => {
    return `oklch(0.5 0.5 ${hue}deg)`
  }

  return (
    <div className='color-input'>
      <div
        style={{ height: 100, width: 100, backgroundColor: oklch(color) }}
      ></div>
      <input
        type='range'
        min='1'
        max='360'
        step='1'
        value={color}
        onChange={(e) => setColor(parseInt(e.target.value))}
      />
      <p>Color: {color}</p>
    </div>
  )
}

export default ColorInput
