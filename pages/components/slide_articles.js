import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function SlideArticles() {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const slideBlog = [
    {
      id: 1,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 2,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 3,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 4,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 5,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 6,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
        id: 7,
        images: '/images/blog_recent_1.png',
        date: '10/10/2024',
        headingBlog: 'Headline',
        descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
      },
  ];

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
        className="swiperArticles"
      >
        {slideBlog.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className='box_articles_slide'>
              <div className='box_articles_images'>
                <img src={blog.images} alt={blog.headingBlog} />
              </div>
              <div className='box_articles_content'>
                <span>Posted {blog.date}</span>
                <h1>{blog.headingBlog}</h1>
                <p>{blog.descBlog}</p>
                <Link href='#'><button>Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='bg-red-overlay'></div>
        <div className='bg-red-overlay bg-red-overlay-left'></div>
      </Swiper>
    </>
  );
}
