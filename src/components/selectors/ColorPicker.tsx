const ColorPicker = ({
  name,
  color,
  setColor,
}: {
  name: string
  color: string
  setColor: (color: string) => void
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }
  return (
    <div className='color-picker'>
      <h2>{name} Color</h2>
      <input
        className='color-picker-toggle'
        type='color'
        value={color}
        onChange={handleChange}
      />
    </div>
  )
}

export default ColorPicker
