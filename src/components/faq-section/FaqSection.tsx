import React from 'react'

import { FaqCards } from '@/components'

import { FaqData } from './FaqSection.data'

const FaqSection = () => {
  return (
    <div className="space-y-2">
      {FaqData.map((text, index) => {
        return (
          <FaqCards
            key={index}
            question={text.question}
            answer={text.answer}
            list={text.list}
          />
        )
      })}
    </div>
  )
}

export default FaqSection
