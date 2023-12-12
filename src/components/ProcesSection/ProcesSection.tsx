'use client'
import YellowCar from '../../../public/YellowCar.svg'
import Image from 'next/image'
import { Step } from '..'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'

const ProcesSection = () => {
  const handleButtonClick = () => {
    // Додайте код для анімації прокрутки вниз
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }
  const { ref, inView, entry } = useInView({
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
    <div
      ref={ref}
      className={`flex flex-col gap-16 z-20 mt-14 pt-14 text-white`}
    >
      <h2 className="text-center">Як відбувається процес</h2>
      <div className="hidden w-full h-40 relative md:block">
        <div className="w-full h-40 flex justify-between gap-4 absolute z-10">
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
      <div className="block md:hidden w-[100vw]">
        <div className="flex flex-row items-center content-center justify-center mb-5">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point1} mr-3`}
          />
          <Step number="1" about="Записатись на СТО" />
        </div>
        <div className="flex flex-row items-center content-center justify-center mb-5">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point2} mr-3`}
          />
          <Step number="2" about="Привезти авто на СТО" />
        </div>
        <div className="flex flex-row items-center content-center justify-center mb-5">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point3} mr-3 `}
          />
          <Step number="3" about="Обговорення проблеми " />
        </div>
        <div className="flex flex-row items-center content-center justify-center mb-5">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point4} mr-3`}
          />
          <Step number="4" about="Очікування" />
        </div>
        <div className="flex flex-row items-center content-center justify-center">
          <div
            className={`w-5 h-5 rounded-full bg-coal-600 border border-accent-yellow ${style.point5} mr-3`}
          />
          <Step number="5" about="Забираєте авто" />
        </div>
      </div>
      <div className="flex justify-center">
        <div onClick={handleButtonClick} className="z-20">
          <Button type={ButtonType.outline}>Зв’язатись з нами</Button>
        </div>
      </div>
    </div>
  )
}

export default ProcesSection
