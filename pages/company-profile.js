import Head from "next/head";
import styles from '@/styles/CompanyProfile.module.css'
import banner from '@/styles/Banner.module.css'
import { IoChevronDown } from "react-icons/io5";
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function CompanyProfile() {
  const { t } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Marketing');

  const menuItems = [
    'Marketing',
    'Social Media Specialist',
  ];

  const careers = [
    {
      id: 1,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 2,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 3,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 4,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 5,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 6,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 7,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
    {
      id: 8,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: t('descCareers')
    },
  ]

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunked careers array
  const chunkedCareers = chunkArray(careers, 3); 



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

  const handleSelectMenu = (menu) =>  {
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

const pageTitle = `House Kari | ${t('menu.companyProfile')}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/company_profile_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>{t('menu.home')} / {t('menu.ourStory')} / <span>{t('menu.companyProfile')}</span></p>
      </div>
      <div className={styles.bg_section}>
        <div className={styles.section1}>
          <div className={styles.section1_image}>
            <img src="/images/company_profile_section.png" alt="House Kari Website" />
          </div>
          <div className={styles.section1_content}>
            <h1>PT. HOUSE AND VOX INDONESIA</h1>
            <h3>{t('profileSubHeading')}</h3>
            <p>{t('profiledesc1')}</p>
            <p>{t('profiledesc2')}</p>
          </div>
        </div>
        <div className={styles.section2}>
          <img src="/images/pattern_center.png" alt="House Kari" className={styles.pattern_center}/>
          <img src="/images/filosofi_icon_1.png" alt="House Kari" className={styles.filosofi_icon_1}/>
          <img src="/images/filosofi_icon_2.png" alt="House Kari" className={styles.filosofi_icon_2}/>
          <h1>{t('filosofi')}</h1>
          <p dangerouslySetInnerHTML={{ __html: t('filosofiText') }}></p>
          <div className={styles.divider}></div>
        </div>
      </div>
      <div className={styles.two_block}>
        <div className={styles.vision_box}>
          <h1>{t('visi')}</h1>
          <p>{t('visiText')}</p>
          <div className={styles.overlay_visi}></div>
        </div>
        <div className={styles.mision_box}>
          <h1>{t('misi')}</h1>
          <ul>
            <li>{t('listMisi.listMisiOne')}</li>
            <li>{t('listMisi.listMisiTwo')}</li>
            <li>{t('listMisi.listMisiThree')}</li>
          </ul>
          <div className={styles.overlay_misi}></div>
        </div>
      </div>
      <div className={styles.careers}>
        <img src="/images/careers_icon.png" alt="House Kari" className={styles.careers_icon}/>
        <div className={styles.headingCareers}>
          <h1>{t('careers')}</h1>
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
                  className={`${styles.dropdownMenuItem} ${selectedMenu === menu ? styles.active : ''}`}
                  onClick={() => handleSelectMenu(menu)}
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>

        </div>
        <Swiper 
        autoHeight={true}
          pagination={{
            clickable: true,
          }} 
          
          modules={[Pagination]} 
          className="swiperCareers"
        >
          {chunkedCareers.map((careerChunk, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            {careerChunk.map((career, index) => (
              <div className={styles.boxCareers} key={index}>
                <h3>{career.headingCareers}</h3>
                <p>{career.descCareers}</p>
                <div className={styles.btnCareers}>
                  <div className={styles.dateCareers}>
                    <span>{t('ends')} {career.date}</span>
                  </div>
                  <Link href='/'><button>{t('apply')}</button></Link>
                </div>
              </div>
            ))}
          </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
}
 