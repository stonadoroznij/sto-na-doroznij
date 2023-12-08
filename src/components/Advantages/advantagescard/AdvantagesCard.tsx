import React from 'react'
import Image from 'next/image'

interface PropsType {
  imgSrc: string
  imgAlt: string
  text: string
}

const AdvantagesCard = ({imgSrc, imgAlt, text}: PropsType) => {
  return (
    <div className=" rounded-lg border-solid border-black border w-full flex items-center p-6 shadow-dark bg-coal-800">
      <Image src={imgSrc} alt={imgAlt} className="pr-3" />
      <h3>{text}</h3>
    </div>
  )
}

export default AdvantagesCard
