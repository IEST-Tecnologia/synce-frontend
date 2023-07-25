import Button from '@/components/Button'
import React from 'react'

export default function First() {
  return (
    <div className='relative'>
      <div className='absolute flex  h-full -z-10'>
        {/* <img src='/logo.svg' alt='image' className='h-full w-auto' /> */}
        <img
          src='/logo.svg'
          alt='logo'
          className='h-full w-auto -translate-x-8 '
        />
      </div>
      <div className='absolute  h-full -z-10 justify-end w-full hidden md:flex'>
        <img
          src='/banner_1.png'
          alt='image'
          className='h-full w-auto translate-x-32 md:translate-x-0'
        />
      </div>
      <div className='flex h-full'>
        <div className='md:w-1/2 p-10 my-auto'>
          <h1 className='mb-8 text-2xl font-semibold'>
            Gerencie toda a sua operação de marketplace de um só lugar!
          </h1>
          <p className='mb-4'>
            Nosso hub de e-commerce é um integrador completo que proporciona uma
            experiência prática para o seu dia a dia.
          </p>
          <Button>Fale com um especialista</Button>
        </div>
      </div>
    </div>
  )
}
