import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  link: string
  className: string
  text: string
}

const ButtonAnimated = ({ link, className, text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5 }}
      className='flex justify-center md:justify-start'
    >
      <Link href={link} className={className}>
        {text}
      </Link>
    </motion.div>
  )
}

export default ButtonAnimated
