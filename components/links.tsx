'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Links = () => {
    const pathname = usePathname()

    const NavLinks = [
        {name: 'Homepage', href: '/'},
        {name: 'Shop', href: '/shop'},
        {name: 'Deals', href: '/deals'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ]

  return (
    <div>
    <div className='md:flex gap-4 hidden'>
        {NavLinks.map((link) => (
            <Link  className={pathname === link.href ? "text-amber-200" : "text-lime-500"} key={link.name} href={link.href}>{link.name}</Link>
        ) )}
    </div>
    </div>
  )
}

export default Links