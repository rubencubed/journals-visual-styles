const Paragraph = ({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) => {
  return <p style={{ color }}>{children}</p>
}

export default Paragraph
