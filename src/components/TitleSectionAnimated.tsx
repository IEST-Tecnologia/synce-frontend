import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
}

const TitleSectionAnimated = ({ text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        whileHover={{ y: -5 }}
        transition={{ duration: 0.1 }}
        className='text-synce-primary text-center text-[35px] font-bold mb-10'
      >
        {text}
      </motion.h3>
    </motion.div>
  )
}

export default TitleSectionAnimated
