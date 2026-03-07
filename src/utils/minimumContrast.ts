// figuring out if there exists an rgb color that meets
// color contrast guidlines with neither black nor white
// RESULTS: SQUEAKS BY
// minimum contrast: 9.165151389911683
// minimum rgb value: 207,13,204
// total count: 16777216
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

  return contrastWithBlack + contrastWithWhite
}

const minimumContrast = () => {
  let minimumContrast = 21
  let minimumRgbValue = [0, 0, 0]

  let count = 0

  for (let r = 0; r < 256; r++) {
    for (let g = 0; g < 256; g++) {
      for (let b = 0; b < 256; b++) {
        const contrast = calculateContrast([r, g, b])
        if (contrast < minimumContrast) {
          minimumContrast = contrast
          minimumRgbValue = [r, g, b]
        }
        count++
      }
    }
  }
  console.log('minimum contrast: ' + minimumContrast)
  console.log('minimum rgb value: ' + minimumRgbValue)
  console.log('total count: ' + count)
}

minimumContrast()
