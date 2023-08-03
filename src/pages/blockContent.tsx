import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string
  sub?: string
  text: string
}

const BlockContent = ({ title, sub, text }: Props) => {
  return (
    <motion.div
      initial={{ y: 100, scale: 0 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full flex flex-col items-center mb-10 lg:items-start lg:w-[47%]'
    >
      <h2 className='text-[#666] text-xl font-bold mb-4 text-center'>
        {title}
      </h2>
      <h4 className='text-[#666] text-base font-bold mb-1'>{sub}</h4>
      <p className='text-[#666] text-base text-center lg:text-left'>{text}</p>
    </motion.div>
  )
}

export default BlockContent
