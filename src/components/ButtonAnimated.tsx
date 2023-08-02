import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  link: string
  className?: string
  text: string
}

const ButtonAnimated = ({ link, className, text }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={link}
        className={`rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark ${className}`}
      >
        {text}
      </Link>
    </motion.div>
  )
}

export default ButtonAnimated
