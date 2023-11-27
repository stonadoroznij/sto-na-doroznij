import Link from 'next/link'
import React from 'react'

interface PropsType {
  href: string
  children: React.ReactNode
}

const MenuItem = ({ href, children }: PropsType) => {
  return <Link href={href}>{children}</Link>
}

export default MenuItem
