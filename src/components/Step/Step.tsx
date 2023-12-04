import React from 'react'

const Step = (props:string) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Step
