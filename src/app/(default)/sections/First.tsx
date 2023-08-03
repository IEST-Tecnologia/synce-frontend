'use client'
import Button from '@/components/Button'
import React from 'react'
import Logo from '@/assets/logo.svg'
import Banner1 from '@/assets/banner_1.png'
import Image from 'next/image'

export default function First() {
  return (
    <section className='overflow-hidden relative'>
      <div className='absolute h-full -z-10 justify-end w-full hidden lg:flex'>
        <Image
          src={Banner1}
          alt='image'
          className='h-full translate-x-32 lg:translate-x-64 w-auto'
        />
      </div>
      <div className='relative h-[720px] lg:ml-20 lg:w-1/2'>
        <div className='absolute flex h-full scale-110 w-full -z-10 '>
          <Image className='rounded-t-lg w-full' src={Logo} alt='logo' />
        </div>
        <div className='h-full items-center  text-center p-10'>
          <h1 className='text-5xl font-extrabold mb-20 lg:p-5 lg:pb-10 lg:mt-20 '>
            Gerencie toda a sua operação de marketplace de um só lugar!
          </h1>
          <p className='text-xl mb-20 text-gray-500'>
            Nosso hub de e-commerce é um integrador <strong>completo</strong>{' '}
            que proporciona uma <em>experiência prática</em> para o seu dia a
            dia.
          </p>
          <Button>Fale com um especialista</Button>
        </div>
      </div>
    </section>
  )
}
