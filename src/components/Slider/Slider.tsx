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

const Slider = () => {
  return (
    <div className="">
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fcea10',
            '--swiper-pagination-color': '#fcea10',
            '--swiper-navigation-sides-offset': 'calc(50% - 8rem)',
            '--swiper-navigation-top-offset': '96%',
            '--swiper-navigation-size': '1.5rem',
            paddingBottom: '3rem',
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-6"
      >
        {Array.from({ length: 12 }, (_, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex justify-center">
                {/* <ServiceCard /> */}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
