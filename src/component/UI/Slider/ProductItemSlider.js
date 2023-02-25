import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import 'swiper/css';
import './slider.scss'

const ProductItemSlider = ({classname, name, url}) => {
    return (
        <div className={classname}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop
            >
                <SwiperSlide><img src={url} alt={name}/></SwiperSlide>
                <SwiperSlide><img src={url} alt={name}/></SwiperSlide>
                <SwiperSlide><img src={url} alt={name}/></SwiperSlide>
                <SwiperSlide><img src={url} alt={name}/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductItemSlider;