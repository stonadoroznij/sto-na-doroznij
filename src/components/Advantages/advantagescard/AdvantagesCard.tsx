import React from 'react'
import Image from 'next/image'

const AdvantagesCard = (props) => {
  return (
    <div className=" rounded-lg border-solid border-black border-2 w-80 mr-6 flex items-center mt-6 p-6 shadow-dark bg-coal-800">
      <Image src={props.imageSrc} alt={props.imgAlt} className="pr-3" />
      <h3>{props.text}</h3>
    </div>
  )
}

export default AdvantagesCard
