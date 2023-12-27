'use client'

import cn from 'classnames'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import Minus from '../../../../public/icons/minus.svg'
import Plus from '../../../../public/icons/plus.svg'

interface faqProps {
  question: string
  answer?: string
  list?: string[]
}

const FaqCards = (props: faqProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="space-y-2">
      <div
        onClick={toggleOpen}
        className="py-[1.125rem] px-[1.875rem] bg-coal-700 rounded-lg flex justify-between items-center cursor-pointer"
      >
        <h3>{props.question}</h3>
        {isOpen ? (
          <Image src={Minus} alt="minus" />
        ) : (
          <Image src={Plus} alt="plus" />
        )}
      </div>
      {
        <div
          className={cn(
            'grid duration-500 ease-out transition-[grid-template-rows]',
            {
              'grid-rows-[1fr]': isOpen,
              'grid-rows-[0fr]': !isOpen,
            }
          )}
        >
          <div ref={contentRef} className="px-[1.875rem] overflow-hidden">
            {props.list ? (
              <ul className="list-disc list-inside">
                {props.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <span>{props.answer}</span>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default FaqCards
