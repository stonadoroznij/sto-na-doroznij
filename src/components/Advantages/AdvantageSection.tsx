import React from 'react'
import Advantages1 from '../../../public/AdvantagesIcons/Advantages-1.svg'
import Advantages2 from '../../../public/AdvantagesIcons/Advantages-2.svg'
import Advantages3 from '../../../public/AdvantagesIcons/Advantages-3.svg'
import Advantages4 from '../../../public/AdvantagesIcons/Advantages-4.svg'
import Advantages5 from '../../../public/AdvantagesIcons/Advantages-5.svg'
import Advantages6 from '../../../public/AdvantagesIcons/Advantages-6.svg'
import { AdvantagesCard } from '..'

const AdvantageSection = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <AdvantagesCard
        imageSrc={Advantages1}
        text="Нове сучасне обладнання та інструмент."
      />
      <AdvantagesCard
        imageSrc={Advantages2}
        text="Досвідчені та кваліфіковані працівники."
      />
      <AdvantagesCard
        imageSrc={Advantages3}
        text="Широкий спектр послуг з ремонту та обслуговування авто."
      />
      <AdvantagesCard
        imageSrc={Advantages4}
        text="Гарантія на роботу та запчастини."
      />
      <AdvantagesCard
        imageSrc={Advantages5}
        text="Сучасний 3D стенд розвал-сходження."
      />
      <AdvantagesCard
        imageSrc={Advantages6}
        text="Комфортна зона очікування для клієнтів."
      />
    </div>
  )
}

export default AdvantageSection
