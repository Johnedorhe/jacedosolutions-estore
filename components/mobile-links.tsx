'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MobileLinks = () => {
    const pathname = usePathname()

    const MobileLinks = [
        {name: 'Homepage', href: '/'},
        {name: 'Shop', href: '/shop'},
        {name: 'Deals', href: '/deals'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ]

  return (
    <div>
    <div className='md:hidden flex flex-col items-center gap-4'>
        {MobileLinks.map((link) => (
            <Link  className={pathname === link.href ? "text-amber-200" : "text-lime-500"} key={link.href} href={link.href}>{link.name}</Link>
        ) )}
    </div>
    </div>
  )
}

export default MobileLinks