import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function SlideArticlesMobile({ items = [], classNames, paginationClass }) {
  const { t } = useTranslation('common');

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
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className={`swiperArticlesMobile ${paginationClass}`}
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
                <Link href=''><button>{t('section1Home.learnMore')}</button></Link>
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
