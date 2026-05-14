"use client"

import React from 'react'
import Links from './links'
import Link from 'next/link'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import MobileLinks from './mobile-links'
import { SearchBar } from './search-bar'
import { NavIcons } from './navicons'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20">
    <p className='text-red-700 font-semibold'><Link href="/">JAC<span className="text-blue-700">EDO</span></Link></p>
      <Links />
      <SearchBar />
      <NavIcons />

      <div className='flex items-center md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='' variant="outline" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className='md:hidden'>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
         <MobileLinks />
        </SheetContent>
      </Sheet>
      </div>
    </div>
  )
}

export default Navbar
