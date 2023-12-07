import React from 'react'

interface StepProps {
  name: string
  about: string
}

const Step = (props: StepProps) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Step
