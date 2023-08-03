'use client'
import React, { useEffect, useState } from 'react'
import Socials from '@/assets/socials.png'
import Logo from '@/assets/logo_footer.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const breakpoint = 1024

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
    {
      href: '/contato',
      name: 'Contato',
    },
  ]
  return (
    <footer className='bg-gray-100 py-8 lg:flex lg:justify-center'>
      {windowWidth < breakpoint ? (
        <>
          <ul className='mb-10 px-16 grid gap-y-2 gap-x-4 grid-cols-2 uppercase font-semibold text-xl text-gray-500'>
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    className='px-3 h-full font-semibold hover:bg-synce-primary-dark  transition ease-in-out duration-200 flex items-center '
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className='flex px-10 text-gray-500'>
            <div className='text-left '>
              <p>Fale conosco</p>
              <p>Rua do paraíso, 595</p>
              <p>EMAIL@EMAIL.com</p>
              <p>+55 11 TELEFONE</p>
              <div className='flex gap-x-2 w-40 mt-10'>
                <Image src={Socials} alt='socials' className='brightness-50' />
              </div>
            </div>
            <div className='ml-auto text-right'>
              <Image src={Logo} alt='logo' className='w-40' />
              <p>A plataforma de</p>
              <p>integração mais</p>
              <p>completa do mercado</p>
              <p>para gerenciar seus</p>
              <p>marketplaces.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='text-gray-500 mr-20'>
            <Image src={Logo} alt='logo' className='w-40' />
            <p>A plataforma de</p>
            <p>integração mais</p>
            <p>completa do mercado</p>
            <p>para gerenciar seus</p>
            <p>marketplaces.</p>
          </div>
          <div className='flex'>
            <ul className='grid gap-y-2 gap-x-4 grid-cols-2 uppercase font-semibold text-xl text-gray-500 my-auto'>
              {navLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      className='px-3 h-full font-semibold  transition ease-in-out duration-200 flex items-center '
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='flex text-gray-500'>
            <div className='text-left '>
              <p>Fale conosco</p>
              <p>Rua do paraíso, 595</p>
              <p>EMAIL@EMAIL.com</p>
              <p>+55 11 TELEFONE</p>
              <div className='flex gap-x-2 w-40 mt-10'>
                <Image src={Socials} alt='socials' className='brightness-50' />
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  )
}
