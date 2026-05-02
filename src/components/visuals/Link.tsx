const Link = ({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) => {
  return (
    <a href='/' style={{ color }}>
      {children}
    </a>
  )
}

export default Link
