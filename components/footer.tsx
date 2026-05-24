import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20 md:px-8 px-4 py-16 lg:px-16 xl:px-32 bg-gray-100 2xl:px-36'>
      {/* TOP */}
      <div className='flex justify-between gap-20'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4 text-sm text-gray-600'>
          <Link href="/">
            <div>
              <p className='text-red-600 font-semibold hover:opacity-85'>
                JACED<span className="text-blue-900">O</span>
              </p>
            </div>
          </Link> 
          <p>Address of Jacedo Solutions LTD</p>
          <p>+234848160794</p>
          
          {/* Social Icons Container */}
          <div className='flex gap-4 items-center mt-4 text-gray-700'>
            
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
      </div>
      {/* CENTER */}
      <div className='hidden lg:flex justify-between w-1/2'>

      </div>
      {/* RIGHT */}
      <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
        <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
        <p>Be the first to know about our latest products and exclusive offers!</p>
        <div>
          <Input placeholder="Your email address"  />
          <Button className='bg-red-600 text-white mt-4 hover:opacity-85 transition-opacity'>Subscribe</Button>   
          <span className='font-semibold'>Secure Payments</span>      
          <div>
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer