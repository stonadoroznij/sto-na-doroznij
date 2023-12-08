import React from 'react'

interface StepProps {
  number: string
  about: string
  active?: boolean
}

const Step = ({ number, about, active = false }: StepProps) => {
  if (active) {
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-5 h-5 rounded-full bg-accent-yellow border border-accent-yellow" />
        <h3 className="text-2xl text-center font-bold text-accent-yellow">Етап {number}</h3>
        <p className="text-lg text-center text-accent-yellow">{about}</p>
      </div>
    )
  }
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow" />
      <h3 className="text-2xl text-center font-bold">Етап {number}</h3>
      <p className="text-lg text-center">{about}</p>
    </div>
  )
}

export default Step
