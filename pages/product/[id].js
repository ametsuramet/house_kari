import Head from "next/head"
import styles from '@/styles/Product.module.css'
import banner from '@/styles/Banner.module.css'
import Link from "next/link"
import SlideArticles from "../components/slide_articles"

const ProductDetails = () =>{
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

    return(
        <>
            <Head>
                <title>Product A</title>
                <meta name="description" content="Learn more about us" />
            </Head>
            <div className={banner.bannerStyle}>
                <img src="/images/product_page_banner.png" alt="House Kari Website"/>
            </div>
            <div className={banner.breadcrumbs}>
                <p>Home / product / <span>Product A</span></p>
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
                                <p>House Kari ala Jepang Spicy adalah bumbu saus padat dengan bahan rempah-rempah berkualitas dalam kemasan 300g yang dapat menyajikan hingga 16 porsi makanan kari pedas. Rasa asli kari Jepang pedas sejak tahun 1913 dengan rasa yang ringan dan tekstur kuah yang kental tanpa santan. Bumbu saus padat atau curry roux juga bisa dinikmati dengan berbagai cara seperti taburan nasi, bahan sop, mie, pasta, bakpao, atau bumbunya daging dan saus celup.</p>
                                <p>House Kari ala Jepang Bersertifikat HALAL dari Indonesia sejak tahun 2016 telah menjadi distributor utama bahan baku menu kari Jepang di beberapa Hotel, Restoran dan Katering di Indonesia, Malaysia, Singapura, dan Dubai.</p>
                            </div>
                            <div className={styles.section3_ecommerce}>
                                <h2>Buy now at</h2>
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
                    <h1>Other Product you Might Like</h1>
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
                                <Link href={`/product/${product.id}`}><button>Learn More</button></Link>
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
                    <h1 className={styles.heading_main_red}>Recipes That Might Interest You</h1>
                </div>
                <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
            </div>
        </>
    )
}

export default ProductDetails