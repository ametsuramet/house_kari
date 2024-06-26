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

export default function SlideRecipe({ items = [] }) {
  return (
    <>
    <h1 className='headingRecipeSlide'>Our Featured Recipes</h1>
      <Swiper 
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable:true
        }}
        modules={[Pagination]}
        className="mySwiperRecipe"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='slideItemRecipe'>
              <div className='imageRecipe'>
                <img src={item.images} alt='House Kari Testimonials' />
              </div>
              <div className='contentRecipe'>
                <h1>{item.recipeHeading}</h1>
                <p>{item.recipeDesc}</p>
                <Link href='/recipe/1'><button>Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

