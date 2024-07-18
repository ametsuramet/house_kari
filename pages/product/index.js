import Head from "next/head";
import styles from '@/styles/Product.module.css'
import banner from '@/styles/Banner.module.css'
import JapaneseProduct from "../components/japaneseProduct";
import Tabs from "../components/tab";
import Link from "next/link";
import SlideArticles from "../components/slide_articles";
import SlideArticlesMobile from "../components/slide_articles_mobile";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import { useState, useEffect } from "react";
import axios from "axios";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Product() {
  const { t, i18n } = useTranslation('common');

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/product-categories');
        setCategories(response.data.data);
        setActiveTab(response.data.data[0]?.id); // Set the first tab as active by default
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/product');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const pageTitle = `House Kari | ${t('menu.product')}`;

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
        <img src="/images/product_page_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>{t('menu.home')} / <span>{t('menu.product')}</span></p> 
      </div>
      <div className={styles.section1}>
        <img src="/images/tab_icon_image.png" alt="House Kari" className={styles.tab_icon_image}/>
        <img src="/images/tab_icon_image2.png" alt="House Kari" className={styles.tab_icon_image2}/>
        <div className={styles.tabs}>
          <div className={styles.tabHeadersLayout}>
            <div className={styles.tabHeaders}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`${styles.tabHeader} ${activeTab === category.id ? styles.active : ''}`}
                >
                  {getCategoryName(category)}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.tabContent}>
            <div className={styles.productLayoutBox}>
              <div className={styles.productLayout}>
                {products
                .filter(product => product.category_id === activeTab)
                .map(product => (
                  <div key={product.id} className={styles.boxProduct}>
                    <div className={styles.imageProduct}>
                        <img src={`https://prahwa.net/storage/${product.image}`} alt={product.name} />
                    </div>
                    <div className={styles.contentProduct}>
                        <h1>{getProductName(product)}</h1>
                        <span>{product.weight}g</span>
                        <Link href={`/product/[id]`} as={`/product/${product.id}`}><button>{t('section1Home.learnMore')}</button></Link>
                    </div> 
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>{t('headingRecipe')}</h1>
        </div>
        <SlideArticles items={recipeList.map(recipe => ({
            ...recipe,
            title: stripPTags(getRecipeTitle(recipe)),
        }))} />
        <SlideArticlesMobile items={recipeList} />
        <div className={styles.divider}></div>
      </div> 
    </>
  ); 
}
