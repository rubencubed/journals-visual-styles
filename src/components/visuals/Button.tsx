const Button = ({
  backgroundColor,
  color,
  borderRadius,
  padding,
  content,
}: {
  backgroundColor: string
  color: string
  borderRadius: string
  padding: string
  content: string
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color,
        borderRadius,
        padding,
        textBoxTrim: 'trim-both',
      }}
    >
      {content}
    </button>
  )
}

export default Button
