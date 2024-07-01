import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => { 
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <img src='/images/logo.png' alt='House Kari Logo' />
        <div className={styles.identity_layout}>
          <h1>PT HOUSE AND VOX INDONESIA</h1>
          <p>Atria @ Sudirman 17th Floor. Jendral Sudirman, Kav. 33A, Karet Tengsin, Tanah Abang, Jakarta Pusat 10220</p>
          <Link href='#'>Privacy Policy</Link>
        </div>
      </div>
      <div className={styles.social_footer}>
        <Link href='#'><FaFacebookF/></Link>
        <Link href='#'><FaInstagram/></Link>
        <Link href='#'><FaTiktok/></Link>
        <Link href='#'><FaLinkedin/></Link>
        <Link href='#'><FaYoutube/></Link>
      </div>
      <div className={styles.img_footer}>
        <img src='/images/img_footer.png' className='img_footer' alt='House Kari' />
      </div>
    </footer>
    <div className={styles.copyright}>
      <span>Copyright © 2024 House Japanese Curry | All Rights Reserved</span>
    </div>
    </>
  );
};

export default Footer;
