import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LogoImg from '../../../public/logo.svg'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoImg} alt="Logo" height={250} width={250} />
    </Link>
  )
}

export default Logo
