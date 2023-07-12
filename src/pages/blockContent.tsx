import React from 'react'

interface Props {
  title: string
  sub: string
  text: string
}

const BlockContent = ({ title, sub, text }: Props) => {
  return (
    <div className='w-[47%]'>
      <h3 className='text-[#666] text-xl font-bold mb-4'>{title}</h3>
      <h4 className='text-[#666] text-base font-bold mb-1'>{sub}</h4>
      <p className='text-[#666] text-base'>{text}</p>
    </div>
  )
}

export default BlockContent
