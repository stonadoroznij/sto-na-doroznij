'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { ServiceCard } from '..'
import { Service } from '@/types'
import { z } from 'zod'
interface PropsType {
  services: Service[]
}

const Slider = ({ services }: PropsType) => {
  return (
    <div className="">
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fcea10',
            '--swiper-pagination-color': '#fcea10',
            '--swiper-navigation-sides-offset': 'calc(50% - 8rem)',
            '--swiper-navigation-top-offset': '96.5%',
            '--swiper-navigation-size': '1.5rem',
            padding: '1rem 1rem 3rem 1rem',
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-6"
      >
        {services.map((service) => {
          return (
            <SwiperSlide key={service.id} style={
              {
                height: 'auto'
              }
            }>
              <div className="h-full flex justify-center">
                 <ServiceCard service={service}/> 
              </div>
            </SwiperSlide>
          )
        })}
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </Swiper>
    </div>
  )
}

export default Slider
