'use client'
import TitleSectionAnimated from '@/components/TitleSectionAnimated'
import BlockImageContent from '@/pages/blockImageContent'
import BannerLogistica from '@/assets/banner-logistica.png'
import { motion } from 'framer-motion'
import React from 'react'

const blocksInfosWithImage = [
  {
    image: BannerLogistica,
    title: 'Integração de Estoque',
    text: 'Mantenha o controle do estoque centralizado e evite vendas duplicadas com a integração em tempo real.',
  },
  {
    image: BannerLogistica,
    title: 'Gestão de Pedidos',
    text: 'Gerencie todos os pedidos recebidos nos marketplaces em uma única plataforma, simplificando o processo logístico.',
  },
  {
    image: BannerLogistica,
    title: 'Painel Gerencial',
    text: 'Acompanhe o desempenho de suas vendas em tempo real, com gráficos e métricas relevantes.',
  },
  {
    image: BannerLogistica,
    title: 'Gestão de Catálogo de Produtos',
    text: 'Cadastre, atualize e sincronize seus produtos em todos os marketplaces de forma prática e eficiente.',
  },
  {
    image: BannerLogistica,
    title: 'Automação de Impressão de Notas Fiscais e Etiquetas',
    text: 'Emita NFs e etiquetas automaticamente, agilizando o processo de envio dos pedidos.',
  },
  {
    image: BannerLogistica,
    title: 'Relatórios Analíticos',
    text: 'Acesse dados e insights relevantes sobre suas vendas, permitindo a tomada de decisões estratégicas mais assertivas.',
  },
]

const Second = () => {
  return (
    <section className='bg-[#F8F8F8] px-6 pt-10 pb-10 lg:pb-20 lg:px-10'>
      <TitleSectionAnimated text='Principais Recursos' />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {blocksInfosWithImage.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay:
                index === 0
                  ? 0
                  : index === 1
                  ? 0.3
                  : index === 2
                  ? 0.5
                  : index === 3
                  ? 0.7
                  : index === 4
                  ? 0.9
                  : index === 5
                  ? 1.1
                  : 1.3,
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

export default Second
