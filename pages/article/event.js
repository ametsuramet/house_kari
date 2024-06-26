import Head from "next/head";
import styles from '@/styles/Article.module.css'
import banner from '@/styles/Banner.module.css'
import Link from "next/link";
import SlideArticles from "../components/slide_articles";

export default function Event() {
  const recentBlog = [
    {
      id: 1,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 2,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: 'Headline',
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    }
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

  const secondColor = 'creamColor'
  const paginationStyle = 'old_red_color'

  return (
    <>
      <Head>
        <title>Event</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/event_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>Home / Article / <span>Event</span></p>
      </div>
      <div className={styles.section1}>
        <img src="/images/black_pepper_icon.png" alt="House Kari" className={styles.black_pepper_icon}/>
        <div className={styles.section1_layout}>
          <div className={styles.section1_tab}>
            <Link href='/article'><button>Article</button></Link>
            <Link href='/article/tips-trick'><button>Tips & Tricks</button></Link>
            <Link href='/article/event'><button className={styles.activeTab}>Event</button></Link>
            <Link href='/article/media-release'><button>Media Release</button></Link>
          </div>
          <div className={styles.section1_box}>
            <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main}>Newest Articles</h1>
            </div>
            <div className={styles.blog_recent_layout}>
              {recentBlog.map((blog, index) => (
                <div key={index} className={styles.blog_recent_box}>
                  <div className={styles.blog_recent_image}>
                    <img src={blog.images} alt={blog.headingBlog}/>
                  </div>
                  <div className={styles.blog_recent_content}>
                    <span>Posted {blog.date}</span>
                    <h1>{blog.headingBlog}</h1>
                    <p>{blog.descBlog}</p>
                    <Link href='#'><button>Learn More</button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>Other Articles</h1>
        </div>
        <SlideArticles items={slideBlog} />
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section3}>
          <img src="/images/cinamon_icon.png" alt="House Kari" className={styles.cinamon_icon}/>
          <img src="/images/product_detail_icon_2.png" alt="House Kari" className={styles.product_detail_icon_2}/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>Recipes That Might Interest You</h1>
          </div>
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
      </div>
    </>
  );
}
