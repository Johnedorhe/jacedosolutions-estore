'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

const MobileLinks = () => {
  const pathname = usePathname()

  const links = [
    { name: 'Homepage', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className='md:hidden flex items-center'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className='w-75'>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu
            </SheetDescription>
          </SheetHeader>
         
          <div className='flex flex-col gap-4 mt-8'>
            {links.map((link) => (
              <Link  
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href ? "text-amber-500" : "text-lime-600 hover:text-lime-700"
                }`} 
                key={link.href} 
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileLinks
