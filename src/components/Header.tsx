'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const navLinks = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/integracoes',
      name: 'Integrações',
    },
    {
      href: '/funcionalidades',
      name: 'Funcionalidades',
    },
  ]
  const pathname = usePathname()

  return (
    <header className=' bg-synce-primary'>
      <div className='flex max-w-4xl mx-auto relative w-full px-10'>
        <Link href='/'>
          <img src='/logo_full_white.png' alt='logo' className='h-16 py-3' />
        </Link>
        <div className='items-center text-white ml-10 md:flex hidden'>
          {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href)
            return (
              <Link
                className={
                  'px-3 h-full font-semibold hover:bg-synce-primary-dark  transition ease-in-out duration-200 flex items-center ' +
                  (isActive ? 'bg-sync-primary-light' : '')
                }
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className='ml-auto flex items-center text-white mr-4'>
          <button className='border-white border-2 font-semibold rounded-xl text-sm py-2 px-3 hover:bg-synce-primary-dark transition ease-in-out duration-200'>
            Login
          </button>
        </div>
        <div className='px-2 py-auto flex items-center text-2xl font-bold text-white'>
          <RxHamburgerMenu />
        </div>
      </div>
    </header>
  )
}
