import {useEffect, useState} from 'react'
import Button from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack} from "react-icons/io";
import { Navigation , A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Blog = () => {
    const [windowsWidth, setWindowsWidth] = useState(0);
    useEffect(() => {
      const width = window.innerWidth;
      setWindowsWidth(width);
    }, [])


  return (
    <section className='w-full min-h-screen md:min-h-fit lg:min-h-screen w-full flex justify-center bg-white px-6 lg:px-24 py-12'>
        <div className='w-full md:h-[500px] max-w-[1400px] flex flex-col md:flex-row md:items-center md:gap-16'>
            <div className='w-full md:max-w-[300px] h-fit md:h-full flex flex-col justify-between'>
                <div>
                    <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] '>Latest Blog & Resources</h2>
                    <p className='font-normal text-[18px] text-black/80 leading-[1.5] mt-3'>Your Go-To Guide for Pay4Me App: Answers to All Your Questions!</p>
                    <Button text='View All' containerClass='mt-5' />
                </div>

                <div className='flex items-center gap-3 mt-7 md:mt-0 md:mb-14'>
                    <button className='sliderButtonPrev group p-1 hover:bg-primarygreen rounded-full border border-primarygreen'><IoIosArrowRoundBack  className='text-primarygreen group-hover:text-black text-3xl' /></button>
                    <button className='sliderButtonNext group p-1 hover:bg-primarygreen rounded-full border border-primarygreen'><IoIosArrowRoundForward className='text-primarygreen group-hover:text-black text-3xl' /></button>
                </div>
            </div>
            <Swiper
            className='w-full md:w-[65%] md:h-full flex flex items-center justify-center mt-5 md:mt-0'
            modules={[Navigation, A11y]}
            loop
            autoPlay
            resistance
            grabCursor
            keyboard
            mousewheel
            spaceBetween={30}
            slidesPerView={ windowsWidth > 900 ? 2 : 1}
            navigation={{nextEl: '.sliderButtonNext', prevEl: '.sliderButtonPrev'}}
            >
                    <SwiperSlide className='w-full'>
                        <div className='w-full md:max-w-[380px]'>
                            <img src='/images/blog-1.png' className='w-full md:w-fit'/>
                            <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                            <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                            <Button onClick={() => swiper.slideNext()} text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className='w-full'>
                        <div className='w-full md:max-w-[380px]'>
                            <img src='/images/blog-2.png' className='w-full md:w-fit'/>
                            <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                            <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                            <Button onClick={() => swiper.slideNext()} text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className='w-full'>
                        <div className='w-full md:max-w-[380px]'>
                            <img src='/images/blog-1.png' className='w-full md:w-fit'/>
                            <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                            <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                            <Button onClick={() => swiper.slideNext()} text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className='w-full'>
                        <div className='w-full md:max-w-[380px]'>
                            <img src='/images/blog-2.png' className='w-full md:w-fit'/>
                            <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                            <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3 max-w-full md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                            <Button onClick={() => swiper.slideNext()} text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    </section >
  )
}

export default Blog