const oklch = (l: number, c: number, h: number) => {
  return `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(2)}deg)`
}

export default oklch
