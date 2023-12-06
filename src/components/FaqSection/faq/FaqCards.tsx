'use client'
import React, { useState } from 'react'
import Plus from '../../../../public/plus.svg'
import Minus from '../../../../public/minus.svg'
import Image from 'next/image'

interface faqProps  {
  question: string
  answer: string
}

const FaqCards = (props:faqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState(0);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setAnswerHeight(isOpen ? 0 : 200);
  };
  return (
    <div className="mt-[1.125rem] w-100%">
      <div onClick={toggleOpen} className="py-[1.125rem] px-[1.875rem] bg-zinc-600 rounded-lg flex justify-between">
        <h3>{props.question}</h3>
        {isOpen ? 
        <Image 
        src={Minus}
        alt='minus'/>:
        <Image 
        src={Plus}
        alt='plus'/>  
      }
      </div>
      {isOpen && <h3 style={{ maxHeight: `${answerHeight}px`, transition: 'max-height 2s ease-in-out' }} className="py-[1.125rem] px-[1.875rem]">{props.answer}</h3>}
    </div>
  )
}

export default FaqCards
