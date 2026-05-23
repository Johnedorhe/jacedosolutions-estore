"use client"

import React from 'react'
import Links from './links'
import Link from 'next/link'
import MobileLinks from './mobile-links'
import { SearchBar } from './search-bar'
import { NavIcons } from './navicons'
import CartModal from './cartModal'
import { dummyCartItems } from '@/lib/dummyCartItems'
import { Show, SignInButton, SignUpButton} from '@clerk/nextjs'
import Container from './container'


const Navbar = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(dummyCartItems);

  // Remove item handler (for demo)
  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className='bg-white py-4 border-b border-gray-100 shadow-sm sticky top-0 z-50'>
      <Container classname='flex justify-between items-center'>
        <p className='text-red-600 font-semibold hover:opacity-85'>
          <Link href="/">JACED<span className="text-blue-900">O</span></Link>
        </p>
        <div>
          <Links />
        </div>
        <div>
          <SearchBar />
        </div>

        <Show when="signed-in">
          <div>
            <NavIcons onCartClick={() => setCartOpen(true)} cartCount={cartItems.length} />
          </div>
        </Show>

        <Show when="signed-out"> 
          <div className='flex items-center gap-4 text-xs font-medium'>
            <SignInButton />
            <SignUpButton />
          </div>
        </Show> 
        <MobileLinks />

        {/* Cart Modal Sheet */}
        <CartModal 
          open={cartOpen} 
          onOpenChange={setCartOpen} 
          cartItems={cartItems} 
          onRemoveItem={handleRemoveItem}
        />
      </Container>
    </div>
  )
}

export default Navbar
