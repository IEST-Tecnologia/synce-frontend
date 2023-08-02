'use client'
import { useState } from 'react'

import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

export default function forgotPasswordForm() {
  const [email, setEmail] = useState('')
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
      <Button>Continuar</Button>
    </>
  )
}
