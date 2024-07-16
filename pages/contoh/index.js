import { useState, useEffect } from "react";
import styles from "@/styles/Product.module.css";
import axios from "axios";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import Link from "next/link";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Contoh(){
  const { t, i18n } = useTranslation('common');
  const [activeTab, setActiveTab] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/recipe-categories');
        setCategories(response.data.data); // Set the first tab as active by default
        setActiveTab(response.data.data[0]?.id); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async (id) => {
      try {
        const response = await axios.get(`/api/recipeByCategories/${id}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch products initially for the first tab
    if (activeTab !== null) {
      fetchProducts(activeTab);
    }
  }, [activeTab]); // Fetch products whenever activeTab changes

  const getCategoryName = (category) => {
    switch (i18n.language) {
      case 'en':
        return category.name_en || category.name;
      case 'zh':
        return category.name_chi || category.name;
      default:
        return category.name;
    }
  };

  const getProductName = (product) => {
    switch (i18n.language) {
      case 'en':
        return product.name_en || product.name;
      case 'zh':
        return product.name_chi || product.name;
      default:
        return product.name;
    }
  };

  const handleSetActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className={styles.tabHeaders}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleSetActiveTab(category.id)}
            className={`${styles.tabHeader} ${activeTab === category.id ? styles.active : ''}`}
          >
            {getCategoryName(category)}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        <div className={styles.productLayout}>
        <h1 className='headingRecipeSlide'>{t('featuredRecipe')}</h1>
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
          {products
            .filter(product => product.category_id === activeTab)
            .map(product => (
                <SwiperSlide key={product.id}>
                    <div className='slideItemRecipe'>
                        <div className='imageRecipe'>
                            <img src={`https://prahwa.net/storage/${product.image}`} alt={product.name} />
                        </div>
                        <div className='contentRecipe'>
                            <h1>{getProductName(product)}</h1>
                            <span>{product.weight}g</span>
                            <Link href={`/product/${product.id}`}><button>{t('section1Home.learnMore')}</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
      </div>
    </>
  );
}
