'use client'
import { useEffect, useState } from 'react'

interface StepProps {
  number: string
  about: string
}

const Step = ({ number, about }: StepProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h3 className="text-2xl text-center font-bold">Етап {number}</h3>
      <p className="text-lg text-center">{about}</p>
    </div>
  )
}

export default Step
