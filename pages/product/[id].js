import Head from "next/head"
import styles from '@/styles/Product.module.css'
import banner from '@/styles/Banner.module.css'
import Link from "next/link"
import SlideArticles from "../components/slide_articles"
import SlideArticlesMobile from "../components/slide_articles_mobile"
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 

const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    // Tambahkan produk lainnya
  ];

export async function getStaticPaths() {
    // Buat jalur berdasarkan produk yang tersedia
    const paths = products.map((product) => ({
      params: { id: product.id },
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
    const product = products.find((p) => p.id === params.id);
  
    return {
      props: {
        product,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }

const ProductDetails = () =>{
    const { t } = useTranslation('common');

    const ecommerces = [
        {
          id: 1,
          nameEcommerce: 'shopee',
          imageEcommerce: '/images/shopee_logo.png',
        },
        {
            id: 2,
            nameEcommerce: 'tokopedia', 
            imageEcommerce: '/images/tokopedia_logo.png',
        },
        {
            id: 3,
            nameEcommerce: 'blibli',
            imageEcommerce: '/images/blibli_logo.png',
        },
        {
            id: 4,
            nameEcommerce: 'sayurbox',
            imageEcommerce: '/images/sayurbox_logo.png',
        },
    ]

    const productItems = [
        {
          id: 1,
          imageProduct: '/images/slide_product_1_box.png',
          headingProduct: 'Original Japanese Curry',
          weight: '935g',
        },
        {
          id: 2,
          imageProduct: '/images/slide_product_2_box.png',
          headingProduct: 'Spicy Japanese Curry',
          weight: '935g',
        },
        {
          id: 3,
          imageProduct: '/images/slide_product_2_box.png',
          headingProduct: 'Spicy Japanese Curry',
          weight: '935g',
        },
    ]

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

    const secondColor = 'creamColor'
    const paginationStyle = 'old_red_color'

    const pageTitle = `House Kari | ${t('menu.product')} A`;

    return(
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Learn more about us" />
            </Head>
            <div className={banner.bannerStyle}>
                <img src="/images/product_page_banner.png" alt="House Kari Website"/>
            </div>
            <div className={banner.breadcrumbs}>
                <p>{t('menu.home')} / {t('menu.product')} / <span>{t('menu.product')} A</span></p>
            </div>
            <div className={styles.section3}>
                <div className={styles.section3_layout}>
                    <div className={styles.section3_box}>
                        <img src="/images/btn_hover.png" alt="House Kari" className={styles.btn_hover} />
                        <div className={styles.section3_image}>
                            <img src="/images/slide_product_2_box.png" alt="House Kari"/>
                        </div>
                        <div className={styles.section3_content}>
                            <h1>House Kari ala Jepang Original 300g</h1>
                            <div className={styles.section3_content_desc}>
                                <p dangerouslySetInnerHTML={{ __html: t('productDetailDesc') }}></p>
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
                <img src="/images/product_detail_icon.png" className={styles.product_detail_icon} alt="House Kari"/>
                <img src="/images/product_detail_icon_2.png" className={styles.product_detail_icon_2} alt="House Kari"/>
                <div className={styles.space_between_heading}>
                    <h1 className={styles.heading_main_red}>{t('headingRecipe')}</h1>
                </div>
                <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
                <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
            </div>
        </>
    )
}

export default ProductDetails