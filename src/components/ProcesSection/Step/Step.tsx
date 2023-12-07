import React from 'react'

interface StepProps {
  name: string
  about: string
}

const Step = (props: StepProps) => {
  return (
    <div className='text-center'>
      <h3>{props.name}</h3>
      <p className='text-xs text font-normal max-w-[100px]'>{props.about}</p>
    </div>
  )
}

export default Step
