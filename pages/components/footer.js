import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 
import axios from 'axios';
import { useState, useEffect } from 'react';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Footer = () => { 
  const { t } = useTranslation('common');
  const [themeHeader, setThemeHeader] = useState ([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/theme-image`);
        const data = await response.json();
        if (data && data.data && data.data.footer) {
          setThemeHeader(data.data.footer);
          console.log('Header image:', data.data.footer);
        } else {
          console.error('Invalid response data format:', data);
        }
      } catch (error) {
        console.error('Error fetching header image:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <img src='/images/logo.png' alt='House Kari Logo' /> 
        <div className={styles.identity_layout}>
          <h1>PT HOUSE AND VOX INDONESIA</h1>
          <p>{t('address')}</p>
          <Link href='/privacy-policy'>{t('privacyPolicy')}</Link>
        </div>
      </div>
      <div className={styles.social_footer}>
        <Link href='https://www.facebook.com/housekarialajepang' target='blank_'><FaFacebookF/></Link>
        <Link href='https://www.instagram.com/dapurkarialajepang/' target='blank_'><FaInstagram/></Link>
        <Link href='https://www.tiktok.com/@masakkariyuk?lang=id-ID' target='blank_'><FaTiktok/></Link>
        <Link href='https://www.linkedin.com/company/house-and-vox-indonesia/' target='blank_'><FaLinkedin/></Link>
        <Link href='https://www.youtube.com/@housekarialajepang5318' target='blank_'><FaYoutube/></Link>
      </div>
      <div className={styles.img_footer}>
        <img 
          src={`https://prahwa.net/storage/${themeHeader ? themeHeader : 'images/footer_img_product.png'}`} 
          className="img_footer" 
          alt="House Kari" 
        />

      </div>
    </footer>
    <div className={styles.copyright}>
      <span>{t('copyright')}</span>
    </div>
    </>
  );
};

export default Footer;
