import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function SlideArticles({ items = [], classNames, paginationClass }) {
  const { t, i18n } = useTranslation('common');

  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  const handleSlideChange = (swiper) => {
    setIsAtEnd(swiper.isEnd);
    setIsAtStart(swiper.isBeginning);
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
    if (!html) return '';
    return html.replace(/<p[^>]*>|<\/p>/g, '');
  };

  return (
    <>
      {loading ? (
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
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='box_articles_slide'>
                <div className='box_articles_images'>
                  <Skeleton height={200} />
                </div>
                <div className='box_articles_content'>
                  <Skeleton width='50%' />
                  <Skeleton count={2} />
                  <Skeleton width='30%' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
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
                  <Link href={`/recipe/[id]`} as={`/recipe/${blog.id}`}>
                    <img src={`https://prahwa.net/storage/${blog.image}`} alt={blog.title} />
                  </Link>
                </div>
                <div className='box_articles_content'>
                  {blog.date && <span>{blog.date}</span>}
                  <h1 dangerouslySetInnerHTML={{ __html: stripPTags(getRecipeTitle(blog)) }}></h1>
                  <p dangerouslySetInnerHTML={{ __html: stripPTags(getDescriptionName(blog)) }}></p>
                  <Link href={`/recipe/[id]`} as={`/recipe/${blog.id}`}>
                    <button>{t('section1Home.learnMore')}</button>
                  </Link>
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
