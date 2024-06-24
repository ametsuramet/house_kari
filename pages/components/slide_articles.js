import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function SlideArticles({ items, classNames, paginationClass }) {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
      setIsAtEnd(true);
    } else if (swiper.isBeginning) {
      setIsAtEnd(false);
    }

    if (swiper.isBeginning) {
      setIsAtStart(true);
    } else {
      setIsAtStart(false);
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={23}
        navigation={true}
        loop={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className={`swiperArticles ${paginationClass}`}
      >
        {items.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className='box_articles_slide'>
              <div className='box_articles_images'>
                <img src={blog.images} alt={blog.headingBlog} />
              </div>
              <div className='box_articles_content'>
                {blog.date && <span>{blog.date}</span>}
                <h1>{blog.headingBlog}</h1>
                <p>{blog.descBlog}</p>
                <Link href=''><button>Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`bg-red-overlay ${classNames}`}></div>
        <div className={`bg-red-overlay bg-red-overlay-left ${classNames}`}></div>
      </Swiper>
    </>
  );
}
