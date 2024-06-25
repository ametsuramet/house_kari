import banner from '@/styles/Banner.module.css'
import Head from 'next/head';
import styles from '@/styles/Recipe.module.css'
import SlideArticles from '../components/slide_articles';
import Link from 'next/link';
import { useState } from 'react';

const recipeDetail = () => {
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

      const secondColor = 'creamColor'
      const paginationStyle = 'old_red_color'

    return(
        <>
        <Head>
        <title>Recipe</title>
        <meta name="description" content="Learn more about us" />
        </Head>
        <div className={banner.bannerStyle}>
            <img src="/images/recipe_banner.png" alt="House Kari Website"/>
        </div>
        <div className={banner.breadcrumbs}>
            <p>Home / Recipe / <span>Kari Kroket</span></p>
        </div>
        <div className={styles.section4}>
            <div className={styles.section4_layout}>
                <div className={styles.section4_box}>
                    <div className={styles.section4_image}>
                        <img src='/images/recipe_detail.png' alt='House Kari'/>
                        <div className={styles.section4_overlay}></div>
                    </div>
                    <div className={styles.section4_content}>
                        <div className={styles.recipeDetail}>
                            <h1>Kari Kroket</h1>
                            <p>Untuk menciptakan mood yang baik sebelum mengawali hari, perlu menu bernutrisi dan lezat tetapi juga praktis. Seperti menu Baked Potatoes dari House Kari ala Jepang. Have a healthy morning Currymates!</p>
                        </div>
                        <div className={styles.recipeBahan}>
                            <h3 className={styles.headingRecipeDetail}>Bahan-Bahan</h3>
                            <ul>
                                <li>Kentang 3 pcs</li>
                                <li>Air 50 cc</li>
                                <li>100g daging sapi cincang</li>
                                <li>Untuk adonan</li>
                                <li>Setengah Bawang</li>
                                <li>Jagung kupas 3-4 sdm</li>
                                <li>Tepung Terigu 55g (sekitar 6tbs)</li>
                                <li>Telur 1 pcs</li>
                                <li>Gula 1 sdm</li>
                                <li>Air 70 cc</li>
                                <li>Kecap 1 sdm</li>
                                <li>Mayonaise 1tbs</li>
                                <li>Karam & merica secukupnya</li>
                                <li>Remah roti</li>
                                <li>House Kari ala Jepang Saus Padat (Roux) 45 g (1 blok)</li>
                            </ul>
                        </div>
                        <div className={styles.recipeCara}>
                            <h3 className={styles.headingRecipeDetail}>Cara Membuat</h3>
                            <ul>
                                <li>Kupas kentang, rebus hingga empuk. Cincang bawang bombay seperti dadu dan iris kari Roux secara kasar sambil menunggu kentang mendidih.</li>
                                <li>Tiriskan kentang rebus, masukkan ke dalam mangkuk dan haluskan sampai rata.</li>
                                <li>Buat isian : panaskan wajan dengan minyak, dan tambahkan daging cincang ke dalam wajan. Tambahkan garam dan merica secukupnya, tumis hingga warnanya berubah.</li>
                                <li>Masukkan bawang bombay hingga transparan lalu tambahkan jagung dan campuran aduk hingga merata..</li>
                                <li>Matikan api, masukkan kari roux ke dalam wajan, dan aduk hingga tercampur rata.</li>
                                <li>Rebus sekali lagi dengan api kecil, aduk sesekali. Tambahkan isian ke dalam kentang tumbuk, dan aduk rata.</li>
                                <li>Bentuk adonan menjadi 10 kroket.</li>
                                <li>Buat adonan : Campur telur, mayonaise dan air menjadi satu, lalu tambahkan tepung sedikit demi sedikit, lalu aduk hingga merata.</li>
                                <li>Celupkan kroket ke dalam adonan, lalu lapisi dengan tepung roti.</li>
                                <li>Panaskan minyak dengan api sedang. Goreng kroket sampai berwarna cokelat keemasan. Tiriskan hingga dilapisi tisu dapur sebelum disajikan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={togglePopup} className={styles.btn_download}>Download CookBook</button>
            </div>
        </div>
        <div className={styles.section5}>
            <div className={styles.space_between_heading}>
            <h1 className={styles.heading_main_white}>Other Recipes</h1>
            </div>
            <SlideArticles items={recipeList} />
            <div className={styles.divider}></div>
        </div>
        <div className={styles.section3}>
          <img src="/images/recipe_icon_section3.png" className={styles.recipe_icon_section3} alt="House Kari"/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>Articles That Might Interest You</h1>
          </div>
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
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

export default recipeDetail