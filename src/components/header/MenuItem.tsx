'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface PropsType {
  href: string
  children: React.ReactNode
}

const MenuItem = ({ href, children }: PropsType) => {
  const pathName = usePathname()

  return (
    <Link href={href}>
      <div className="relative font-bold group">
        {children}
        {href === pathName ? (
          <div className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent-yellow" />
        ) : (
          <div className="absolute -bottom-1 left-[40%] w-0 h-[3px] bg-accent-yellow transition-transform duration-300 ease-in-out group-hover:w-1/5 group-hover:scale-x-[5]" />
        )}
      </div>
    </Link>
  )
}

export default MenuItem
