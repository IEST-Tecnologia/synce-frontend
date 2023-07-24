import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
      <div className='p-6 text-neutral-600 relative h-[200px] overflow-hidden'>
        <Image
          alt='logo'
          src='/logo.svg'
          width={180}
          height={208}
          className='absolute -top-4 -left-5 -z-10'
        />
        <Image
          width={333}
          height={200}
          alt='banner_1'
          src='/banner_home_vermelho 2.png'
          className='absolute -right-[87px] -z-10 top-0'
        />
        <div className='w-1/2'>
          <h1 className='text-xl mb-2'>Título 1</h1>
          <p className='text-[10px] mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Botao</Button>
        </div>
      </div>
      <div className='h-[103px] bg-stone-50'>Carousel</div>
      <div className='relative w-full'>
        <Image
          className='absolute scale-[1.15] top-2 -z-10'
          src='/banner_home_2_vermelho 1.png'
          alt='banner_2'
          layout='responsive'
          width={414}
          height={220}
        />
        <div className=' pr-[50px] pt-[38px] text-white w-1/2 float-right space-y-4'>
          <p>O integrador mais completo para gerenciar a sua operação.</p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Button>botao</Button>
        </div>
      </div>
    </div>
  )
}
