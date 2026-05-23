import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProductsList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href='/test' className='relative w-full h-80 flex flex-col gap-4 rounded-lg overflow-hidden group md:w-[48%] lg:w-[31%]'>
      <div className='relative w-full h-80'>
        <Image 
        src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute z-10 hover:opacity-0 transition-opacity duration-500'
        /> 
        <Image 
        src="https://plus.unsplash.com/premium_photo-1731170990911-d0406b93ff15?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute'
        /> 
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Product Name</h3>
          <p className='text-gray-600'>Product Description</p>
          <span className='text-xl font-bold'>$19.99</span>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
          Add to Cart
        </button>
      </Link>
      <Link href='/test' className='relative w-full h-80 flex flex-col gap-4 rounded-lg overflow-hidden group md:w-[48%] lg:w-[31%]'>
      <div className='relative w-full h-80'>
        <Image 
        src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute z-10 hover:opacity-0 transition-opacity duration-500'
        /> 
        <Image 
        src="https://plus.unsplash.com/premium_photo-1731170990911-d0406b93ff15?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute'
        /> 
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Product Name</h3>
          <p className='text-gray-600'>Product Description</p>
          <span className='text-xl font-bold'>$19.99</span>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
          Add to Cart
        </button>
      </Link>
      <Link href='/test' className='relative w-full h-80 flex flex-col gap-4 rounded-lg overflow-hidden group md:w-[48%] lg:w-[31%]'>
      <div className='relative w-full h-80'>
        <Image 
        src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute z-10 hover:opacity-0 transition-opacity duration-500'
        /> 
        <Image 
        src="https://plus.unsplash.com/premium_photo-1731170990911-d0406b93ff15?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=''
        fill
        sizes='25wv'
        className='object-cover rounded-lg absolute'
        /> 
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Product Name</h3>
          <p className='text-gray-600'>Product Description</p>
          <span className='text-xl font-bold'>$19.99</span>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
          Add to Cart
        </button>
      </Link>
    </div>
  )
}

export default ProductsList
