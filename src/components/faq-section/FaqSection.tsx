import React from 'react'
import { FaqCards } from '@/components'
import faqText from '@/i18n/uk/Faq'

const { faqList } = faqText

const FaqSection = () => {
  return (
    <div>
      {faqList.map((text, index) => {
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
