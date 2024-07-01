import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function SlideProductMobile() {
    const items = [
        {
          id: 1,
          images: '/images/slide_product_3.png',
          imagesSecond: ['/images/slide_product_1_box.png', '/images/slide_product_2_box.png'],
          headingProduct: 'Ketupat Sayur Kari',
          descProduct: 'Sajian lezat ini dibuat dengan cara mengungkep daging lalu memasaknya bersama bumbu serundeng dan kelapa parut. Proses memasaknya yang cukup lama membuat cita rasanya makin gurih dan sedap.',
          linkProduct: '#'
        },
        {
          id: 2,
          images: '/images/slide_product_1.png',
          imagesSecond: ['/images/slide_product_1_box.png'],
          headingProduct: 'Daging Serundeng Kari',
          descProduct: 'Sajian lezat ini dibuat dengan cara mengungkep daging lalu memasaknya bersama bumbu serundeng dan kelapa parut. Proses memasaknya yang cukup lama membuat cita rasanya makin gurih dan sedap.',
          linkProduct: '#'
        },
        {
          id: 3,
          images: '/images/slide_product_2.png',
          imagesSecond: ['/images/slide_product_2_box.png'],
          headingProduct: 'Ayam Gulai Kari',
          descProduct: 'Sajian lezat ini dibuat dengan cara mengungkep daging lalu memasaknya bersama bumbu serundeng dan kelapa parut. Proses memasaknya yang cukup lama membuat cita rasanya makin gurih dan sedap.',
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
                        <Link href='/recipe/1'><button>Lihat Resep</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
