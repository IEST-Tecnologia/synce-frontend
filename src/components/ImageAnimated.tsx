import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  alt: string
  image: StaticImageData
  className?: string
}

const ImageAnimated = ({ alt, image, className }: Props) => {
  return (
    <motion.div
      initial={{ x: 100, scale: 0 }}
      whileInView={{ x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='relative'
    >
      <Image className={className} src={image} alt={alt} />
    </motion.div>
  )
}

export default ImageAnimated
