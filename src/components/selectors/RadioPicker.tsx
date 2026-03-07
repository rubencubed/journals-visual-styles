type RadioOption = {
  value: string
  label: string
}

const RadioPicker = ({
  options,
  name,
  setSelectedOption,
}: {
  options: RadioOption[]
  name: string
  setSelectedOption: (selectedOption: string) => void
}) => {
  return (
    <div className='radio-picker'>
      <h2>{name}</h2>
      <div className='radio-buttons'>
        {options.map((option, index) => (
          <div key={name + index.toString()}>
            <input
              type='radio'
              id={name + index.toString()}
              name={name}
              value={option.value}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={name + index.toString()}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioPicker
