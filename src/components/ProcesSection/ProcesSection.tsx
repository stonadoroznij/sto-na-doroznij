'use client'
import React, { useEffect, useRef } from 'react'
import YellowCar from '../../../public/YellowCar.svg'
import Image from 'next/image'
import { Step } from '..'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'

const ProcesSection = () => {

  
  const target = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (target.current) {
      const obseerver = new IntersectionObserver(() => console.log('Hello world!'))
      obseerver.observe(target.current)
    }
  }, [])

  return (
    <div ref={target} className="flex flex-col gap-16 z-20 mt-14 pt-14 text-white">
      <h2 className="text-center">Як відбувається процес</h2>
      <div className="hidden w-full h-40 relative md:block">
        <div className="w-full h-40 flex justify-between gap-4 absolute z-10">
          <Step number="1" about="Записатись на СТО" active={true} />
          <Step number="2" about="Привезти авто на СТО" />
          <Step number="3" about="Обговорення проблеми " />
          <Step number="4" about="Очікування" />
          <Step number="5" about="Забираєте авто" />
        </div>
        <div className="absolute top-2 left-[10%] w-4/5 h-[2px] bg-white z-0" />
        <div className='absolute -top-2 left-[calc(10%-57px)] z-20'>
          <Image src={YellowCar} alt="yellow car" />
        </div>
      </div>

      <div className="flex justify-center">
        <Button type={ButtonType.outline}>Зв&apos;язатися з нами</Button>
      </div>
    </div>
  )
}

export default ProcesSection
