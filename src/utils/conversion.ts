const convertHexColorToDecimalTuple = (hexColor: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor) ?? [
    '#',
    '00',
    '00',
    '00',
  ]

  const decimalTuple: [number, number, number] = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ]

  return decimalTuple
}

const decimalToHex = (decimalTuple: [number, number, number]) => {
  let hex = '#'

  for (const tuple of decimalTuple) {
    hex += tuple.toString(16).padStart(2, '0')
  }

  return hex
}

// modified from https://gist.github.com/dkaraush/65d19d61396f5f3cd8ba7d1b4b3c9432
const multiplyMatrices = (
  A: [number, number, number, number, number, number, number, number, number],
  B: [number, number, number],
) => {
  const matrix: [number, number, number] = [
    A[0] * B[0] + A[1] * B[1] + A[2] * B[2],
    A[3] * B[0] + A[4] * B[1] + A[5] * B[2],
    A[6] * B[0] + A[7] * B[1] + A[8] * B[2],
  ]

  return matrix
}

const rgb2srgbLinear = (rgb: [number, number, number]) =>
  rgb.map((c) => {
    const v = c / 255
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }) as [number, number, number]

const rgbLinear2xyz = (rgb: [number, number, number]) => {
  return multiplyMatrices(
    [
      0.41239079926595934, 0.357584339383878, 0.1804807884018343,
      0.21263900587151027, 0.715168678767756, 0.07219231536073371,
      0.01933081871559182, 0.11919477979462598, 0.9505321522496607,
    ],
    rgb,
  )
}

const xyz2oklab = (xyz: [number, number, number]) => {
  const LMS = multiplyMatrices(
    [
      0.819022437996703, 0.3619062600528904, -0.1288737815209879,
      0.0329836539323885, 0.9292868615863434, 0.0361446663506424,
      0.0481771893596242, 0.2642395317527308, 0.6335478284694309,
    ],
    xyz,
  )

  const LMSg: [number, number, number] = LMS.map((val) => Math.cbrt(val)) as [
    number,
    number,
    number,
  ]

  return multiplyMatrices(
    [
      0.210454268309314, 0.7936177747023054, -0.0040720430116193,
      1.9779985324311684, -2.4285922420485799, 0.450593709617411,
      0.0259040424655478, 0.7827717124575296, -0.8086757549230774,
    ],
    LMSg,
  )
}

const oklab2oklch = ([l, a, b]: [number, number, number]) => {
  const oklch: [number, number, number] = [
    l,
    Math.sqrt(a ** 2 + b ** 2),
    Math.abs(a) < 0.0002 && Math.abs(b) < 0.0002
      ? NaN
      : ((((Math.atan2(b, a) * 180) / Math.PI) % 360) + 360) % 360,
  ]
  return oklch
}

const rgb2oklch = (rgb: [number, number, number]) => {
  const oklch: [number, number, number] = oklab2oklch(
    xyz2oklab(rgbLinear2xyz(rgb2srgbLinear(rgb))),
  )

  return oklch
}

//okay back to me
const hexToOklch = (hexColor: string) => {
  const rgb = convertHexColorToDecimalTuple(hexColor) ?? [0, 0, 0]

  return rgb2oklch(rgb)
}

export { hexToOklch, convertHexColorToDecimalTuple, decimalToHex }
