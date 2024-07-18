import Head from "next/head";
import styles from '@/styles/Article.module.css'
import banner from '@/styles/Banner.module.css'
import Link from "next/link";
import SlideArticles from "../components/slide_articles";
import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import SlideArticlesMobile from "../components/slide_articles_mobile";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import axios from "axios";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Article() {
  const { t, i18n } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Article');

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

  const recentBlog = [
    {
      id: 1,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 2,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    }
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

  const menuItems = [
    {
      categoryId: 1,
      categoryName: 'Article',
      categoryLink: '/'
    },
    {
      categoryId: 2,
      categoryName: 'Tips & Trick',
      categoryLink: 'tips-trick'
    },
    {
      categoryId: 3,
      categoryName: 'Event',
      categoryLink: 'event'
    },
    {
      categoryId: 4,
      categoryName: 'Media Release',
      categoryLink: 'media-release'
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
    // Handle overflow on body
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Body tidak bisa di-scroll
    } else {
      document.body.style.overflow = 'auto'; // Body bisa di-scroll
    }

    // Cleanup function to reset overflow when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }
  }, [isOpen]);

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu.categoryName);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdownMenu}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [height, setHeight] = useState(360); // Default height
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);
  const startY = useRef(0); // Define startY as a useRef variable
  const startHeight = useRef(0);
  const lastY = useRef(0); // To track the last Y position
  const lastTime = useRef(0); // To track the last time for flick detection

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      if (height >= window.innerHeight) {
        contentElement.style.maxHeight = '100vh';
        contentElement.style.overflowY = 'scroll';
      } else {
        contentElement.style.maxHeight = `${height}px`;
        contentElement.style.overflowY = 'hidden';
      }
    }
  }, [height]);

  const handleStart = (clientY) => {
    if (!isMobile) return;
    startY.current = clientY;
    startHeight.current = height;
    lastY.current = clientY;
    lastTime.current = Date.now();
  };

  const handleMove = (clientY) => {
    if (!isMobile) return;
  
    const currentTime = Date.now();
    const deltaY = clientY - lastY.current;
    const deltaTime = currentTime - lastTime.current;
  
    // Update last positions and times
    lastY.current = clientY;
    lastTime.current = currentTime;
  
    const flickSpeed = deltaY / deltaTime;
  
    if (flickSpeed < -0.5) { // Adjust the threshold as needed for flick up
      setHeight(window.innerHeight);
    } else if (flickSpeed > 0.5) { // Adjust the threshold as needed for flick down
      setHeight(360); // Default height
      setIsOpen(false); // Close dropdown when flicking down
    }
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientY);
  };

  const handleMouseDown = (e) => {
    handleStart(e.clientY);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientY);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
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

  const pageTitle = `House Kari | ${t('menu.article')}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/article_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>{t('menu.home')} / <span>{t('menu.article')}</span></p>
      </div>
      <div onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown} className={`${styles.dropdownMenu} ${isOpen ? styles.active : ''}`} style={{ height: isMobile ? `${height}px` : 'auto' }}>
          <div className={styles.circle_menu}><div className={styles.circle_menu_box}></div></div>
          {menuItems.map((menu) => (
            <div
              key={menu.categoryId}
              className={`${styles.dropdownMenuItem} ${selectedMenu === menu.categoryId ? styles.active : ''}`}
              onClick={() => handleSelectMenu(menu)}
            >
              <Link href={`/article/${menu.categoryLink}`} legacyBehavior><a>{menu.categoryName}</a></Link>
            </div>
          ))}
      </div>
      <div className={styles.section1}>
        <img src="/images/black_pepper_icon.png" alt="House Kari" className={styles.black_pepper_icon}/>
        <div className={styles.section1_layout}>
          <div className={styles.section1_tab}>
            <Link href='/article'><button className={styles.activeTab}>{t('menu.article')}</button></Link>
            <Link href='/article/tips-trick'><button>{t('menu.tipsTricks')}</button></Link>
            <Link href='/article/event'><button>{t('menu.event')}</button></Link>
            <Link href='/article/media-release'><button>{t('menu.mediaRelease')}</button></Link>
          </div>
          <div className={styles.section1_box}>
            <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main}>{t('newestArticle')}</h1>
            </div>
            <div className={styles.blog_recent_layout}>
              {recentBlog.map((blog, index) => (
                <div key={index} className={styles.blog_recent_box}>
                  <div className={styles.blog_recent_image}>
                    <img src={blog.images} alt={blog.headingBlog}/>
                  </div>
                  <div className={styles.blog_recent_content}>
                    <span>{t('posted')} {blog.date}</span>
                    <h1>{blog.headingBlog}</h1>
                    <p>{blog.descBlog}</p>
                    <Link href='/article/1'><button>{t('section1Home.learnMore')}</button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>{t('otherArticle')}</h1>
        </div>
        <div className={styles.select_menu_product}>
          <button 
            className={`${styles.dropdownButton} ${isOpen ? styles.activeButton : ''}`}  
            onClick={toggleDropdown}
          >
            {selectedMenu} <IoChevronDown />
          </button>
        </div>
        <SlideArticlesMobile items={slideBlog}/>
        <SlideArticles items={slideBlog}/>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section3}>
          <img src="/images/cinamon_icon.png" alt="House Kari" className={styles.cinamon_icon}/>
          <img src="/images/product_detail_icon_2.png" alt="House Kari" className={styles.product_detail_icon_2}/>
          <div className={styles.space_between_heading}>
              <h1 className={styles.heading_main_red}>{t('headingRecipe')}</h1>
          </div>
          {/* <SlideArticlesMobile classNames={secondColor} paginationClass={paginationStyle} items={recipeList} />
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={recipeList} /> */}
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
