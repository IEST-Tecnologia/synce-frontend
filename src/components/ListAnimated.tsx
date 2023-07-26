'use client'
import { motion } from 'framer-motion'

const ListAnimated = () => {
  return (
    <motion.ul
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, x: 0 }}
      className='ml-4 list-disc text-white mb-14'
    >
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </motion.li>
    </motion.ul>
  )
}

export default ListAnimated
