import React from 'react'
import Image from 'next/image'
import CTOLogo from '../../../public/Logo_CTO.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={CTOLogo} alt="Logo" height={250} width={250} />
    </Link>
  )
}

export default Logo
