import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { cache } from 'react'
import { cookies } from 'next/headers'
import AuthForm from '@/pages/authForm'
import LogoSynce from '../../../public/images/logo_synce_color.png'
import BgSynce from '../../../public/images/bg-synce-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default async function Login() {
  const supabase = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
  })()

  const {
    data: { session },
  } = await supabase.auth.getSession()

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
          Preparado para gerenciar seus marketplaces da melhor maneira?
        </h2>
        <div className='flex flex-col w-full'>
          <AuthForm session={session} />
          <Link
            className='text-center text-white underline mt-2'
            href='/login/forgot'
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </div>
  )
}
