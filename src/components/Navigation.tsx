'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ulVariants = {
  open: {
    zIndex: [40],
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    zIndex: [40, -10],
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const Navigation = () => {
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
    <motion.ul
      variants={ulVariants}
      className='p-6 absolute top-20 bg-transparent z-40 w-full flex flex-col lg:hidden'
    >
      {navLinks.map((link) => (
        <motion.li
          variants={liVariants}
          whileTap={{ scale: 0.95 }}
          className={` text-white  hover:bg-synce-primary-light rounded-lg ${
            pathname?.startsWith(link.href) ? 'bg-sync-primary-light' : ''
          }`}
          key={link.name}
        >
          <Link
            className='w-full h-full block p-4 text-center text-2xl font-bold'
            href={link.href}
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

const itemIds = [0, 1, 2, 3, 4]
