import React from 'react'
import Image from 'next/image'
import CheckIcon from '../../../public/check_icon.svg'

const MultiSelectOptions = ({
  options,
  values,
  onChange,
}: {
  options: string[]
  values: string[]
  onChange: (option: string) => void
}) => {
  return (
    <div className="bg-coal-800 p-6 rounded-lg border border-coal-600 shadow-dark">
      <div className="max-h-80 overflow-y-auto">
        {options.map((option) => (
          <div
            key={option}
            className="mr-6 cursor-pointer p-2 flex justify-between items-center gap-2 rounded-lg group hover:bg-coal-700"
            onClick={() => onChange(option)}
          >
            <div className="w-full group-hover:text-accent-yellow">
              {option}
            </div>
            {values.findIndex((v) => v === option) === -1 ? (
              <div className="w-4 h-4 bg-white border border-white rounded-sm group-hover:border-accent-yellow" />
            ) : (
              <div className="w-4 h-4 bg-accent-yellow border border-accent-yellow rounded-sm flex justify-center items-center">
                <Image src={CheckIcon} alt="check icon" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultiSelectOptions
