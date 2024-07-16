import Head from "next/head";
import styles from '@/styles/Recipe.module.css'
import banner from '@/styles/Banner.module.css'
import { useState, useEffect, useRef } from "react";
import SlideRecipe from "../components/slide_recipe";
import SlideArticles from "../components/slide_articles";
import SlideArticlesMobile from "../components/slide_articles_mobile";
import { IoChevronDown } from "react-icons/io5";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import axios from "axios";
import Link from "next/link";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

export default function Recipe() {
  const { t, i18n } = useTranslation('common');

  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Bread & Pastry');

  const menuItems = [
    'Bread & Pastry',
    'Vegetables',
    'Meat',
    'Seafood',
    'Snacks'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const recipeList = [
  //   {
  //     id: 1,
  //     images: '/images/recipe_image.png',
  //     headingBlog: 'Recipe Name',
  //     descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
  //   },
  //   {
  //     id: 2,
  //     images: '/images/recipe_image.png',
  //     headingBlog: 'Recipe Name',
  //     descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
  //   },
  //   {
  //     id: 3,
  //     images: '/images/recipe_image.png',
  //     headingBlog: 'Recipe Name',
  //     descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
  //   },
  //   {
  //     id: 4,
  //     images: '/images/recipe_image.png',
  //     headingBlog: 'Recipe Name',
  //     descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
  //   },
  //   {
  //     id: 5,
  //     images: '/images/recipe_image.png',
  //     headingBlog: 'Recipe Name',
  //     descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
  //   },
  // ]

  const slideBlog = [
    {
      id: 1,
      images: '/images/blog_recent_1.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 2,
      images: '/images/blog_recent_2.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 3,
      images: '/images/blog_recent_1.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 4,
      images: '/images/blog_recent_2.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 5,
      images: '/images/blog_recent_1.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 6,
      images: '/images/blog_recent_2.png',
      date: `${t('posted')} 10/10/2024`,
      headingBlog:  t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
        id: 7,
        images: '/images/blog_recent_1.png',
        date: `${t('posted')} 10/10/2024`,
        headingBlog:  t('headline'),
        descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
      },
  ];

  const secondColor = 'creamColor'
  const paginationStyle = 'old_red_color'
  const pageTitle = `House Kari | ${t('menu.recipe')}`;

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
  }, [activeTab]);

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
        return product.title_en || product.title;
      case 'zh':
        return product.title_chi || product.title;
      default:
        return product.title;
    }
  };

  const getDescriptionName = (product) => {
    switch (i18n.language) {
      case 'en':
        return product.description_en || product.description;
      case 'zh':
        return product.description_chi || product.description;
      default:
        return product.description;
    }
  };

  const handleSetActiveTab = (id) => {
    setActiveTab(id);
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const stripPTags = (html) => {
    return html.replace(/<p[^>]*>|<\/p>/g, '');
};

const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('/api/all-recipes');
                setRecipeList(response.data.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const getRecipeTitle = (recipe) => {
      switch (i18n.language) {
          case 'en':
              return recipe.title_en || recipe.title;
          case 'zh':
              return recipe.title_chi || recipe.title;
          default:
              return recipe.title;
      }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/recipe_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>{t('menu.home')} / <span>{t('menu.recipe')}</span></p>
      </div>
      <div className={styles.section1}>
        <img src="/images/sendok_recipe_slide.png" alt="House Kari" className={styles.sendok_recipe_slide}/>
        <div className={styles.tabContainer}>
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
                            <h1 dangerouslySetInnerHTML={{ __html: stripPTags(getProductName(product)) }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: getDescriptionName(product) }}></p>
                            <Link href={`/product/${product.id}`}><button>{t('section1Home.learnMore')}</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <img src="/images/section_2_recipe_icon.png" alt="House Kari" className={styles.section_2_recipe_icon}/>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>{t('otherRecipe')}</h1>
        </div>
        <SlideArticles items={recipeList.map(recipe => ({
            ...recipe,
            title: stripPTags(getRecipeTitle(recipe)),
        }))} />
        <SlideArticlesMobile items={recipeList}/>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section3}>
          <img src="/images/recipe_icon_section3.png" className={styles.recipe_icon_section3} alt="House Kari"/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>{t('otherRecipeList')}</h1>
          </div>
          <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={slideBlog}/>
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} />
      </div>
    </>
  );
}
