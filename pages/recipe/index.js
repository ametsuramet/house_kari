import Head from "next/head";
import styles from '@/styles/Recipe.module.css'
import banner from '@/styles/Banner.module.css'
import { useState, useEffect, useRef } from "react";
import SlideRecipe from "../components/slide_recipe";
import SlideArticles from "../components/slide_articles";
import { IoChevronDown } from "react-icons/io5";

export default function Recipe() {
  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Bread & Pastry');

  const menuItems = [
    'Bread & Pastry',
    'Vegetables',
    'Meat',
    'Seafood',
    'Snacks'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      id: 1,
      images: '/images/recipe_image_2.png',
      recipeHeading: 'Recipe A',
      recipeDesc: 'Recipe short description, lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu'
    },
    {
        id: 2,
        images: '/images/recipe_image_2.png',
        recipeHeading: 'Recipe A',
        recipeDesc: 'Recipe short description, lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu'
    },
    {
        id: 3,
        images: '/images/recipe_image_2.png',
        recipeHeading: 'Recipe A',
        recipeDesc: 'Recipe short description, lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu'
    },
    {
      id: 4,
      images: '/images/recipe_image_2.png',
      recipeHeading: 'Recipe A',
      recipeDesc: 'Recipe short description, lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu'
    },
    {
      id: 5,
      images: '/images/recipe_image_2.png',
      recipeHeading: 'Recipe A',
      recipeDesc: 'Recipe short description, lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu'
    },
  ];

  const tabs = [
    { 
      title: 'Bread & Pastry', 
      content: <SlideRecipe items={items}/>
    },
    { 
      title: 'Vegetables', 
      content: <SlideRecipe items={items}/> 
    },
    { 
      title: 'Meat', 
      content: <SlideRecipe items={items}/> 
    },
    { title: 'Seafood', 
      content: <SlideRecipe items={items}/> 
    },
    { 
      title: 'Snacks', 
      content: <SlideRecipe items={items}/>  
    },
  ];

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
    setSelectedMenu(menu);
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

  return (
    <>
      <Head>
        <title>Recipe</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/recipe_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>Home / <span>Recipe</span></p>
      </div>
      <div className={styles.section1}>
        <img src="/images/sendok_recipe_slide.png" alt="House Kari" className={styles.sendok_recipe_slide}/>
        <div className={styles.tabContainer}>
          <div className={styles.tabHeaders}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tabHeader} ${index === activeTab ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title} 
              </button>
            ))}
          </div>
          <div className={styles.select_menu_product}>
            <button 
              className={`${styles.dropdownButton} ${isOpen ? styles.activeButton : ''}`}  
              onClick={toggleDropdown}
            >
              {selectedMenu} <IoChevronDown />
            </button>
            <div onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown} className={`${styles.dropdownMenu} ${isOpen ? styles.active : ''}`} style={{ height: isMobile ? `${height}px` : 'auto' }}>
              <div className={styles.circle_menu}><div className={styles.circle_menu_box}></div></div>
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className={`${styles.dropdownMenuItem} ${selectedMenu === menu ? styles.active : ''}`}
                  onClick={() => handleSelectMenu(menu)}
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.tabContent}>
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <img src="/images/section_2_recipe_icon.png" alt="House Kari" className={styles.section_2_recipe_icon}/>
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
          <SlideArticles classNames={secondColor} paginationClass={paginationStyle} items={slideBlog} />
      </div>
    </>
  );
}
