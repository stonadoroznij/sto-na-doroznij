import React from 'react'
import Advantages1 from '../../../public/advantages-icons/advantages-1.svg'
import Advantages2 from '../../../public/advantages-icons/advantages-2.svg'
import Advantages3 from '../../../public/advantages-icons/advantages-3.svg'
import Advantages4 from '../../../public/advantages-icons/advantages-4.svg'
import Advantages5 from '../../../public/advantages-icons/advantages-5.svg'
import Advantages6 from '../../../public/advantages-icons/advantages-6.svg'
import { AdvantagesCard } from '@/components'

const AdvantageSection = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
      <AdvantagesCard
        imgSrc={Advantages1}
        imgAlt="Нове сучасне обладнання та інструмент."
        text="Нове сучасне обладнання та інструмент."
      />
      <AdvantagesCard
        imgSrc={Advantages2}
        imgAlt="Досвідчені та кваліфіковані працівники."
        text="Досвідчені та кваліфіковані працівники."
      />
      <AdvantagesCard
        imgSrc={Advantages3}
        imgAlt="Широкий спектр послуг з ремонту та обслуговування авто."
        text="Широкий спектр послуг з ремонту та обслуговування авто."
      />
      <AdvantagesCard
        imgSrc={Advantages4}
        imgAlt="Гарантія на роботу та запчастини."
        text="Гарантія на роботу та запчастини."
      />
      <AdvantagesCard
        imgSrc={Advantages5}
        imgAlt="Сучасний 3D стенд розвал-сходження."
        text="Сучасний 3D стенд розвал-сходження."
      />
      <AdvantagesCard
        imgSrc={Advantages6}
        imgAlt="Комфортна зона очікування для клієнтів."
        text="Комфортна зона очікування для клієнтів."
      />
    </div>
  )
}

export default AdvantageSection
