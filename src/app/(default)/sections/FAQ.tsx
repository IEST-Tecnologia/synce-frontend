'use client'
import Image from 'next/image'
import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const faq = [
    {
      title: 'O QUE É SYNCE?',
      content:
        'O Synce é uma ferramenta que está integrada aos principais marketplaces e oferece mais praticidade na gestão de cadastro de produtos, expedição e estoque.',
    },
    {
      title: 'EM QUE ESSA FERRAMENTA PODERIA ME AJUDAR?',
      content:
        'Além de ter todos os dados concentrados em um único lugar, você poderá fazer a gestão de múltiplas lojas e locais. Graças a uma comunicação centralizada, a SYNCE permite que você controle diferentes e-commerces e marketplaces.',
    },
    {
      title: 'COMO EU FACO PARA EMITIR NFS SE TENHO MAIS DE UMA?',
      content:
        'Para tornar o processo mais ágil, a SYNCE facilita a sua vida com a emissão de notas fiscais de forma automatizada para os marketplaces, dentro da própria plataforma, sem a necessidade de ter um ERP. ',
    },
    {
      title: 'CASO EU NAO EMITA NOTA FISCAL?',
      content:
        'Para que você não tenha problemas jurídicos futuros e possa operar nos maiores marketplaces, é necessário realizar a emissão de NFs de forma correta, independentemente do tamanho de seu e-commerce.',
    },
    {
      title: 'COMO EU CALCULO MEU PRECO DE VENDA?',
      content:
        'A Synce disponibiliza a funcionalidade "X", que irá te auxiliar na realização de cálculos das comissões padrões utilizadas na precificação das taxas dos marketplaces de forma automática.',
    },
    {
      title: 'COMO POSSO CONTROLAR O ESTOQUE?',
      content:
        'Na funcionalidade "X" clique em "X" e depois em "Estoque". Com isso, você terá acesso ao estoquedos seus produtos com todas as informações necessárias.',
    },
    {
      title: 'COMO FACO PARA IMPRIMIR MINHAS ETIQUETAS?',
      content:
        'Para imprimir suas etiquetas, você teráque configurar o nome da impressora "etiqueta", com a quantidade de cópiasde envio e para finalizar, salve as configurações. ',
    },
  ]
  return (
    <section className='relative'>
      <div className=' p-10 flex flex-col container mx-auto lg:flex-row w-full'>
        <div className='flex flex-col items-center lg:w-1/2 lg:items-start'>
          <div className='flex'>
            <motion.h2
              whileHover={{
                translateY: -10,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='border-b-4 border-synce-primary  text-center text-synce-primary  text-xl font-bold mx-auto px-4'
            >
              FAQ
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='my-6 font-semibold text-center'
          >
            Confira as principais dúvidas...
          </motion.p>
        </div>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-col border-2 border-gray-300 rounded-xl items-start lg:w-1/2'
        >
          {faq.map((c, index) => (
            <Disclosure key={index}>
              <Disclosure.Button className='justify-between items-center w-full flex px-4 py-7 border-b-2 border-gray-300 last:border-0 space-x-4 hover:text-synce-secondary'>
                <h4 className='text-left font-semibold'>{c.title}</h4>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className='w-5 h-5 relative flex-shrink-0'
                >
                  <Image src='/images/plus.svg' alt='plus' fill />
                </motion.div>
              </Disclosure.Button>
              <Transition
                enter='transition duration-200 ease-out'
                enterFrom='transform -translate-y-full opacity-0 w-full'
                enterTo='transform translate-y-0 opacity-100 w-full'
                leave='transition duration-200 ease-out w-full'
                leaveFrom='transform translate-y-0 opacity-100'
                leaveTo='transform -translate-y-full opacity-0'
              >
                <p className='overflow-hidden'>
                  <Disclosure.Panel
                    className={
                      'text-gray-400 px-4 py-3 text-sm  w-full bg-gray-50 border-gray-300 overflow-hidden ' +
                      (index === faq.length - 1 ? 'border-0' : 'border-b-2 ')
                    }
                  >
                    {c.content}
                  </Disclosure.Panel>
                </p>
              </Transition>
            </Disclosure>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
