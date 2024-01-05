'use client'

interface StepProps {
  number: string
  about: string
}

const Step = ({ number, about }: StepProps) => {
  return (
    <div className="md:w-full w-[240px] flex flex-col md:items-center gap-4">
      <div className="hidden md:block">
        <h3 className="text-2xl text-center font-bold">Етап {number}</h3>
        <p className="text-lg text-center">{about}</p>
      </div>
      <div className="block md:hidden">
        <h3 className="text-2xl font-bold">Крок {number}</h3>
        <p className="text-lg">{about}</p>
      </div>
    </div>
  )
}

export default Step
