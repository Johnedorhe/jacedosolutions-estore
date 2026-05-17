"use client"

import React from 'react'
import Links from './links'
import Link from 'next/link'
import MobileLinks from './mobile-links'
import { SearchBar } from './search-bar'
import { NavIcons } from './navicons'
import { Show, SignInButton, SignUpButton} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20">
    <p className='text-red-700 font-semibold'><Link href="/">JAC<span className="text-blue-700">EDO</span></Link></p>
      <Links />
      <SearchBar />
      
      <Show when="signed-in">
      <NavIcons />
      </Show>

         <Show when="signed-out"> 
          <div className='text-xs font-medium'>
            <SignInButton />
          </div>
            <div className='text-xs font-medium'>
            <SignUpButton />
            </div>
         </Show> 
      <MobileLinks />
    </div>
      
  )
}

export default Navbar
