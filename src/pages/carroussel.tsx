'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import LogoAliexpress from '../../public/images/logo-aliexpress.png'
import LogoKawai from '../../public/images/logo-kawai.png'
import LogoMl from '../../public/images/logo-ml.png'
import LogoShoppe from '../../public/images/logo-shoppe.png'
import { motion } from 'framer-motion'

const Carroussel = () => {
  return (
    <section className='py-8 bg-[#F8F8F8]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          whileHover={{ y: -5 }}
          transition={{ duration: 0.1 }}
          className='text-synce-primary text-center text-2xl lg:text-[35px] font-bold mb-10'
        >
          Integração com os melhores Marketplaces e ERPs
        </motion.h2>
      </motion.div>
      <div className='px-2 lg:px-16'>
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className='!px-12'
        >
          <SwiperSlide className='flex justify-center items-center'>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoShoppe} alt='Logo Shoppe' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoKawai} alt='Logo Kawai' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoMl} alt='Logo Mercado Livre' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoAliexpress} alt='Logo Aliexpress' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoShoppe} alt='Logo Shoppe' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoKawai} alt='Logo Kawai' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoMl} alt='Logo Mercado Livre' />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src={LogoAliexpress} alt='Logo Aliexpress' />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Carroussel
