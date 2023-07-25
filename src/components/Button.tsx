import { Transition } from '@headlessui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='bg-synce-secondary rounded-lg py-3 px-6 text-white hover:bg-synce-secondary-dark font-bold transition ease-in-out   hover:scale-105 duration-200'
    >
      {children}
    </button>
  )
}

export default Button
