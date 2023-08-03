'use client'
import Button from '@/components/Button'
import React from 'react'

export default function First() {
  return (
    <div className='overflow-hidden relative'>
      <div className='absolute h-full -z-10 justify-end w-full hidden lg:flex'>
        <img
          src='/images/banner_1.png'
          alt='image'
          className='h-full -z-10 translate-x-32 lg:translate-x-64'
        />
      </div>
      <div className='relative h-[720px] lg:ml-20 lg:w-1/2'>
        <div className='absolute flex h-full scale-110 w-full -z-10 '>
          <img
            src='/images/logo.svg'
            alt='logo'
            className='h-full w-auto mx-auto'
          />
        </div>
        <div className='h-full items-center  text-center p-10'>
          <h1 className='text-5xl font-extrabold mb-20 lg:p-5 lg:pb-20 lg:mt-20 '>
            Gerencie toda a sua operação de marketplace de um só lugar!
          </h1>
          <p className='text-xl mb-10 text-gray-500'>
            Nosso hub de e-commerce é um integrador <strong>completo</strong>{' '}
            que proporciona uma experiência prática para o seu dia a dia.
          </p>
          <div className=''>
            <Button>Fale com um especialista</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
