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

  // close the menu after navigating to another page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // close the menu when the screen grows into desktop layout (xl = 1280px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = (e) => {
      if (e.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Escape closes the menu, and the page behind it doesn't scroll while it's open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
      <nav
        className={`flex w-full items-center justify-between gap-3 px-4 py-3 transition-colors duration-300 sm:px-6 sm:py-4 xl:px-10 xl:py-6 ${
          scrolled || open ? 'bg-black' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link
          href='/'
          aria-label='Home'
          className='block shrink-0 cursor-pointer'
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt='logo'
            priority
            sizes='(max-width: 640px) 112px, (max-width: 1536px) 176px, 240px'
            className='h-auto w-28 object-contain sm:w-36 xl:w-44 2xl:w-60'
          />
        </Link>

        <div className='flex min-w-0 items-center gap-3 xl:gap-24'>
          {/* Desktop links (xl and up) */}
          <ul className='hidden items-center gap-1 rounded-full bg-white/5 px-3 py-2 xl:flex 2xl:gap-6 2xl:px-4'>
            {NavItem.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.path}
                  className={`block cursor-pointer rounded-2xl border border-transparent px-3 py-2 text-base leading-7.5 font-light tracking-[-0.06em] whitespace-nowrap transition-all duration-300 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange hover:backdrop-blur-2xl 2xl:px-4 ${
                    pathname === item.path ? 'text-orange' : 'text-white'
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className='flex items-center gap-3'>
            {/* On phones the CTA lives inside the mobile menu instead */}
            <div className='hidden sm:block'>
              <Button text="Let's Connect" />
            </div>

            <button
              type='button'
              onClick={() => setOpen((v) => !v)}
              aria-label='Toggle menu'
              aria-expanded={open}
              aria-controls='mobile-menu'
              className='flex size-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 focus-visible:outline-2 focus-visible:outline-orange sm:size-11 xl:hidden'
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

      {/* Mobile / tablet menu (below xl) */}
      <div
        id='mobile-menu'
        className={` overflow-hidden w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-500 sm:mx-6 md:ml-auto md:w-80 xl:hidden ${
          open
            ? 'max-h-[calc(100dvh-5.5rem)] overflow-y-auto opacity-100'
            : 'pointer-events-none max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className='flex flex-col p-2 sm:p-3'>
          {NavItem.map((item) => (
            <li key={item.text}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block rounded-xl px-4 py-3 text-base font-light transition-colors sm:text-lg ${
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
              tabIndex={open ? 0 : -1}
              className='flex items-center justify-between rounded-xl bg-orange px-4 py-3 font-medium text-black uppercase'
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