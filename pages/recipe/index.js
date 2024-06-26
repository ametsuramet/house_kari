import Head from "next/head";
import styles from '@/styles/Recipe.module.css'
import banner from '@/styles/Banner.module.css'
import { useState } from "react";
import SlideRecipe from "../components/slide_recipe";
import SlideArticles from "../components/slide_articles";

export default function Recipe() {
  const [activeTab, setActiveTab] = useState(0);

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
