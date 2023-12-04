import React from 'react'
import { useState } from 'react'

const FaqCards = (props) => {
  return (
    <div className="mt-[1.125rem] w-100%">
      <h3 className="py-[1.125rem] px-[1.875rem] bg-zinc-600 rounded-lg">
        {props.question}
      </h3>
      <h3 className="py-[1.125rem] px-[1.875rem]">{props.answer}</h3>
    </div>
  )
}

export default FaqCards
