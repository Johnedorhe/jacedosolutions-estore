import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-gray-100 mt-20 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-36'>
      {/* MAIN CONTAINER */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        
        {/* COLUMN 1: COMPANY INFO */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <Link href="/">
            <p className='text-red-600 font-semibold text-lg hover:opacity-85 transition-opacity'>
              JACED<span className="text-blue-900">O</span>
            </p>
          </Link> 
          <p>Address of Jacedo Solutions LTD</p>
          <p>+234848160794</p>
          
          {/* Social Icons */}
          <div className='flex gap-4 items-center mt-2 text-gray-700'>
            {/* Facebook */}
            <Link 
              href="https://facebook.com" 
              className='hover:opacity-85 hover:text-blue-600 transition-colors'
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
            
            {/* Instagram */}
            <Link 
              href="https://instagram.com" 
              className='hover:opacity-85 hover:text-pink-600 transition-colors'
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
            
            {/* X / Twitter */}
            <Link 
              href="https://twitter.com" 
              className='hover:opacity-85 hover:text-black transition-colors'
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <h2 className='font-semibold text-gray-900 text-base tracking-wider uppercase'>Company</h2>
          <Link href="/about" className='hover:text-red-600 transition-colors'>About Us</Link>
          <Link href="/careers" className='hover:text-red-600 transition-colors'>Careers</Link>
          <Link href="/blog" className='hover:text-red-600 transition-colors'>Blog</Link>
          <Link href="/contact" className='hover:text-red-600 transition-colors'>Contact</Link>
        </div>

        {/* COLUMN 3: SHOP LINKS */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <h2 className='font-semibold text-gray-900 text-base tracking-wider uppercase'>Shop</h2>
          <Link href="/new" className='hover:text-red-600 transition-colors'>New Arrivals</Link>
          <Link href="/deals" className='hover:text-red-600 transition-colors'>Deals & Sales</Link>
          <Link href="/popular" className='hover:text-red-600 transition-colors'>Popular Products</Link>
          <Link href="/faq" className='hover:text-red-600 transition-colors'>Help & FAQ</Link>
        </div>

        {/* COLUMN 4: NEWSLETTER & PAYMENTS */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <h2 className='font-semibold text-gray-900 text-base tracking-wider uppercase'>Subscribe</h2>
          <p>Be the first to know about our latest products and exclusive offers!</p>
          <div className='flex flex-col sm:flex-row gap-2 w-full'>
            <Input placeholder="Your email address" className='bg-white' />
            <Button className='bg-red-600 text-white hover:opacity-85 transition-opacity px-6 shrink-0'>
              Subscribe
            </Button>
          </div>
          
          <div className='flex flex-col gap-2 mt-4'>
            <span className='font-semibold text-gray-900'>Secure Payments</span>      
            <div className='flex gap-2 items-center flex-wrap'>
              <Image src="/discover.png" alt="Discover" width={40} height={20} className='object-contain h-5' />
              <Image src="/skrill.png" alt="Skrill" width={40} height={20} className='object-contain h-5' />
              <Image src="/paypal.png" alt="PayPal" width={40} height={20} className='object-contain h-5' />
              <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} className='object-contain h-5' />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
