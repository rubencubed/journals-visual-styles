const red = 0.2126
const green = 0.7152
const blue = 0.0722

const gamma = 2.4

const calculateLuminance = (r: number, g: number, b: number) => {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, gamma)
  })
  return a[0] * red + a[1] * green + a[2] * blue
}

const calculateContrast = (rgb: [number, number, number]) => {
  const lumRGB = calculateLuminance(...rgb)

  const contrastWithBlack = (lumRGB + 0.05) / 0.05
  const contrastWithWhite = 1.05 / (lumRGB + 0.05)

  // slightly prefer white background
  if (contrastWithWhite >= 7) {
    return { color: '#ffffff', contrast: contrastWithWhite }
  }

  if (contrastWithBlack >= 7) {
    return { color: '#000000', contrast: contrastWithBlack }
  }

  if (contrastWithWhite >= 4.5) {
    return { color: '#ffffff', contrast: contrastWithWhite }
  }

  return { color: '#000000', contrast: contrastWithBlack }
}

export default calculateContrast
