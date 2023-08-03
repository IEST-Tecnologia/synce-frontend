'use client'
import React from 'react'
import ImageAnimated from '@/components/ImageAnimated'
import BlockContent from '@/pages/blockContent'
import ImagemConteudoIntegracoes from '@/assets/banner_integraçoes-v2.png'

const Second = () => {
  return (
    <section className='p-5 lg:p-10 flex justify-center items-center space-x-8 flex-col lg:flex-row'>
      <div className='w-full lg:w-4/6 space-y-4'>
        <div className='w-full flex flex-wrap justify-center lg:justify-between'>
          <BlockContent
            title='Otimize suas Campanhas'
            text='Através da nossa plataforma, você pode gerenciar todas as suas campanhas de anúncios de forma integrada. Otimize suas estratégias de marketing, segmente o público-alvo e acompanhe o desempenho das suas campanhas em tempo real.'
          />
          <BlockContent
            title='Anúncios Personalizados'
            text='Crie anúncios personalizados para cada canal de venda, destacando os diferenciais dos seus produtos. Aproveite as ferramentas de customização para impactar positivamente seus clientes e aumentar suas chances de conversão.'
          />
        </div>
        <div className='w-full flex flex-wrap justify-center lg:justify-between'>
          <BlockContent
            title='Agendamento Inteligente'
            text='Controle a exposição dos seus produtos nos diferentes marketplaces com um agendamento inteligente. Ajuste a visibilidade dos anúncios de acordo com a demanda e evite a exposição excessiva em momentos pouco estratégicos.'
          />
          <BlockContent
            title='Monitoramento em Tempo Real'
            text='Mantenha-se atualizado sobre o desempenho dos seus anúncios com métricas em tempo real. Acompanhe cliques, conversões e vendas para tomar decisões informadas e maximizar o retorno dos seus investimentos em publicidade.'
          />
        </div>
      </div>
      <div className='w-full flex justify-center lg:w-2/6 relative'>
        <ImageAnimated
          image={ImagemConteudoIntegracoes}
          alt='Imagem de integrações'
          className='block'
        />
      </div>
    </section>
  )
}

export default Second
