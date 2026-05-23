import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-8'>
      <div>
        <div>
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
    </div>
  )
}

export default Footer
