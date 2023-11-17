import React from 'react'
import Logo from '../../../public/Logo_CTO.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative mt-[96px] flex justify-between items-center gap-6 text-white">
      <div className='bg-light-gray absolute -left-[calc(50vw-50%)] -top-[48px] w-screen h-[calc(100%+96px)] -z-10'/>
      <Image src={Logo} alt="Logo" />
      <div className='text-2xl text-white'>Footer</div>
    </footer>
  )
}

export default Footer