'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then(() => {
        router.push('/dashboard')
      })
  }

  return (
    <>
      <label className='text-white' htmlFor='email'>
        EMAIL
      </label>
      <TextInput
        name='email'
        placeholder='Email'
        onChange={(text) => setEmail(text)}
        value={email}
        className='mb-4'
      />
      <label className='text-white' htmlFor='password'>
        SENHA
      </label>
      <TextInput
        type='password'
        name='password'
        placeholder='Senha'
        onChange={(text) => setPassword(text)}
        value={password}
        className='mb-8'
      />
      <Button onClick={handleSignIn}>Continuar</Button>
    </>
  )
}
