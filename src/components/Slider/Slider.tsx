import React from 'react'
import Image from 'next/image'
import { Button } from '@/ui'
import ServiceImage1 from '../../../public/images/service_1.png'
import { ServiceCard } from '..'

const Slider = () => {
  return (
    <div>
      <div className="flex">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <button className="text-2xl hover:text-accent-yellow">&lt;</button>
      <span className="-mt-0/5">•</span>
      <span className="-mt-0/5">•</span>
      <span className="-mt-0/5">•</span>
      <button className="text-2xl hover:text-accent-yellow">&gt;</button>
    </div>
  )
}

export default Slider
