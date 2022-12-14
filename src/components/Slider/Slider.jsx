import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './slider.scss';
import 'swiper/css';
import { ButtonSlider } from './ButtonSlider/ButtonSlider';
import { Navigation } from 'swiper';

export const Slider = () => {
   const [swiper, setSwiper] = useState();
   const nextRef = useRef(null);
   const prevRef = useRef(null);

   return (
      <div className="slider">
         <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            spaceBetween={50}
            navigation={{
               nextEl: nextRef.current
            }}
         >
            <SwiperSlide
               className='slider__slide'
            >
               <img src="/img/icons/logo-slider.jpg" alt="adidas" className="slider__slide-logo" />
               <h2 className="slider__slide-title"><span>Stan Smith</span> Forever!</h2>
               <button className="slider__slide-btn">Купить</button>
            </SwiperSlide>
            <SwiperSlide
               className='slider__slide'
            >
               <img src="/img/icons/logo-slider.jpg" alt="adidas" className="slider__slide-logo" />
               <h2 className="slider__slide-title"><span>Stan Smith</span> Forever!</h2>
               <button className="slider__slide-btn">Купить</button>
            </SwiperSlide>
            <SwiperSlide
               className='slider__slide'
            >
               <img src="/img/icons/logo-slider.jpg" alt="adidas" className="slider__slide-logo" />
               <h2 className="slider__slide-title"><span>Stan Smith</span> Forever!</h2>
               <button className="slider__slide-btn">Купить</button>
            </SwiperSlide>
         </Swiper>
         <ButtonSlider 
            className='prev'
            onClick={() => swiper.slidePrev()}
            ref={prevRef} 
            src={'/img/icons/prev.svg'} />
         <ButtonSlider 
            className='next'
            onClick={() => swiper.slideNext()}
            ref={nextRef} 
            src={'/img/icons/next.svg'} />
      </div>
   )
}
