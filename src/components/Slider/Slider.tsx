'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { ServiceCard } from '..';
import { useSwiper } from 'swiper/react';

const Slider = () => {
  const swiper = useSwiper();
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="flex flex-wrap w-100% mt-6 pt-12"
      >
        <SwiperSlide className=''><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide><ServiceCard/></SwiperSlide>
        <SwiperSlide className='mb-10'><ServiceCard/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
