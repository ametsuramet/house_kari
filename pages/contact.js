import Head from "next/head";
import styles from '@/styles/Contact.module.css'
import banner from '@/styles/Banner.module.css'
import { LuPhoneCall } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [selectedOption1, setSelectedOption1] = useState('Choose...');
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('Choose...');
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('Choose...');
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const handleSelect = (setSelectedOption, setIsDropdownOpen, option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Learn more about us" /> 
      </Head>
      <div className={banner.bannerStyle}>
          <img src="/images/company_history_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
          <p>Home / <span>Contact</span></p>
      </div>
      <div className={styles.section1}>
        <div className={styles.divider}></div>
        <div className={styles.maps}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.378564532631!2d106.814869375868!3d-6.213702560864358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40184a6f121%3A0x46d7568ff13f0ab9!2sPT%20HOUSE%20AND%20VOX%20INDONESIA!5e0!3m2!1sen!2sid!4v1719396203076!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.section1_layout}>
          <img src="/images/contact_icon.png" alt="House Kari" className={styles.contact_icon}/>
          <div className={styles.section1_form}>
            <h1>Contact Us</h1>
            <form>
              <div className={styles.form_field_double}>
                <div className={styles.form_field}>
                  <label>Name</label>
                  <input type="text" placeholder="Name"/>
                </div>
                <div className={styles.form_field}>
                  <label>Phone Number</label>
                  <input type="number" placeholder="Phone Number"/>
                </div>
              </div>
              <div className={styles.form_field}>
                <label>Email</label>
                <input type="email" placeholder="Email"/>
              </div>
              <div className={styles.form_field}>
                <label>Inquiries</label>
                <textarea placeholder="Inquiries"></textarea>
              </div>
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className={styles.hiddenCheckbox}
                />
                <span className={styles.customCheckmark}></span>
                I have agree with the Privacy Policy
              </label>
              <button>Submit</button>
            </form>
          </div>
          <div className={styles.addressDetail}>
            <h3>PT HOUSE AND VOX INDONESIA</h3>
            <p>Atria @ Sudirman 17th Floor. Jendral Sudirman, Kav. 33A, Karet Tengsin, Tanah Abang, Jakarta Pusat 10220</p>
          </div>
          <div className={styles.contact_detail}>
            <h3>Kontak</h3>
            <div className={styles.contact_layout}>
              <div className={styles.contact_box}>
                  <LuPhoneCall/>
                  <h5>(+6221) 5745854</h5>
              </div>
              <div className={styles.contact_box}>
                  <RxEnvelopeClosed/>
                  <h5>info@housefoods.co.id</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.section2_layout}>
          <img src="/images/contact_icon_2.png" alt="House Kari" className={styles.contact_icon_2}/>
          <div className={`${styles.section1_form} ${styles.section1_form_second}`}>
            <h1>Be a Partner</h1>
            <form>
              <div className={styles.form_field}>
                <label>Email</label>
                <input type="text" placeholder="Email"/>
              </div>
              <div className={styles.form_field}>
                <label>Company Name</label>
                <input type="text" placeholder="Company Name"/>
              </div>
              <div className={styles.form_field}>
                <label>Name</label>
                <input type="text" placeholder="Name"/>
              </div>
              <div className={styles.form_field}>
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number"/>
              </div>

              <div className={styles.form_field}>
                <label>Choose...</label>
                <div className={styles.custom_select}>
                  <div className={`${styles.select_value} ${isDropdownOpen1 ? styles.active : ''}`} onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}>
                    {selectedOption1} <IoChevronDownOutline/>
                  </div>
                  <div className={`${styles.options} ${isDropdownOpen1 ? styles.active : ''}`}>
                    {['Trading Company', 'Online Shop', 'Offline Distributor', 'HORECA'].map(option => (
                      <div 
                        key={option}
                        className={`${styles.option} ${selectedOption1 === option ? styles.activeOption : ''}`}
                        onClick={() => handleSelect(setSelectedOption1, setIsDropdownOpen1, option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.form_field}>
                <label>Company Address</label>
                <input type="text" placeholder="Company Address"/>
              </div>

              <div className={styles.form_field}>
                <label>How do you know House Kari ala Jepang?</label>
                <div className={styles.custom_select}>
                  <div className={`${styles.select_value} ${isDropdownOpen2 ? styles.active : ''}`} onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
                    {selectedOption2} <IoChevronDownOutline/>
                  </div>
                  <div className={`${styles.options} ${isDropdownOpen2 ? styles.active : ''}`}>
                    {['Online Advertising', 'Offline Advertising (KRL, Bis, Mobil)', 'Supermarket', 'E-commerce', 'Rekan Kerja / Teman', 'Other'].map(option => (
                      <div 
                        key={option}
                        className={`${styles.option} ${selectedOption2 === option ? styles.activeOption : ''}`}
                        onClick={() => handleSelect(setSelectedOption2, setIsDropdownOpen2, option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.form_field}>
                <label>Why are you interested in becoming a reseller?</label>
                <div className={styles.custom_select}>
                  <div className={`${styles.select_value} ${isDropdownOpen3 ? styles.active : ''}`} onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}>
                    <span>{selectedOption3}</span> <IoChevronDownOutline/>
                  </div>
                  <div className={`${styles.options} ${isDropdownOpen3 ? styles.active : ''}`}>
                    {['Pernah Membeli Kemasan Kecil dan Suka', 'Mengetahui target market untuk menu kari ala Jepang', 'Terdapat permintaan dari Customer', 'Mempunyai potensi yang baik di masa depan'].map(option => (
                      <div 
                        key={option}
                        className={`${styles.option} ${selectedOption3 === option ? styles.activeOption : ''}`}
                        onClick={() => handleSelect(setSelectedOption3, setIsDropdownOpen3, option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.section2_image}>
          <img src="/images/partner_image.png" alt="House Kari"/>
        </div>
      </div>
    </>
  );
}
