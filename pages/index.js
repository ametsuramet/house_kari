import styles from '@/styles/Home.module.css'
import Slide from './components/slide';
import SlideProduct from './components/slide_product';
import Link from 'next/link';
import { IoChevronDown } from "react-icons/io5";
import { useState } from 'react';
import SlideArticles from './components/slide_articles';
import SlideTestimonials from './components/slide_testimonials';
import { useEffect, useRef } from 'react';
import SlideProductMobile from './components/slide_product_mobile';
import SlideArticlesMobile from './components/slide_articles_mobile';
import SlideTestimonialsMobile from './components/slide_testimonials_mobile';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';
import SlideArticlesSecond from './components/slide_articles_second';
import SlideArticlesSecondMobile from './components/slide_articles_second_mobile';

const items = [
  <img key={1} src='/images/banner-1.png' alt='banner'/>,
  <img key={2} src='/images/banner-1.png' alt='banner'/>,
  <img key={3} src='/images/banner-1.png' alt='banner'/>,
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(t('section2Menu.makanSiang'));
  const [articles, setArticles] = useState([]);
  const [articlesSlide, setArticlesSlide] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`/api/list-article`);
        const articles = response.data.data;

        // Assuming the date field is in 'YYYY-MM-DD' format; adjust if necessary
        const sortedArticles = articles
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
          .slice(0, 2); // Select the top 2 most recent articles

        setArticles(sortedArticles);
        console.log('Fetched and filtered articles:', sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchArticles();
  });

  useEffect(() => {
    const fetchArticlesSlide = async () => {
        try {
          const response = await axios.get(`/api/list-article/`);
          setArticlesSlide(response.data.data); 
          console.log('Fetched product:', response.data.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
    };
  
    fetchArticlesSlide();
  });

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

  const stripPTags = (html) => {
    if (typeof html === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || '';
    } else {
      return '';
    }
  };

  const getProductName = (article) => {
    switch (i18n.language) {
      case 'en':
        return article.title_en || article.title;
      case 'zh':
        return article.title_chi || article.title;
      default:
        return article.title;
    }
  };

  const menuItems = [
    { label: t('section2Menu.makanSiang') },
    { label: t('section2Menu.makanSarapan') },
    { label: t('section2Menu.makanSnack') },
    { label: t('section2Menu.makanSeafood') },
    { label: t('section2Menu.makanRoti') },
    { label: t('section2Menu.makanSayuran') },
  ];

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
    },
    {
      id: 3,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 4,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 5,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 6,
      images: '/images/blog_recent_2.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
    },
    {
      id: 7,
      images: '/images/blog_recent_1.png',
      date: '10/10/2024',
      headingBlog: t('headline'),
      descBlog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu imperdiet. Vestibulum mattis faucibus nisi, sed finibus nunc scelerisque at. Sed quis arcu consequat,'
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
    setSelectedMenu(menu.label);
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

if (articles.length === 0) return <p style={{textAlign: "center"}}>Loading...</p>;

  return (
    <>
      <Slide items={items} showNavigation={false} showPagination={true} />
      <div className={styles.section_2}>
        <div className={styles.section_2_box}>
          <img src='/images/section_2_image.png' alt='House Kari Story' />
        </div>
        <div className={styles.section_2_content}>
          <h1 className={styles.heading_main}>{t('section1Home.profilPerusahaan')}</h1>
          <p className={`${styles.desc_main}`}>{t('section1Home.profilPerusahaanDesc')}</p>
          <Link href='/company-profile'><button>{t('section1Home.learnMore')}</button></Link>
          <img src='/images/icon_section_2.png' alt='House Kari Website' className={styles.icon_section_2} />
          <img src='/images/pattern_section_2.png' alt='House Kari Website' className={styles.pattern_section_2} />
        </div>
      </div> 
      <div className={styles.section_3}>
        <div className={styles.section_3_heading}>
          <h1 className={styles.heading_main}>{t('section2Home.resepAla')}</h1>
          <p className={`${styles.desc_main} ${styles.desc_main_margin}`}>{t('section2Home.resepAlaDesc')}</p>
        </div>
        <div className={styles.select_menu_product}>
          <button 
            className={`${styles.dropdownButton} ${isOpen ? styles.activeButton : ''}`}  
            onClick={toggleDropdown}
          >
            {selectedMenu} <IoChevronDown />
          </button>
          <div  onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown} className={`${styles.dropdownMenu} ${isOpen ? styles.active : ''}`} style={{ height: isMobile ? `${height}px` : 'auto' }}>
            <div className={styles.circle_menu}><div className={styles.circle_menu_box}></div></div>
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className={`${styles.dropdownMenuItem} ${selectedMenu === menu.label ? styles.active : ''}`}
                onClick={() => handleSelectMenu(menu)}
              >
                {menu.label}
              </div>
            ))}
          </div>
        </div>
        <SlideProduct/>
        <SlideProductMobile/>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section_4}>
        <img src='/images/section_4_icon_1.png' alt='House Kari' className={styles.section_4_icon_1} />
        <img src='/images/section_4_icon_2.png' alt='House Kari' className={styles.section_4_icon_2} />
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main}>{t('newestArticle')}</h1>
          <Link href='/article/9'><p className={styles.desc_main_margin}>{t('readMoreArticle')}...</p></Link>
        </div>
        <div className={styles.blog_recent_layout}>
            {articles.map((article) => (
                <div key={article.id} className={styles.blog_recent_box}>
                  <div className={styles.blog_recent_image}>
                    <img src={`https://prahwa.net/storage/${article.image}`} alt={article.title} />
                  </div>
                  <div className={styles.blog_recent_content}>
                    <span>{t('posted')} {formatDate(article.date)}</span>
                    <h1>{stripPTags(getProductName(article))}</h1>
                    <p>{stripPTags(article.text)}</p>
                    <Link href={`/article-detail/${article.id}`}><button>{t('section1Home.learnMore')}</button></Link>
                  </div>
                </div>
            ))}
        </div>
        <div className={styles.heading_mobile_desc}>
          <Link href='/article/9'>{t('readMoreArticle')}...</Link>
        </div>
      </div>
      <div className={styles.section_5}>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>{t('otherArticle')}</h1>
        </div>
        <SlideArticlesSecond items={articlesSlide.map(article => ({
          ...article,
              title: stripPTags(getProductName(article)),
        }))} />
        <SlideArticlesSecondMobile items={articlesSlide.map(article => ({
            ...article,
            title: stripPTags(getProductName(article)),
        }))} /> 
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section_6}>
          <div className={styles.section_6_image}>
            <img src='/images/form_image.png' alt='House Kari'/>
          </div>
          <div className={styles.section_6_form}>
            <div className={styles.section_6_heading}>
              <h1 className={styles.heading_main}>{t('headingForm')}</h1>
              <p className={styles.desc_main_margin}>{t('headingFormDesc')}</p>
            </div>
            <form className={styles.form}>
              <div className={styles.form_fields}>
                <label>{t('nameForm')}</label>
                <input type='text' placeholder={t('nameForm')}/>
              </div>
              <div className={styles.form_fields}>
                <label>{t('numberForm')}</label>
                <input type='number' placeholder={t('numberForm')}/>
              </div>
              <div className={styles.form_fields}>
                <label>{t('reviewForm')}</label>
                <textarea placeholder={t('reviewForm')}></textarea>
              </div>
              <div className={styles.form_fields_row}>
                <div className={styles.fileInputWrapper}>
                  <input type="file" id="file-input" className={styles.fileInput} />
                  <label htmlFor="file-input" className={styles.customFileLabel}>
                    + {t('unggahFile')}
                  </label>
                </div>
                <button>{t('submitBtn')}</button>
              </div>
            </form>
          </div>
      </div>
      <div className={styles.section_7}>
        <img src='/images/section_7_icon.png' alt='House Kari' className={styles.section_7_icon}/>
        <img src='/images/ginger_icon.png' alt='House Kari' className={styles.ginger_icon}/>
        <div className={styles.padding_container}>
          <div className={styles.space_between_heading}>
            <h1 className={styles.heading_main}>{t('testimoniHeading')}</h1>
          </div>
        </div>
        <SlideTestimonialsMobile/>
        <SlideTestimonials/>
      </div>
    </>
  );
}
