import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import React from 'react'
import '../globals.css'

export default function Home() {
  // const [text, setText] = React.useState('')
  return (
    <div className='h-screen w-full p-4'>
      <div className='space-y-4'>
        <Button>Hello</Button>
        {/* <TextInput value={text} onChange={setText} /> */}
      </div>
    </div>
  )
}
