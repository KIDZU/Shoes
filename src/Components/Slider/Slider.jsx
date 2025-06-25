import React from 'react';
import { Carousel } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import style from './Slider.module.css';


const images = [
  'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600180758890-6e4f7d48b1e7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
];

const arrowLeftClass = [style['sliderArrow'],style.left].join(" ")
const arrowRightClass = [style['sliderArrow'],style.right].join(" ")

export const Slider = () => {
  let carouselRef = null;

  return (
    <div className={style.sliderContainer}>
      <LeftOutlined
        className={arrowLeftClass}
        onClick={() => carouselRef?.prev()}
      />
      <Carousel
        dots
        autoplay
        ref={(ref) => (carouselRef = ref)}
        className={style.carousel}
      >
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className={style.slideImage} />
          </div>
        ))}
      </Carousel>
      <RightOutlined
        className={arrowRightClass}
        onClick={() => carouselRef?.next()}
      />
    </div>
  );
};
