import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  img: StaticImageData
  title: string
  text: string
}

const BlockImageContent = ({ img, title, text }: Props) => {
  return (
    <div className='w-[47%] bg-white rounded-lg'>
      <Image className='rounded-t-lg' src={img} alt={title} />
      <div className='p-4'>
        <h4 className='text-[#666] text-xl font-bold mb-3'>{title}</h4>
        <p className='text-[#666] text-base'>{text}</p>
      </div>
    </div>
  )
}

export default BlockImageContent
