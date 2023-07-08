import React from 'react'

interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className='bg-synce-secondary rounded-lg py-3 px-6 text-white hover:bg-synce-secondary-dark'
      >
        {children}
      </button>
    </div>
  )
}

export default Button
