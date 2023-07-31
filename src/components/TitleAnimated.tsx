import React, { ReactComponentElement } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

interface Props {
  text: string
  className: string
}

const TitleAnimated = ({ text, className }: Props) => {
  return (
    <>
      {text && (
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={className}
        >
          {text}
        </motion.h1>
      )}
    </>
  )
}

export default TitleAnimated
