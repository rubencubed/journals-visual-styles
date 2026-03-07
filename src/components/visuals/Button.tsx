const Button = ({
  backgroundColor,
  color,
  borderRadius,
  padding,
}: {
  backgroundColor: string
  color: string
  borderRadius: string
  padding: string
}) => {
  return (
    <button style={{ backgroundColor, color, borderRadius, padding }}>
      Click Me!
    </button>
  )
}

export default Button
