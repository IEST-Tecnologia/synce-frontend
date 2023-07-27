'use client'
import { motion } from 'framer-motion'

const ListAnimated = () => {
  return (
    <motion.ul
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='ml-4 list-disc text-white'
    >
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
    </motion.ul>
  )
}

export default ListAnimated
