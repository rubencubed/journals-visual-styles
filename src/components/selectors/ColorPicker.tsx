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
      <p>{name} Color</p>
      <input type='color' value={color} onChange={handleChange} />
    </div>
  )
}

export default ColorPicker
