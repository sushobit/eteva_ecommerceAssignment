import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; 

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2000, 
  };

  return (
    <div className="full-screen-carousel-wrapper">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="https://blog.myswimpro.com/wp-content/uploads/2022/11/myswimpro-app-swim-workout-of-the-day-1.png" alt="" />
        </div>
        <div className="carousel-item">
          <img src="https://imgeng.jagran.com/images/2023/may/best%20smartwatches%20for%20women1683877534798.jpg" alt="" />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg" alt="" />
        </div>
        <div className="carousel-item">
          <img src="https://www.reliancedigital.in/wp-content/uploads/2018/07/fitness-band-solutions.jpg" alt="" />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
