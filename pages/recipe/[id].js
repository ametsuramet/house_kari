import { useState, useEffect } from 'react';
import banner from '@/styles/Banner.module.css'
import Head from 'next/head';
import styles from '@/styles/Recipe.module.css'
import SlideArticles from '../components/slide_articles';
import Link from 'next/link';
import SlideArticlesMobile from '../components/slide_articles_mobile';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import axios from 'axios';
import { useRouter } from 'next/router';
import SlideArticlesSecond from '../components/slide_articles_second';
import SlideArticlesSecondMobile from '../components/slide_articles_second_mobile';

const API_RECIPE_DETAIL_URL = process.env.NEXT_PUBLIC_API_RECIPE_DETAIL_URL || 'http://localhost:3000/api/recipe-detail';

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(`${API_RECIPE_DETAIL_URL}/${id}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch product detail');
    }
    const recipe = await response.json();

    console.log('Product Detail API Response:', recipe); // Log the API response

    return {
      props: {
        ...(await serverSideTranslations(context.locale, ['common'])),
        recipe,
      },
    };
  } catch (error) {
    console.error('Fetch product error:', error);
    return {
      props: {
        ...(await serverSideTranslations(context.locale, ['common'])),
        recipe: null,
      },
    };
  }
}

const RecipeDetail = () => {
    const { t, i18n } = useTranslation('common');
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [detail, setDetail] = useState(null);

    const [recipeList, setRecipeList] = useState([]);
    const [articlesSlide, setArticlesSlide] = useState([]);

    useEffect(() => {
        const fetchArticlesSlide = async () => {
            try {
              const response = await axios.get(`/api/list-article/`);
              setArticlesSlide(response.data.data); // Perhatikan pengaturan data detail di sini
              setLoading(false);
              console.log('Fetched product:', response.data.data);
            } catch (error) {
              console.error('Error fetching product:', error);
              setLoading(false);
            }
        };
      
        fetchArticlesSlide();
      }, [id]);

    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('/api/all-recipes');
          const recipes = response.data.data;
  
          // Filter out recipes with the same ID as router.query.id
          const filteredRecipes = recipes.filter(recipe => recipe.id !== Number(id));
          
          setRecipeList(filteredRecipes);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      if (id) {
        fetchRecipes();
      }
    }, [id]);

    useEffect(() => {
      const fetchProduct = async () => {
        if (id) {
          try {
            const response = await axios.get(`${API_RECIPE_DETAIL_URL}/${id}`);
            setDetail(response.data.data); // Perhatikan pengaturan data detail di sini
            setLoading(false);
            console.log('Fetched product:', response.data.data);
          } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false);
          }
        }
      };
    
      fetchProduct();
    }, [id]);

    const togglePopup = () => {
        setIsActive(!isActive); 
    };

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

      if (router.isFallback || loading) {
        return <p>Loading...</p>;
      }
      
      if (!detail) {
        return <p>Product not found</p>;
      }

      const secondColor = 'creamColor'
      const paginationStyle = 'old_red_color'

      const getProductName = (detail) => {
        switch (i18n.language) {
          case 'en':
            return detail.title_en || detail.title;
          case 'zh':
            return detail.title_chi || detail.title;
          default:
            return detail.title;
        }
      };

      const getDescName = (detail) => {
        switch (i18n.language) {
          case 'en':
            return detail.description_en || detail.description;
          case 'zh':
            return detail.description_chi || detail.description;
          default:
            return detail.description;
        }
      };

      const getIngredients = (detail) => {
        switch (i18n.language) {
          case 'en':
            return detail.ingredients_en || detail.ingredients;
          case 'zh':
            return detail.ingredients_chi || detail.ingredients;
          default:
            return detail.ingredients;
        }
      };

      const renderIngredients = (ingredients) => {
        return { __html: ingredients }; // Memasukkan teks HTML ke dalam objek dengan __html
      };

      const getHowTo = (detail) => {
        switch (i18n.language) {
          case 'en':
            return detail.howToMake_en || detail.howToMake;
          case 'zh':
            return detail.howToMake_chi || detail.howToMake;
          default:
            return detail.howToMake;
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

      const renderhowToMake = (howToMake) => {
        return { __html: howToMake }; // Memasukkan teks HTML ke dalam objek dengan __html
      };

      const stripPTags = (html) => {
        if (typeof html === 'string') {
          return html.replace(/<p[^>]*>|<\/p>/g, '');
        } else {
          return html;
        }
      };

      // const pageTitle = `House Kari | ${t('menu.recipe')} A`;
      const pageTitle = detail ? `House Kari | ${stripPTags(getProductName(detail))}` : 'House Kari';

    return(
        <>
        <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
        </Head>
        <div className={banner.bannerStyle}>
            <img src="/images/recipe_banner.png" alt="House Kari Website"/>
        </div>
        <div className={banner.breadcrumbs}>
            <p>{t('menu.home')} / {t('menu.recipe')} / <span>{stripPTags(getProductName(detail))}</span></p>
        </div>
        <div className={styles.section4}>
            <div className={styles.section4_layout}>
                  <div className={styles.section4_image_layout}>
                    <div className={styles.section4_image}>
                        <img src={`https://prahwa.net/storage/${detail.image}`} alt={detail.name} />
                        <div className={styles.section4_overlay}></div>
                    </div>
                  </div>
                  <div className={styles.section4_content_layout}>
                    <div className={styles.section4_content}>
                        <div className={styles.recipeDetail}>
                            <h1>{stripPTags(getProductName(detail))}</h1>
                            <p>{stripPTags(getDescName(detail))}</p>
                        </div>
                        <div className={styles.recipeBahan}>
                            <h3 className={styles.headingRecipeDetail}>{t('bahan')}</h3>
                            <div dangerouslySetInnerHTML={renderIngredients(getIngredients(detail))}></div>
                        </div>
                        <div className={styles.recipeCara}>
                            <h3 className={styles.headingRecipeDetail}>{t('caraBuat')}</h3>
                            <div dangerouslySetInnerHTML={renderhowToMake(getHowTo(detail))}></div>
                        </div>
                    </div>
                    <button onClick={togglePopup} className={styles.btn_download}>{t('download')}</button>
                  </div>
            </div>
        </div>
        <div className={styles.section5}>
            <div className={styles.space_between_heading}>
            <h1 className={styles.heading_main_white}>{t('otherRecipe')}</h1>
            </div>
            <SlideArticles items={recipeList.map(recipe => ({
            ...recipe,
                title: stripPTags(getRecipeTitle(recipe)),
            }))} />
            <SlideArticlesMobile items={recipeList.map(recipe => ({
                ...recipe,
                title: stripPTags(getRecipeTitle(recipe)),
            }))} />
            <div className={styles.divider}></div>
        </div>
        <div className={styles.section3}>
          <img src="/images/recipe_icon_section3.png" className={styles.recipe_icon_section3} alt="House Kari"/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>{t('otherRecipeList')}</h1>
          </div>
          {/* <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} />
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} /> */}
          <SlideArticlesSecond classNames={secondColor} paginationClass={paginationStyle} items={articlesSlide.map(detail => ({
          ...detail,
              title: stripPTags(getProductName(detail)),
          }))} />
          <SlideArticlesSecondMobile classNames={secondColor} paginationClass={paginationStyle} items={articlesSlide.map(detail => ({
              ...detail,
              title: stripPTags(getProductName(detail)),
          }))} /> 
        </div>
        <div className={`${styles.popup} ${isActive ? styles.active : ''}`}>
            <div className={styles.popupContent}>
              {detail.coockbook_en && (
                <Link href={`https://prahwa.net/storage/${detail.coockbook_en}`} target='_blank'>
                  <button>Western Cookbook</button>
                </Link>
              )}
              {detail.coockbook_chi && (
                <Link href={`https://prahwa.net/storage/${detail.coockbook_chi}`} target='_blank'>
                  <button>Chinese Cookbook</button>
                </Link>
              )}
              {detail.coockbook && (
                <Link href={`https://prahwa.net/storage/${detail.coockbook}`} target='_blank'>
                  <button>Indonesian Cookbook</button>
                </Link>
              )}

                <span onClick={togglePopup} className={styles.closeButton}>X</span>
            </div>
        </div>
        </>
    );
}

export default RecipeDetail