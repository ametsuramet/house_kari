import styles from '@/styles/Home.module.css'
import Slide from './components/slide';
import SlideProduct from './components/slide_product';
import Link from 'next/link';
import { IoChevronDown } from "react-icons/io5";
import { useState } from 'react';
import SlideArticles from './components/slide_articles';
import SlideTestimonials from './components/slide_testimonials';

const items = [
  <img key={1} src='/images/banner-1.png' alt='banner'/>,
  <img key={2} src='/images/banner-1.png' alt='banner'/>,
  <img key={3} src='/images/banner-1.png' alt='banner'/>,
];


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Menu Makan Siang');

  const menuItems = [
    'Menu Makan Siang',
    'Menu Sarapan',
    'Menu Snack',
    'Menu Seafood',
    'Menu Roti',
    'Menu Sayuran',
  ];

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
    setIsOpen(false);
  };

  return (
    <>
      <Slide items={items} showNavigation={false} showPagination={true} />
      <div className={styles.section_2}>
        <div className={styles.section_2_box}>
          <img src='/images/section_2_image.png' alt='House Kari Story' />
        </div>
        <div className={styles.section_2_content}>
          <h1 className={styles.heading_main}>Profil Perusahaan</h1>
          <p className={styles.desc_main}>House Foods masuk ke Indonesia melalui PT House And Vox Indonesia dan memproduksi Kari Jepang halal pertama di Indonesia dengan merek House Kari ala Jepang dengan ukuran 935g yang diproduksi di pabrik PT Java Agri Tech, Semarang.</p>
          <Link href=''><button>Pelajari Selengkapnya</button></Link>
          <img src='/images/icon_section_2.png' alt='House Kari Website' className={styles.icon_section_2} />
          <img src='/images/pattern_section_2.png' alt='House Kari Website' className={styles.pattern_section_2} />
        </div>
      </div>
      <div className={styles.section_3}>
        <div className={styles.select_menu_product}>
          <button 
            className={`${styles.dropdownButton} ${isOpen ? styles.activeButton : ''}`} 
            onClick={toggleDropdown}
          >
            {selectedMenu} <IoChevronDown />
          </button>
          {isOpen && (
            <div className={styles.dropdownMenu}>
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
          )}
        </div>
        <div className={styles.section_3_heading}>
          <h1 className={styles.heading_main}>Resep ala House Kari</h1>
          <p className={styles.desc_main}>Kumpulan resep sehari-hari dengan House kari ala Jepang</p>
        </div>
        <SlideProduct/>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section_4}>
        <img src='/images/section_4_icon_1.png' alt='House Kari' className={styles.section_4_icon_1} />
        <img src='/images/section_4_icon_2.png' alt='House Kari' className={styles.section_4_icon_2} />
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main}>Newest Articles</h1>
          <p className={styles.desc_main_margin}>Read more articles...</p>
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
      <div className={styles.section_5}>
        <div className={styles.space_between_heading}>
          <h1 className={styles.heading_main_white}>Other Articles</h1>
        </div>
        <SlideArticles/>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.section_6}>
          <div className={styles.section_6_image}>
            <img src='/images/form_image.png' alt='House Kari'/>
          </div>
          <div className={styles.section_6_form}>
            <div className={styles.section_6_heading}>
              <h1 className={styles.heading_main}>Write a Review, Get a Curry!</h1>
              <p className={styles.desc_main_margin}>Write a review and have a chance to win House Kari ala Jepang! Write and upload your testimony now!</p>
            </div>
            <form className={styles.form}>
              <div className={styles.form_fields}>
                <label>Name</label>
                <input type='text' placeholder='Name'/>
              </div>
              <div className={styles.form_fields}>
                <label>Phone Number</label>
                <input type='number' placeholder='Phone Number'/>
              </div>
              <div className={styles.form_fields}>
                <label>Review</label>
                <textarea placeholder='Review'></textarea>
              </div>
              <div className={styles.form_fields_row}>
                <div className={styles.fileInputWrapper}>
                  <input type="file" id="file-input" className={styles.fileInput} />
                  <label htmlFor="file-input" className={styles.customFileLabel}>
                    + Upload File
                  </label>
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
      </div>
      <div className={styles.section_7}>
        <img src='/images/section_7_icon.png' alt='House Kari' className={styles.section_7_icon}/>
        <img src='/images/ginger_icon.png' alt='House Kari' className={styles.ginger_icon}/>
        <div className={styles.padding_container}>
          <div className={styles.space_between_heading}>
            <h1 className={styles.heading_main}>Hear What They Say</h1>
          </div>
        </div>
        <SlideTestimonials/>
      </div>
    </>
  );
}
