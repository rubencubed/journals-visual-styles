import { useState } from 'react'
import {
  decimalToHex,
  convertHexColorToDecimalTuple,
} from '../../utils/conversion'
import RgbSlider from './RgbSlider'
import type { ColorInputName } from '../../utils/types'

const ColorInput = ({
  color,
  setColor,
  name,
}: {
  color: [number, number, number]
  setColor: (rgb: [number, number, number]) => void
  name: ColorInputName
}) => {
  const [hex, setHex] = useState('#002D72')
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
    <div className='color-picker'>
      <h2>{name} Color</h2>
      <div className='color-input'>
        <div
          style={{
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {hexIsValid ? (
            <div
              style={{
                height: 50,
                width: 50,
                background: hex,
                borderRadius: 50,
              }}
            ></div>
          ) : (
            <div
              style={{
                background: 'yellow',
                paddingInline: 16,
                paddingBlock: 2,
              }}
            >
              Hex not valid
            </div>
          )}

          <h2>
            Hex:{' '}
            <input
              style={{
                border: 'none',
                padding: 4,
                fontSize: 20,
                width: 100,
                borderRadius: 2,
              }}
              value={hex}
              onChange={(e) => onHexChange(e)}
            />
          </h2>
        </div>

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
  )
}

export default ColorInput
