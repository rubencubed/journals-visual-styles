import { useState } from 'react'
import {
  decimalToHex,
  convertHexColorToDecimalTuple,
} from '../../utils/conversion'
import RgbSlider from './RgbSlider'
import type { ColorInputName } from '../../utils/types'

const ColorPicker = ({
  color,
  setColor,
  name,
}: {
  color: [number, number, number]
  setColor: (rgb: [number, number, number]) => void
  name: ColorInputName
}) => {
  const [hex, setHex] = useState(decimalToHex(color))
  const [hexIsValid, setHexIsValid] = useState(true)

  const onHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexMatch = /(^#[a-f\d]{6}$)|([a-f\d]{6}$)/i
    let changedHex = e.target.value

    if (hexMatch.test(changedHex)) {
      setHexIsValid(true)

      //account for missing # symbol
      if (changedHex.length == 6) {
        changedHex = '#' + changedHex
      }
      setColor(convertHexColorToDecimalTuple(changedHex))
    } else {
      setHexIsValid(false)
    }

    setHex(changedHex)
  }

  const colorChange = (
    colorOption: 'red' | 'green' | 'blue',
    value: number,
  ) => {
    const nextRed = colorOption === 'red' ? value : color[0]
    const nextGreen = colorOption === 'green' ? value : color[1]
    const nextBlue = colorOption === 'blue' ? value : color[2]

    const hexValue = decimalToHex([nextRed, nextGreen, nextBlue])

    setColor([nextRed, nextGreen, nextBlue])
    setHex(hexValue)
    setHexIsValid(true)
  }

  return (
    <details className='color-picker' open={true}>
      <summary>{name} Color</summary>
      <div className='color-input'>
        <div className='selector'>
          <div className='hex-code'>
            Hex:
            <input value={hex} onChange={(e) => onHexChange(e)} />
          </div>
          {hexIsValid ? (
            <div className={`color-swatch ${name.toLowerCase()}`}></div>
          ) : (
            <div
              style={{
                paddingInline: 16,
                paddingBlock: 2,
              }}
            >
              Hex not valid
            </div>
          )}
        </div>
        <div className='input-holder'>
          <RgbSlider
            colorName='red'
            colorValue={color[0]}
            colorChange={colorChange}
          />
          <RgbSlider
            colorName='green'
            colorValue={color[1]}
            colorChange={colorChange}
          />
          <RgbSlider
            colorName='blue'
            colorValue={color[2]}
            colorChange={colorChange}
          />
        </div>
      </div>
    </details>
  )
}

export default ColorPicker
