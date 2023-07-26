'use client'
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
        <TypeAnimation
          className={className}
          sequence={[text]}
          wrapper='h1'
          speed={10}
          repeat={0}
        />
      )}
    </>
  )
}

export default TitleAnimated
