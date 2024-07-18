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
  const { t, i18n } = useTranslation('common');

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

  const getRecipeTitle = (blog) => {
    switch (i18n.language) {
        case 'en':
            return blog.title_en || blog.title;
        case 'zh':
            return blog.title_chi || blog.title;
        default:
            return blog.title;
    }
  };

  const getDescriptionName = (blog) => {
    switch (i18n.language) {
      case 'en':
        return blog.description_en || blog.description;
      case 'zh':
        return blog.description_chi || blog.description;
      default:
        return blog.description;
    }
  };

  const stripPTags = (html) => {
    if (!html) return ''; // Check if html is undefined or null
  
    return html.replace(/<p[^>]*>|<\/p>/g, '');
  };

  return (
    <> 
    {items.length > 0 && (
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
                <img src={`https://prahwa.net/storage/${blog.image}`} alt={blog.name} />
              </div>
              <div className='box_articles_content'>
                {blog.date && <span>{blog.date}</span>}
                <h1 dangerouslySetInnerHTML={{ __html: stripPTags(getRecipeTitle(blog))  }}></h1>
                <p dangerouslySetInnerHTML={{ __html: stripPTags(getDescriptionName(blog)) }}></p>
                <Link href=''><button>{t('section1Home.learnMore')}</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`bg-red-overlay ${classNames}`}></div>
        <div className={`bg-red-overlay bg-red-overlay-left ${classNames}`}></div>
      </Swiper>
    )}
    </>
  );
}
