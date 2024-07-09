import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { MdOutlineStar } from "react-icons/md";


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

export default function SlideTestimonials() {
  const { t } = useTranslation('common');

  const items = [
    {
      id: 1,
      images: '/images/images_testimonials.png',
      descTestimonials: t('menuHome3.menuDesc'),
      dateTestimonials: '10/10/2024',
      userTestimonials: 'John Doe'
    },
    {
        id: 2,
        images: '/images/images_testimonials.png',
        descTestimonials: t('menuHome3.menuDesc'),
        dateTestimonials: '10/10/2024',
        userTestimonials: 'John Doe'
    },
    {
        id: 3,
        images: '/images/images_testimonials.png',
        descTestimonials: t('menuHome3.menuDesc'),
        dateTestimonials: '10/10/2024',
        userTestimonials: 'John Doe'
    },
    {
      id: 4,
      images: '/images/images_testimonials.png',
      descTestimonials: t('menuHome3.menuDesc'),
      dateTestimonials: '10/10/2024',
      userTestimonials: 'John Doe'
    },
    {
      id: 5,
      images: '/images/images_testimonials.png',
      descTestimonials: t('menuHome3.menuDesc'),
      dateTestimonials: '10/10/2024',
      userTestimonials: 'John Doe'
    },
  ];

  return (
    <>
      <Swiper 
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable:true
        }}
        modules={[Pagination]}
        className="mySwiperTestimonials"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='slideItemTestimonials'>
              <div className='imageTestimonials'>
                <img src={item.images} alt='House Kari Testimonials' />
              </div>
              <div className='contentTestimonials'>
                <div className='divider'></div>
                <div className='ratingTestimonials'>
                    <img src='/images/star_rating.png' alt='House Kari Rating' />
                    <img src='/images/star_rating.png' alt='House Kari Rating' />
                    <img src='/images/star_rating.png' alt='House Kari Rating' />
                    <img src='/images/star_rating.png' alt='House Kari Rating' />
                    <img src='/images/star_rating.png' alt='House Kari Rating' />
                </div>
                <p>{item.descTestimonials}</p>
                <div className='dateTestimonials'>
                    <span>{item.dateTestimonials} - {t('by')} {item.userTestimonials}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

