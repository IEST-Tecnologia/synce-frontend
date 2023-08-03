'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TitleSectionAnimated from '@/components/TitleSectionAnimated'
import BannerLogistica from '@/assets/banner-logistica.png'
import BlockImageContent from '@/pages/blockImageContent'

const blocksInfosWithImage = [
  {
    image: BannerLogistica,
    title: 'Gerencie seu estoque com Facilidade e Precisão',
    text: 'Oferecemos uma solução integrada para controlar o estoque em tempo real, sincronizando automaticamente as movimentações de produtos entre os diversos marketplaces e o ERP de sua escolha.',
  },
  {
    image: BannerLogistica,
    title: 'Emita Notas Fiscais de forma ágil e integrada',
    text: 'Nossa plataforma automatiza o processo, sincronizando as vendas realizadas em diferentes marketplaces com o seu sistema de emissão de notas fiscais, garantindo conformidade e agilidade nas operações.',
  },
  {
    image: BannerLogistica,
    title: 'Importe seus produtos com facilidade',
    text: 'Com o nosso hub de marketplaces, você pode importar os produtos já cadastrados no seu ERP e replicá-los de forma simples e eficiente para diversos canais de venda. ',
  },
]

const Third = () => {
  return (
    <section className='bg-[#F8F8F8] p-5 lg:p-10'>
      <TitleSectionAnimated text='Logística' />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {blocksInfosWithImage.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: index === 0 ? 0.5 : index === 1 ? 0.3 : 0,
              duration: 0.5,
            }}
            className='w-full'
          >
            <BlockImageContent
              img={item.image}
              title={item.title}
              text={item.text}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Third
