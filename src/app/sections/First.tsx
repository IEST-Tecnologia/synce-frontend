import Button from '@/components/Button'
import React from 'react'

export default function First() {
  return (
    <div className='relative h-96 max-w-4xl mx-auto'>
      <div className='absolute flex  h-full -z-10'>
        <img
          src='/logo.svg'
          alt='logo'
          className='h-full w-auto -translate-x-8 '
        />
      </div>
      {/* <div className='absolute  h-full -z-10 justify-end w-full hidden md:flex'>
        <img
          src='/banner_1.png'
          alt='image'
          className='h-full w-auto translate-x-32 md:translate-x-0'
        />
      </div> */}
      <div className='flex h-full flex-col items-center p-10 justify-between'>
        <h1 className='text-4xl font-semibold text-center'>
          Gerencie toda a sua operação de marketplace de um só lugar!
        </h1>
        <p className=''>
          Nosso hub de e-commerce é um integrador completo que proporciona uma
          experiência prática para o seu dia a dia.
        </p>
        <div className=''>
          <Button>Fale com um especialista</Button>
        </div>
      </div>
    </div>
  )
}
