import Image from 'next/image'
import Link from 'next/link'
import Carroussel from '@/pages/carroussel'
import BlockContent from '@/pages/blockContent'
import ImagemConteudoIntegracoes from '../../../public/images/banner_integraçoes-v2.png'
import LogoSynce from '../../../public/images/logo_synce.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
import BlockImageContent from '@/pages/blockImageContent'

export default function Integracoes() {
  return (
    <>
      <main>
        <div className="relative w-full h-auto flex flex-col items-end bg-[url('/images/banner-integracoes.png')] bg-cover py-16 px-14">
          <div>
            <h1 className='text-white text-[45px] font-medium leading-10 mb-6'>
              Integrações de <br /> soluções
            </h1>
            <ul className='ml-4 list-disc text-white mb-14'>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <Link
              className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
              href='/'
            >
              Conheca a Synce
            </Link>
          </div>
        </div>
      </main>
      <Carroussel />
      <section className='p-10 flex justify-center items-center space-x-8'>
        <div className='w-4/6 space-y-4'>
          <div className='w-full flex justify-between'>
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
          </div>
          <div className='w-full flex justify-between'>
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
          </div>
        </div>
        <div className='w-2/6'>
          <Image src={ImagemConteudoIntegracoes} alt='Imagem de integrações' />
        </div>
      </section>
      <section className='bg-[#F8F8F8] p-10'>
        <h3 className='text-synce text-center text-[35px] font-bold mb-10'>
          Logística
        </h3>
        <div className='flex space-x-6'>
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
        </div>
      </section>

      <section className='bg-synce flex'>
        <div className='w-5/6 flex justify-between items-center mr-6'>
          <div className='w-9/12 pl-20'>
            <p className='text-[30px] text-white font-bold'>
              Não perca essa oportunidade e comece hoje mesmo!
            </p>
          </div>
          <div className='w-3/12 flex justify-end'>
            <Link
              className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
              href='/'
            >
              Conheca a Synce
            </Link>
          </div>
        </div>
        <div className='w-1/6 mr-4'>
          <Image src={LogoSynce} alt='Icone Synce' />
        </div>
      </section>
    </>
  )
}
