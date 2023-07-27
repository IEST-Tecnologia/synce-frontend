'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { RxHamburgerMenu } from 'react-icons/rx'
import { useRef } from 'react'
import { motion, sync, useCycle } from 'framer-motion'
import { useDimensions } from '../hooks/use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
  open: ({ height, width }: { height: number; width: number }) => ({
    clipPath: `circle(${height * 2 + 200}px at ${width}px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  // closed: ({ height, width }: { height: number; width: number }) => ({
  //   clipPath: `circle(20px at ${width - 50}px 20px)`,
  //   transition: {
  //     delay: 0.5,
  //     type: 'spring',
  //     stiffness: 400,
  //     damping: 40,
  //   },
  // }),
  closed: ({ height, width }: { height: number; width: number }) => {
    return {
      clipPath: `circle(20px at ${width - 50}px 20px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    }
  },
}

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
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const dimensions = useDimensions(containerRef)
  return (
    <header className=' bg-synce-primary'>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={dimensions}
        ref={containerRef}
        className='absolute h-full w-full md:hidden'
      >
        <motion.div
          className='absolute top-0 right-0 bottom-0 w-full bg-synce-primary z-10'
          custom={dimensions}
          variants={sidebar}
        />
        <Navigation />
      </motion.nav>
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
        <div className='md:hidden px-2 py-auto flex items-center text-2xl font-bold text-white z-20'>
          <RxHamburgerMenu onClick={() => toggleOpen()} />
        </div>
      </div>
    </header>
  )
}
