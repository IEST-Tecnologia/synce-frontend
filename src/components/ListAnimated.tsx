import { motion } from 'framer-motion'

interface Props {
  className: string
}

const ListAnimated = ({ className }: Props) => {
  return (
    <motion.ul
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-2'
      >
        Venda mais ao unificar marketplaces, gerenciar anúncios e soluções
        logísticas no Synce.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='mb-2'
      >
        Integre ERPs e plataformas de frete para uma experiência completa.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='mb-2'
      >
        Unifique seus canais de venda com as principais plataformas do mercado!
      </motion.li>
    </motion.ul>
  )
}

export default ListAnimated
