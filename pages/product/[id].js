import Head from "next/head";
import styles from '@/styles/Product.module.css';
import banner from '@/styles/Banner.module.css';
import Link from "next/link";
import SlideArticles from "../components/slide_articles";
import SlideArticlesMobile from "../components/slide_articles_mobile";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export async function getStaticPaths() {
  
  try {
    const response = await fetch(`/api/product`);
    const data = await response.json();

    const products = data.data || data;

    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    const locales = ['id', 'en', 'zh'];
    const allPaths = paths.flatMap((path) =>
      locales.map((locale) => ({ ...path, locale }))
    );

    return { paths: allPaths, fallback: false };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params, locale }) {
  
  try {
    const response = await fetch(`/api/product-detail/${params.id}`);
    const data = await response.json();
    const product = data.data;

    return {
      props: {
        product,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Error fetching product details:', error);
    return {
      notFound: true,
    };
  }
}

const ProductDetails = ({ product }) => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    if (product) {
      setLoading(false);
    } else {
      setError('Product not found');
    }
  }, [product]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const ecommerces = [
    { id: 1, nameEcommerce: 'shopee', imageEcommerce: '/images/shopee_logo.png' },
    { id: 2, nameEcommerce: 'tokopedia', imageEcommerce: '/images/tokopedia_logo.png' },
    { id: 3, nameEcommerce: 'blibli', imageEcommerce: '/images/blibli_logo.png' },
    { id: 4, nameEcommerce: 'sayurbox', imageEcommerce: '/images/sayurbox_logo.png' },
  ];

  const productItems = [
    { id: 1, imageProduct: '/images/slide_product_1_box.png', headingProduct: 'Original Japanese Curry', weight: '935g' },
    { id: 2, imageProduct: '/images/slide_product_2_box.png', headingProduct: 'Spicy Japanese Curry', weight: '935g' },
    { id: 3, imageProduct: '/images/slide_product_2_box.png', headingProduct: 'Spicy Japanese Curry', weight: '935g' },
  ];

  const secondColor = 'creamColor';
  const paginationStyle = 'old_red_color';

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

  const getProductDesc = (product) => {
    switch (i18n.language) {
      case 'en':
        return product.description_en || product.description;
      case 'zh':
        return product.description_chi || product.description;
      default:
        return product.description;
    }
  };

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

  const stripPTags = (html) => {
    if (typeof html === 'string') {
      return html.replace(/<p[^>]*>|<\/p>/g, '');
    } else {
      return html;
    }
  };

  const removeQuotes = (str) => {
    return str.replace(/['"]/g, '');
  };

  const pageTitle = product ? `House Kari | ${getProductName(product)}` : 'House Kari';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/product_page_banner.png" alt="House Kari Website" />
      </div>
      <div className={banner.breadcrumbs}>
        <p>{t('menu.home')} / {t('menu.product')} / <span>{getProductName(product)}</span></p>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3_layout}>
          <div className={styles.section3_box}>
            <img src="/images/btn_hover.png" alt="House Kari" className={styles.btn_hover} />
            <div className={styles.section3_image}>
              <img src={`https://prahwa.net/storage/${product.image}`} alt={product.name} />
            </div>
            <div className={styles.section3_content}>
              <h1>{getProductName(product)} {product.weight}g</h1>
              <div className={styles.section3_content_desc}>
                <p dangerouslySetInnerHTML={{ __html: getProductDesc(product) }}></p>
              </div>
              <div className={styles.section3_ecommerce}>
                <h2>{t('beliSekarang')}</h2>
                <div className={styles.section3_ecommerce_layout}>
                  {ecommerces.map((ecommerce) => (
                    <Link href="#" key={ecommerce.id}><button className={styles[ecommerce.nameEcommerce]}><img src={ecommerce.imageEcommerce} alt="House Kari" /></button></Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.section4_heading}>
          <h1>{t('otherProduct')}</h1>
        </div>
        <div className={styles.productLayout}>
          {productItems.map((product, index) => (
            <div className={`${styles.boxProduct} ${styles.boxProductWhite}`} key={index}>
              <div className={styles.imageProduct}>
                <img src={product.imageProduct} alt={product.headingProduct} />
              </div>
              <div className={styles.contentProduct}>
                <h1>{product.headingProduct}</h1>
                <span>{product.weight}</span>
                <Link href={`/product/${product.id}`}><button>{t('section1Home.learnMore')}</button></Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section5}>
        <img src="/images/product_detail_icon.png" className={styles.product_detail_icon} alt="House Kari" />
        <img src="/images/product_detail_icon_2.png" className={styles.product_detail_icon_2} alt="House Kari" />
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_red}>{t('headingRecipe')}</h1>
        </div>
        <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList.map(recipe => ({
          ...recipe,
          title: stripPTags(getRecipeTitle(recipe)),
        }))} />
        <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={recipeList.map(recipe => ({
          ...recipe,
          title: stripPTags(getRecipeTitle(recipe)),
        }))} />
      </div>
    </>
  );
}

export default ProductDetails;
