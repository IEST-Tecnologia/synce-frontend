import Image from 'next/image'
import LogoSynce from '../../../public/images/logo_synce_simbolo.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
import BlockImageContent from '@/pages/blockImageContent'

export default function Integracoes() {
  return (
    <>
      <main>
        <div className='flex items-center'>
          <div className=''>
            <Image src={LogoSynce} alt='Logo synce' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[#666] font-normal text-5xl'>
              Funcionalidades <br /> Synce
            </h1>
            <ul className='list-disc mt-6'>
              <li className='ml-6'>Lorem ipsum dolor sit amet, consectetur.</li>
              <li className='ml-6'>Lorem ipsum dolor sit amet, consectetur.</li>
              <li className='ml-6'>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <div className='flex justify-center'>
              <button className='mt-8 rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'>
                Botão teste
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className='bg-[#F8F8F8] p-10'>
        <h3 className='text-synce text-center text-[35px] font-bold mb-10'>
          Principal Recursos
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
        <div className='flex space-x-6 mt-8'>
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
    </>
  )
}
