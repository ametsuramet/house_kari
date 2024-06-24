// import { useState } from 'react';
// import styles from '@/styles/SlideProduct.module.css';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const SlideProduct = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = [
//     {
//       id: 1,
//       images: [
//         '/images/slide_product_1.png',
//       ],
//       imagesSecond: [
//         '/images/slide_product_1_box.png',
//       ],
//     },
//     {
//       id: 2,
//       images: [
//         '/images/slide_product_2.png',
//       ],
//       imagesSecond: [
//         '/images/slide_product_2_box.png',
//       ],
//     },
//     {
//       id: 3,
//       images: [
//         '/images/slide_product_3.png',
//       ],
//       imagesSecond: [
//         '/images/slide_product_1_box.png',
//         '/images/slide_product_2_box.png',
//       ],
//     },
//   ];

//   const itemsPerView = 3;

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   return (
//     <div>
//       <div className={styles.slide}>
//         <div className={styles.slideWrapper} style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}>
//           {items.map((item, index) => {
//             // Calculate the middle index
//             const middleIndex = Math.floor(itemsPerView / 2);
//             // Calculate the relative index based on activeIndex and wrap around using modulo
//             const relativeIndex = (index - activeIndex + items.length) % items.length;
//             // Calculate if the item is active, left, or right
//             const isActive = relativeIndex === middleIndex;
//             const isLeft = relativeIndex === middleIndex - 1 || (activeIndex === 0 && index === items.length - 1);
//             const isRight = relativeIndex === middleIndex + 1 || (activeIndex === items.length - 1 && index === 0);

//             return (
//               <div
//                 key={item.id}
//                 className={`${styles.slideItemProduct} ${isActive ? styles.active : ''} ${isLeft ? styles.left : ''} ${isRight ? styles.right : ''}`}
//               >
//                 <div className={styles.imageContainer}>
//                   <img src={item.images[0]} alt={`House Kari Product ${item.id}`} />
//                 </div>
//                 <div className={styles.imageContainer}>
//                   {item.imagesSecond.map((image, idx) => (
//                     <div key={idx} className={styles.imageWrapper}>
//                       <img src={image} alt={`House Kari Product ${item.id} Box ${idx + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className={styles.navigation}>
//           <button onClick={prevSlide} className={styles.navButton}>
//             <FiChevronLeft />
//           </button>
//           <button onClick={nextSlide} className={styles.navButton}>
//             <FiChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideProduct;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import { Navigation } from 'swiper'; // Import Swiper Navigation

// const SlideProduct = () => {
//   const items = [
//     {
//       id: 1,
//       images: '/images/slide_product_1.png',
//       imagesSecond: ['/images/slide_product_1_box.png'],
//     },
//     {
//       id: 2,
//       images: '/images/slide_product_2.png',
//       imagesSecond: ['/images/slide_product_2_box.png'],
//     },
//     {
//       id: 3,
//       images: '/images/slide_product_3.png',
//       imagesSecond: ['/images/slide_product_1_box.png', '/images/slide_product_2_box.png'],
//     },
//     {
//       id: 4,
//       images: '/images/slide_product_1.png',
//       imagesSecond: ['/images/slide_product_1_box.png'],
//     },
//     {
//       id: 5,
//       images: '/images/slide_product_2.png',
//       imagesSecond: ['/images/slide_product_2_box.png'],
//     },
//     {
//       id: 6,
//       images: '/images/slide_product_3.png',
//       imagesSecond: ['/images/slide_product_1_box.png', '/images/slide_product_2_box.png'],
//     },
//   ];

//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       loop={true}
//       centeredSlides={true}
//       navigation={true} // Enable navigation
//       modules={[Navigation]}
//       className="mySwiper"
//     >
//       {items.map((item) => (
//         <SwiperSlide key={item.id}>
//           <div className='slideItemProduct'>
//             <div className='imageContainer'>
//               <img src={item.images} alt={`House Kari Product ${item.id}`} />
//             </div>
//             <div className='imageBoxContainer'>
//               {item.imagesSecond.map((image, idx) => (
//                 <img
//                   key={idx}
//                   src={image}
//                   alt={`House Kari Product ${item.id} Box ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SlideProduct;

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function SlideProduct() {
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
        slidesPerView={'auto'}
        spaceBetween={15}
        navigation={true}
        centeredSlides={true}
        initialSlide={1} // Setting the middle slide as the initial slide
        modules={[Navigation]}
        className="mySwiperProduct"
      >
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
                <Link href={item.linkProduct}><button>Lihat Resep</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

