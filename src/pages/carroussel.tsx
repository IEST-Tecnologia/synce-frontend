'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import LogoAliexpress from '../../public/images/logo-aliexpress.png'
import LogoKawai from '../../public/images/logo-kawai.png'
import LogoMl from '../../public/images/logo-ml.png'
import LogoShoppe from '../../public/images/logo-shoppe.png'

const Carroussel = () => {
  return (
    <section className='py-8 bg-[#F8F8F8]'>
      <h2 className='text-synce text-center text-[35px] font-bold mb-10'>
        Integração com os melhores Marketplaces e ERPs
      </h2>
      <div className='px-16'>
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          navigation={true}
          modules={[Navigation]}
          pagination={{
            clickable: true,
            enabled: true,
          }}
          className='!px-12'
        >
          <SwiperSlide className='flex justify-center items-center'>
            <Image src={LogoAliexpress} alt='Logo Aliexpress' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoKawai} alt='Logo Kawai' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoMl} alt='Logo Mercado Livre' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoShoppe} alt='Logo Shoppe' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoAliexpress} alt='Logo Aliexpress' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoKawai} alt='Logo Kawai' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoMl} alt='Logo Mercado Livre' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LogoShoppe} alt='Logo Shoppe' />
          </SwiperSlide>
          <div className='swiper-pagination'></div>
          <div className='text-[#666] text-xs swiper-button-next'></div>
          <div className='text-[#666] text-xs swiper-button-prev'></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Carroussel
