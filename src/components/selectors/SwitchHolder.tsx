const SwitchHolder = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className='switch-holder'>
      <label htmlFor={id}>{label}</label>
      <input type='checkbox' role='switch' name={id} id={id} />
    </div>
  )
}

export default SwitchHolder
