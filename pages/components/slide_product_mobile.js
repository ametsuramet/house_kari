import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 

// import required modules
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function SlideProductMobile() {
  const { t } = useTranslation('common');

  const items = [
    {
      id: 1,
      images: '/images/slide_product_3.png',
      imagesSecond: ['/images/slide_product_1_box.png', '/images/slide_product_2_box.png'],
      headingProduct: t('menuHome1.menuHeading'),
      descProduct: t('menuHome1.menuDesc'),
      linkProduct: '#'
    },
    {
      id: 2,
      images: '/images/slide_product_1.png',
      imagesSecond: ['/images/slide_product_1_box.png'],
      headingProduct: t('menuHome2.menuHeading'),
      descProduct: t('menuHome2.menuDesc'),
      linkProduct: '#'
    },
    {
      id: 3,
      images: '/images/slide_product_2.png',
      imagesSecond: ['/images/slide_product_2_box.png'],
      headingProduct: t('menuHome3.menuHeading'),
      descProduct: t('menuHome3.menuDesc'),
      linkProduct: '#'
    }
  ];
  return (
    <>
      <Swiper 
        navigation={true} 
        loop={true}
        modules={[Navigation]} 
        className="slideProductMobile">
            {items.map((item) => (
            <SwiperSlide key={item.id}>
                <div className='slideItemProduct'>
                    <div className='imageContainer'>
                        <img src={item.images} alt={`House Kari Product ${item.id}`} />
                        <div className='imageBoxContainer'>
                        {item.imagesSecond.map((image, idx) => (
                            <img
                            key={idx}
                            src={image}
                            alt={`House Kari Product ${item.id} Box ${idx + 1}`}
                            />
                        ))}
                        </div>
                    </div>
                    <h1>{item.headingProduct}</h1>
                    <div className='contectProductContainer'>
                        <p>{item.descProduct}</p>
                        <Link href='/recipe/1'><button>{t('lihatResep')}</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
