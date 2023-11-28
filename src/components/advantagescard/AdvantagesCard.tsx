import React from 'react'
import Image from 'next/image'

const AdvantagesCard = (props) => {
  return (
    <div className="h-112px rounded-lg border-solid border-black border-2 w-80 mr-6 flex items-center mt-6">
      <Image src={props.imageSrc}
      alt={props.imgAlt}/>
      <h4>{props.text}</h4>
    </div>
  )
}

export default AdvantagesCard