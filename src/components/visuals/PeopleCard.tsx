const PeopleCard = ({
  children,
  src,
}: {
  children: React.ReactNode
  src: string
}) => {
  return (
    <div className='people-card'>
      <img src={`people/${src}.jpg`} />
      <div className='copy'>{children}</div>
    </div>
  )
}

export default PeopleCard
