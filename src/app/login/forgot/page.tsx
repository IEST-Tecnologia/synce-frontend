import React from 'react'
import LogoSynce from '@/assets/logo_synce_color.png'
import BgSynce from '@/assets/bg-synce-logo.png'
import Image from 'next/image'
import ForgotPasswordForm from '@/pages/forgotPasswordForm'

export default async function Forgot() {
  return (
    <div className='bg-synce-primary flex justify-center items-center relative h-[100vh] overflow-hidden'>
      <Image
        className='absolute brightness-50 opacity-30 h-full'
        src={BgSynce}
        alt='Background Logo Synce'
      />
      <div className='flex flex-col justify-center items-center w-full p-8 m-auto z-10 lg:p-0 lg:w-[500px]'>
        <Image src={LogoSynce} alt='Logo da Synce' />
        <h2 className='text-white text-2xl font-normal text-center my-8'>
          Informe seu e-mail abaixo e enviaremos um link para redefinir sua
          senha.
        </h2>
        <div className='flex flex-col w-full'>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  )
}
