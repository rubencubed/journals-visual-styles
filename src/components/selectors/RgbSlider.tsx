/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const sliderStyle = css`
  background: transparent;

  &::-webkit-slider-runnable-track {
    height: 20px;
    border-radius: 999px;
    background: var(--hue-gradient);
  }

  &::-moz-range-track {
    height: 20px;
    border-radius: 999px;
    background: var(--hue-gradient);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    background: var(--thumb-color);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    background: var(--thumb-color);
    cursor: pointer;
  }
`

const RgbSlider = ({
  colorName,
  colorValue,
  colorChange,
}: {
  colorName: 'red' | 'green' | 'blue'
  colorValue: number
  colorChange: (colorOption: 'red' | 'green' | 'blue', value: number) => void
}) => {
  const hueGradient = 'linear-gradient(to right, black, ' + colorName + ')'
  return (
    <div>
      <p className='rgb-slider-label'>
        {colorName}: {colorValue}
      </p>
      <input
        css={sliderStyle}
        style={
          {
            '--thumb-color': colorName,
            '--hue-gradient': hueGradient,
          } as React.CSSProperties
        }
        type='range'
        min='0'
        max='255'
        step='1'
        value={colorValue}
        onChange={(e) => colorChange(colorName, parseInt(e.target.value))}
      />
    </div>
  )
}

export default RgbSlider
