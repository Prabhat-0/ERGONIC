'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/logo.png'
import { Arrow } from '@/svg'
import Button from './Button'

const NavItem = [
  { text: 'Work', path: '/work' },
  { text: 'Industries', path: '/industries' },
  { text: 'Capabilities', path: '/capabilities' },
  { text: 'Process', path: '/process' },
  { text: 'Career', path: '/career' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
]

const NavBar = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // black background after scrolling 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
      <nav
        className={`flex w-full items-center justify-between px-6 py-6 transition-colors duration-300 ${
          scrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href='/' className='w-fit h-auto cursor-pointer' onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt='logo'
            
            priority
            className='h-auto max-w-60 object-cover'
          />
        </Link>

        <div className='flex items-center gap-3 xl:gap-10 2xl:gap-50'>
          {/* Desktop links */}
          <ul className='hidden px-4 py-2 bg-white/5 rounded-full items-center justify-between gap-4 lg:flex xl:gap-10'>
            {NavItem.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.path}
                  className='cursor-pointer rounded-2xl border border-transparent px-4 py-2 text-base font-light leading-7.5 tracking-[-0.06em] text-white transition-all duration-300 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange hover:backdrop-blur-2xl'
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className='flex items-center gap-3'>
            <Button text="Let's Connect"/>

            <button
              onClick={() => setOpen(!open)}
              aria-label='Toggle menu'
              aria-expanded={open}
              className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 lg:hidden'
            >
              <span
                className={`h-px w-5 bg-white transition-all duration-300 ${
                  open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-5 bg-white transition-all duration-300 ${
                  open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu  */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-500 md:mx-6 lg:hidden ${
          open ? 'max-h-125 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className='flex flex-col p-3'>
          {NavItem.map((item) => (
            <li key={item.text}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-lg font-light transition-colors ${
                  pathname === item.path ? 'text-orange' : 'text-white/80 hover:text-orange'
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li className='p-1 pt-3 sm:hidden'>
            <Link
              href='#'
              onClick={() => setOpen(false)}
              className='flex items-center justify-between rounded-xl bg-orange px-4 py-3 font-medium uppercase text-black'
            >
              Let&apos;s Connect <Arrow />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default NavBar