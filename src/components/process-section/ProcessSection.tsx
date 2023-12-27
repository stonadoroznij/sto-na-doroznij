'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { PopUpFormButton, Step } from '@/components'

import YellowCar from '../../../public/yellow-car.svg'

const ProcessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  })

  const [style, setStyle] = useState({
    car: '',
    point1: '',
    point2: '',
    point3: '',
    point4: '',
    point5: '',
  })

  const isAnimate = useRef<boolean>(true)

  useEffect(() => {
    if (isAnimate.current && inView) {
      setStyle({
        car: 'animate-car',
        point1: 'animate-point-1',
        point2: 'animate-point-2',
        point3: 'animate-point-3',
        point4: 'animate-point-4',
        point5: 'animate-point-5',
      })
      isAnimate.current = false
    }
  }, [inView])

  return (
    <div ref={ref} className={`flex flex-col gap-4 text-white`}>
      <h2 className="text-center mb-4">Як відбувається процес</h2>
      <div className="hidden w-full h-32 mt-8 relative md:block">
        <div className="w-full h-32 flex justify-between gap-4 absolute top-0 left-0 z-10">
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point1}`}
            />
            <Step number="1" about="Записатись на СТО" />
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point2}`}
            />
            <Step number="2" about="Привезти авто на СТО" />
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point3}`}
            />
            <Step number="3" about="Обговорення проблеми " />
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point4}`}
            />
            <Step number="4" about="Очікування" />
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point5}`}
            />
            <Step number="5" about="Забираєте авто" />
          </div>
        </div>
        <div className="absolute top-2 left-[10%] w-4/5 h-[2px] bg-white z-0" />
        <div
          className={`absolute -top-2 left-[calc(10%-57px)] z-20 ${style.car}`}
        >
          <Image src={YellowCar} alt="yellow car" />
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 md:hidden w-full">
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point1}`}
          />
          <Step number="1" about="Записатись на СТО" />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point2}`}
          />
          <Step number="2" about="Привезти авто на СТО" />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point3}`}
          />
          <Step number="3" about="Обговорення проблеми " />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point4}`}
          />
          <Step number="4" about="Очікування" />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point5}`}
          />
          <Step number="5" about="Забираєте авто" />
        </div>
      </div>
      <div className="flex justify-center">
        <PopUpFormButton type="outline" />
      </div>
    </div>
  )
}

export default ProcessSection
