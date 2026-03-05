const convertHexColorToDecimalTuple = (hexColor: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

  if (!result) return null

  const decimalTuple: [number, number, number] = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ]

  return decimalTuple
}

export default convertHexColorToDecimalTuple
