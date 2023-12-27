'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import Minus from '../../../../public/icons/minus.svg'
import Plus from '../../../../public/icons/plus.svg'

interface faqProps {
  question: string
  answer?: string
  list?: string[]
}

const FaqCards = (props: faqProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState<number | string>('0')
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const updateContentHeight = () => {
    if (contentRef.current) {
      setContentHeight(
        isOpen ? `${contentRef.current.clientHeight + 10}px` : '0'
      )
    }
  }

  useEffect(() => {
    updateContentHeight()
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        setContentHeight(`${contentRef.current.clientHeight + 10}px`)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return (
    <div className="mt-2 w-100%">
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
          style={{
            maxHeight: contentHeight,
            transition: 'max-height 0.5s ease-in-out',
            overflow: 'hidden',
          }}
        >
          <div ref={contentRef} className="mt-2 px-[1.875rem]">
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
