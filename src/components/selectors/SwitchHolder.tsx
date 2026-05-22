const SwitchHolder = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className='switch-holder'>
      <input type='checkbox' role='switch' name={id} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default SwitchHolder
