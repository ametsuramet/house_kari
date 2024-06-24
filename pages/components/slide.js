import { useState } from 'react';
import styles from '@/styles/Slide.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineSearch } from "react-icons/ai";

const Slide = ({ items = [], showNavigation = true, showPagination = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.slide}>
      <div className={styles.slideWrapper} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.slideItem}`}>
            {item}
          </div>
        ))}
      </div>
      {showNavigation && (
        <div className={styles.navigation}>
          <button onClick={prevSlide} className={styles.navButton}>
            <FiChevronLeft />
          </button>
          <button onClick={nextSlide} className={styles.navButton}>
            <FiChevronRight />
          </button>
        </div>
      )}
      {showPagination && (
        <div className={styles.pagination}>
          {items.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`${styles.paginationButton} ${index === activeIndex ? styles.active : ''}`}>
              
            </button>
          ))}
        </div>
      )}
      <div className={styles.product_banner}>
        <div className={styles.product_banner_image}>
            <img src='/images/product_banner.png' alt='House Kari Product'/>
            <div className={styles.product_banner_image_overlay}></div>
        </div>
        <div className={styles.product_banner_overlay}>
            <AiOutlineSearch />
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Slide;
