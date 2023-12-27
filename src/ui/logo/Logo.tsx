import React from 'react'
import Image from 'next/image'
import LogoImg from '../../../public/logo.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoImg} alt="Logo" height={250} width={250} />
    </Link>
  )
}

export default Logo
