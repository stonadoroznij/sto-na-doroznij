const SelectOptions = ({
  options,
  onChange,
  toggleOpened,
}: {
  options: string[]
  onChange: (option: string) => void
  toggleOpened: () => void
}) => {
  return (
    <div className="bg-coal-800 p-6 rounded-lg border border-coal-600 shadow-dark">
      <div className="h-80 overflow-y-auto">
        {options.map((option) => (
          <div
            key={option}
            className="mr-6 cursor-pointer p-2 flex items-center rounded-lg group hover:bg-coal-700"
            onClick={() => {
              onChange(option)
              toggleOpened()
            }}
          >
            <div className="w-full group-hover:text-accent-yellow">
              {option}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectOptions
