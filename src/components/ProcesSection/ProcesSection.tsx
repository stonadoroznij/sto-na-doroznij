import React from 'react'
import YellowDot from '../../../public/yellowDot.svg'
import ClearDot from '../../../public/clearDot.svg'
import YellowCar from '../../../public/YellowCar.svg'
import Image from 'next/image'
import { Step } from '..'
import { Button } from '@/ui'

const ProcesSection = () => {
  return (
    <div className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
      <h2 className="flex justify-center">Як відбувається процес</h2>
      <div className="mt-12 mb-[6.875rem] flex justify-center">
        <hr className="w-[56.25rem]" />
        <span className="flex absolute justify-between w-[57rem] -mt-2">
          <span className="text-7xl -mt-8">•</span>
          <span className="text-7xl -mt-8">•</span>
          <span className="text-7xl -mt-8">•</span>
          <span className="text-7xl -mt-8">•</span>
          <span className="text-7xl -mt-8">•</span>
        </span>
        <span className="w-[57rem] absolute ">
          <Image
            src={YellowCar}
            alt="YellowCar"
            className="absolute -mt-3 moving-object"
          />
        </span>
        <span className="flex mt-[2rem] absolute justify-between w-[61rem]">
          <Step name="Етап 1" about="Записатись на СТО" />
          <Step name="Етап 2" about="Привезти авто на СТО" />
          <Step name="Етап 3" about="Обговорення проблеми" />
          <Step name="Етап 4" about="Очікування" />
          <Step name="Етап 5" about="Забираєте авто" />
        </span>
      </div>
      <div className="flex justify-center">
        <Button type="outline">Зв'язатися з нами</Button>
      </div>
    </div>
  )
}

export default ProcesSection
