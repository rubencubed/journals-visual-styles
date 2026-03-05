const Button = ({
  backgroundColor,
  color,
  borderRadius,
}: {
  backgroundColor: string
  color: string
  borderRadius: number
}) => {
  return (
    <button style={{ backgroundColor, color, borderRadius }}>Click Me!</button>
  )
}

export default Button
