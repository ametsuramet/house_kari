import { useState } from 'react';
import banner from '@/styles/Banner.module.css'
import Head from 'next/head';
import styles from '@/styles/Recipe.module.css'
import SlideArticles from '../components/slide_articles';
import Link from 'next/link';
import SlideArticlesMobile from '../components/slide_articles_mobile';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 

const recipes = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    // Tambahkan produk lainnya
  ];

export async function getStaticPaths() {
    // Buat jalur berdasarkan produk yang tersedia
    const paths = recipes.map((recipe) => ({
      params: { id: recipe.id },
      locale: 'id', // Mengatur default bahasa ke Indonesia
    }));
  
    // Jika menggunakan beberapa bahasa, tambahkan jalur untuk setiap bahasa
    const locales = ['id', 'en', 'zh'];
    const allPaths = paths.flatMap((path) =>
      locales.map((locale) => ({ ...path, locale }))
    );
  
    return { paths: allPaths, fallback: false };
  }
  
  export async function getStaticProps({ params, locale }) {
    // Ambil data produk berdasarkan ID
    const recipe = recipes.find((p) => p.id === params.id);
  
    return {
      props: {
        recipe,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }

const RecipeDetail = () => {
    const { t } = useTranslation('common');

    const [isActive, setIsActive] = useState(false);

    const togglePopup = () => {
        setIsActive(!isActive); 
    };

    const recipeList = [
        { 
          id: 1,
          images: '/images/recipe_image.png',
          headingBlog: 'Recipe Name',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 2,
          images: '/images/recipe_image.png',
          headingBlog: 'Recipe Name',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 3,
          images: '/images/recipe_image.png',
          headingBlog: 'Recipe Name',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 4,
          images: '/images/recipe_image.png',
          headingBlog: 'Recipe Name',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 5,
          images: '/images/recipe_image.png',
          headingBlog: 'Recipe Name',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
      ]

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

      const pageTitle = `House Kari | ${t('menu.recipe')} A`;

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
            <p>{t('menu.home')} / {t('menu.recipe')} / <span>{t('kariKroket')}</span></p>
        </div>
        <div className={styles.section4}>
            <div className={styles.section4_layout}>
                  <div className={styles.section4_image_layout}>
                    <div className={styles.section4_image}>
                        <img src='/images/recipe_detail.png' alt='House Kari'/>
                        <div className={styles.section4_overlay}></div>
                    </div>
                  </div>
                  <div className={styles.section4_content_layout}>
                    <div className={styles.section4_content}>
                        <div className={styles.recipeDetail}>
                            <h1>{t('kariKroket')}</h1>
                            <p>{t('resepDetailDesc')}</p>
                        </div>
                        <div className={styles.recipeBahan}>
                            <h3 className={styles.headingRecipeDetail}>{t('bahan')}</h3>
                            <ul>
                                <li>{t('listBahan1')}</li>
                                <li>{t('listBahan2')}</li>
                                <li>{t('listBahan3')}</li>
                                <li>{t('listBahan4')}</li>
                                <li>{t('listBahan5')}</li>
                                <li>{t('listBahan6')}</li>
                                <li>{t('listBahan7')}</li>
                                <li>{t('listBahan8')}</li>
                                <li>{t('listBahan9')}</li>
                                <li>{t('listBahan10')}</li>
                                <li>{t('listBahan11')}</li>
                                <li>{t('listBahan12')}</li>
                                <li>{t('listBahan13')}</li>
                                <li>{t('listBahan14')}</li>
                                <li>{t('listBahan15')}</li>
                            </ul>
                        </div>
                        <div className={styles.recipeCara}>
                            <h3 className={styles.headingRecipeDetail}>{t('caraBuat')}</h3>
                            <ul>
                                <li>{t('listCaraBuat1')}</li>
                                <li>{t('listCaraBuat2')}</li>
                                <li>{t('listCaraBuat3')}</li>
                                <li>{t('listCaraBuat4')}</li>
                                <li>{t('listCaraBuat5')}</li>
                                <li>{t('listCaraBuat6')}</li>
                                <li>{t('listCaraBuat7')}</li>
                                <li>{t('listCaraBuat8')}</li>
                                <li>{t('listCaraBuat9')}</li>
                                <li>{t('listCaraBuat10')}</li>
                            </ul>
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
            <SlideArticles items={recipeList} />
            <SlideArticlesMobile items={recipeList} />
            <div className={styles.divider}></div>
        </div>
        <div className={styles.section3}>
          <img src="/images/recipe_icon_section3.png" className={styles.recipe_icon_section3} alt="House Kari"/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>{t('otherRecipeList')}</h1>
          </div>
          <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} />
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} />
        </div>
        <div className={`${styles.popup} ${isActive ? styles.active : ''}`}>
            <div className={styles.popupContent}>
                <Link href='#'><button>Western Cookbook</button></Link>
                <Link href='#'><button>Chinese Cookbook</button></Link>
                <Link href='#'><button>Indonesian Cookbook</button></Link>
                <span onClick={togglePopup} className={styles.closeButton}>X</span>
            </div>
        </div>
        </>
    );
}

export default RecipeDetail