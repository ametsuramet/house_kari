import Head from "next/head"
import banner from '@/styles/Banner.module.css'
import styles from '@/styles/Article.module.css'
import SlideArticles from "../components/slide_articles"

export default function ArticleDetail() {
    const slideBlog = [
        {
          id: 1,
          images: '/images/blog_recent_1.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 2,
          images: '/images/blog_recent_2.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 3,
          images: '/images/blog_recent_1.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 4,
          images: '/images/blog_recent_2.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 5,
          images: '/images/blog_recent_1.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
          id: 6,
          images: '/images/blog_recent_2.png',
          date: 'Posted 10/10/2024',
          headingBlog: 'Headline',
          descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
        },
        {
            id: 7,
            images: '/images/blog_recent_1.png',
            date: 'Posted 10/10/2024',
            headingBlog: 'Headline',
            descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
          },
      ];

    return(
        <>
            <Head>
                <title>Intip Kuliner Khas Musim Semi di Jepang</title>
                <meta name="description" content="Learn more about us" />
            </Head>
            <div className={banner.bannerStyle}>
                <img src="/images/event_banner.png" alt="House Kari Website"/>
            </div>
            <div className={banner.breadcrumbs}>
                <p>Home / Article / <span>INTIP KULINER KHAS MUSIM SEMI DI JEPANG</span></p>
            </div>
            <div className={styles.sectionDetail}>
                <img src="/images/article_detail_icon_2.png" alt="House Kari" className={styles.article_detail_icon_2}/>
                <div className={styles.sectionDetail_image}>
                    <img src="/images/article_detail.png" alt="House Kari"/>
                </div>
                <h1>INTIP KULINER KHAS MUSIM SEMI DI JEPANG</h1>
                <h5 className={styles.articleDate}>POSTED BY : ADMIN / ON : FEBRUARI 14, 2024 / IN : LIFESTYLE</h5>
                <div className={styles.sectionDetail_content}>
                    <h3>Sebagian hanya muncul musim ini</h3>
                    <p>Musim semi segera tiba! <br/><br/>
                     Bulan Februari menandakan akhir musim dingin di Jepang. Negeri Sakura bersiap menyambut mekarnya bunga dan tumbuhnya berbagai buah-buahan seiring hangatnya udara belahan bumi bagian utara.<br/><br/>
                     Kamu mungkin sudah tidak asing dengan berbagai festival yang hanya ada di musim-musim tertentu di Jepang. Hal yang sama juga terjadi dengan berbagai sajian yang hadir di sana. Dengan berbagai bahan makanan yang hanya muncul pada musim semi,  Beberapa makanan khas musim semi di antaranya adalah sebagai berikut.
                    </p>
                </div>
                <div className={`${styles.sectionDetail_content} ${styles.sectionDetail_content_layout}`}>
                    <img src="/images/sakura_image.png" alt="House Kari"/>
                    <div className={styles.sectionDetail_double}>
                        <h3>Sakura Mochi</h3>
                        <p>Mekarnya bunga sakura pada musim semi membuat Jepang dibanjiri kuliner dan berbagai hal bertemakan bunga tersebut.
                            <br/><br/>Salah satu jajanan khas musim semi di Jepang adalah Sakura Mochi. Camilan kenyal berwarna pink dari bunga sakura, berisi pasta kacang merah (anko), dan disajikan secara spesial dibalut dengan daun bunga sakura. 
                            <br/><br/>Uniknya, Sakura Mochi adalah hidangan spesial untuk hari para perempuan (hinamatsuri). Namun, pada perkembangannya Sakura Mochi juga jadi camilan yang populer sepanjang musim semi.
                        </p>
                    </div>
                </div>
                <div className={`${styles.sectionDetail_content} ${styles.sectionDetail_content_layout}`}>
                    <img src="/images/gohan_image.png" alt="House Kari"/>
                    <div className={styles.sectionDetail_double}>
                        <h3>Takenoko gohan</h3>
                        <p>Di Indonesia kita memiliki tumis atau sayur rebung, sementara di Jepang juga memiliki kuliner berbahan dasar tunas bambu, yaitu Takenoko gohan atau nasi bambu.
                            <br/><br/>Mirip dengan proses memasak bambu di sini, tunas bambu yang mulai banyak bermunculan sekitar bulan Maret hingga Mei ini direbus terlebih dahulu untuk menghilangkan racun yang terkandung di dalamnya. Orang Jepang biasa menyajikannya langsung di atas nasi, ditambah sup miso, atau dijadikan tempura.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.section6}>
                <img src="/images/article_detail_icon.png" alt="House Kari" className={styles.article_detail_icon}/>
                <div className={styles.space_between_heading}>
                    <h1 className={styles.heading_main_white}>Articles That Might Interest You</h1>
                </div>
                <SlideArticles items={slideBlog} />
                <div className={styles.divider}></div>
            </div>
        </>
    )
}