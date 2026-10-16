import React from 'react'
import { Arrow } from '@/svg'
import Link from 'next/link'
const Button = ({text,path='#'}) => {
  return (
     <Link
              href={path}
              className='group relative  z-10 flex w-fit items-center justify-between gap-2 md:gap-5 xl:gap-10 overflow-hidden rounded-full border border-orange px-4 md:px-6 py-2 md:py-4 text-xs md:text-base font-medium leading-0 md:leading-5 tracking-[-0.03em] whitespace-nowrap text-white transition-all duration-300 '
            >
              {/* orange fill sweeps in on hover */}
              <span className='absolute inset-0 -z-10 origin-left scale-x-0 bg-orange  transition-transform duration-300 ease-out group-hover:scale-x-100' />
              {text&& text.toUpperCase()}
              <Arrow className='transition-transform duration-300 group-hover:translate-x-2' />
            
            </Link>
  )
}

export default Button