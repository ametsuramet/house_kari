import Head from "next/head";
import styles from '@/styles/CompanyProfile.module.css'
import banner from '@/styles/Banner.module.css'
import { IoChevronDown } from "react-icons/io5";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Link from "next/link";

export default function CompanyProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Marketing');

  const menuItems = [
    'Marketing',
    'Social Media Specialist',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
    setIsOpen(false);
  };

  const careers = [
    {
      id: 1,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 2,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 3,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 4,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 5,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 6,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 7,
      headingCareers: 'Marketing Staff',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
    },
    {
      id: 8,
      headingCareers: 'Social Media Specialist',
      date: '20/05/2024',
      descCareers: 'Marketing Staff short description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui eu.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing, consectetur adipiscing elit. Nullam mattis vel dui consectetur adipiscing'
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

  return (
    <>
      <Head>
        <title>House Kari | Company Profile</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/company_profile_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>Home / Our Story / <span>Company Profile</span></p>
      </div>
      <div className={styles.bg_section}>
        <div className={styles.section1}>
          <div className={styles.section1_image}>
            <img src="/images/section_2_image.png" alt="House Kari Website" />
          </div>
          <div className={styles.section1_content}>
            <h1>PT. HOUSE AND VOX INDONESIA</h1>
            <h3>Sebuah Group Perusahaan dari House Foods Group INC</h3>
            <p>House Foods merupakan sebuah perusahaan produsen makanan ternama yang menguasai pangsa pasar penjualan kari ala Jepang di Jepang. House Foods mulai memasuki pasar Indonesia sejak tahun 2016 dengan memperkenalkan produk unggulan mereka yaitu House Kari ala Jepang yang telah memiliki sertifikasi halal dari LPPOM MUI. Kari ala Jepang halal ini tidak hanya dipasarkan di Indonesia saja namun juga sudah merambah ke beberapa negara tetangga seperti Singapura dan Malaysia.</p>
            <p>Keistimewaan Kari Jepang yaitu tidak mengandung santan dan dengan rasa yang mild bisa dinikmati seluruh anggota keluarga. Kari ala Jepang halal berukuran 935 gr dapat disajikan untuk 50 porsi dan memang target pemasarannya adalah horeca. Selain melalui distributor utama, produk ini sudah bisa didapatkan di beberapa supermarket di Jakarta seperti Grand Lucky dan juga di beberapa situs belanja online di Indonesia.</p>
          </div>
        </div>
        <div className={styles.section2}>
          <img src="/images/pattern_center.png" alt="House Kari" className={styles.pattern_center}/>
          <img src="/images/filosofi_icon_1.png" alt="House Kari" className={styles.filosofi_icon_1}/>
          <img src="/images/filosofi_icon_2.png" alt="House Kari" className={styles.filosofi_icon_2}/>
          <h1>Filosofi</h1>
          <p>“Kami ingin menjadi <b>‘mitra yang baik’</b> yang menghubungkan orang-orang melalui makanan dan <b>memberikan kebahagiaan </b> dalam kehidupan sehari-hari”</p>
          <div className={styles.divider}></div>
        </div>
      </div>
      <div className={styles.two_block}>
        <div className={styles.vision_box}>
          <h1>Visi</h1>
          <div className={styles.overlay_visi}></div>
        </div>
        <div className={styles.mision_box}>
          <h1>Misi</h1>
          <ul>
            <li>Untuk Mengejar Menyediakan Produk Berkualitas Tinggi Untuk Pasar Halal Di Seluruh Dunia</li>
            <li>Menjadikan Tubuh Dan Jiwa yang Sehat Melalui Inovasi</li>
            <li>Untuk Menjalin Dan Mengembangkan Koordinasi Dan Kemitraan Yang Baik Antara Stakeholder Dan Pelanggan</li>
          </ul>
          <div className={styles.overlay_misi}></div>
        </div>
      </div>
      <div className={styles.careers}>
        <img src="/images/careers_icon.png" alt="House Kari" className={styles.careers_icon}/>
        <div className={styles.headingCareers}>
          <h1>Careers</h1>
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
                    <span>Ends {career.date}</span>
                  </div>
                  <Link href='/'><button>Apply</button></Link>
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
 