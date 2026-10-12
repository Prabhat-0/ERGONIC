import React from 'react'
import { Arrow } from '@/svg'
import Link from 'next/link'
const Button = ({text}) => {
  return (
     <Link
              href='#'
              className='group relative isolate hidden w-fit items-center justify-between gap-5 xl:gap-10 overflow-hidden rounded-full border border-orange px-4 py-4 text-base font-medium leading-5 tracking-[-0.03em] whitespace-nowrap text-white transition-colors duration-300 hover:text-black sm:flex'
            >
              {/* orange fill sweeps in on hover */}
              <span className='absolute inset-0 -z-10 origin-left scale-x-0 bg-orange  transition-transform duration-300 ease-out group-hover:scale-x-100' />
              {text.trim().length !==0 && text.toUpperCase()}
              <Arrow className='transition-transform duration-300 group-hover:translate-x-2' />
            </Link>
  )
}

export default Button