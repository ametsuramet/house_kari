import Head from "next/head";
import styles from '@/styles/CompanyHistory.module.css'
import banner from '@/styles/Banner.module.css'

export default function CompanyHistory() {
  return (
    <>
      <Head>
        <title>Company History</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className={banner.bannerStyle}>
        <img src="/images/company_history_banner.png" alt="House Kari Website"/>
      </div>
      <div className={banner.breadcrumbs}>
        <p>Home / Our Story / <span>Company History</span></p>
      </div>
      <div className={styles.bg_history}>
        <div className={styles.divider}></div>
        <img src="/images/pattern_history.png" alt="House Kari" className={styles.pattern_history} />
        <div className={styles.section1}>
          <div className={styles.section1_image}>
            <img src="/images/history_1.png" alt="House Kari"/>
          </div>
          <div className={styles.section1_content}>
            <h1 className={styles.historyHeading}>PERIODE TAISHO</h1>
            <h3 className={styles.historySubHeading}>Budaya Makanan Barat Mulai Masuk jepang</h3>
            <p className={styles.historyDesc}>Zaman Taisho dikenal dengan lahirnya grup keuangan dan bank dan lahirnya “pekerja kantoran.” Seiring dengan semakin meningkatnya urbanisasi, tiga jenis makanan Barat utama – croquette, tonkatsu (irisan daging babi), dan kari – mulai populer. Kemudian mulailah evoluasi makanan Jepang yang Diwesternisasi di Jepang.</p>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={styles.history_circle}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>1913</h1>
              <h3 className={styles.historySubHeading}>Tahun ke-2 Periode Taisho</h3>
              <p className={styles.historyDesc}>Berawal dari Seisuke Urakami, pendiri House Foods Group menbuat toko bahan obat kimia dan diberi nama “Urakami Shoten”. Melalui toko tersebut, Urakami mulai menjual bubuk kari pertama dalam kemasan botol kepada pelanggan. Bumbu sambal kari ala Jepang sanat mudah dan cepat</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_2.png" alt="House Kari"/>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <img src="/images/history_3.png" alt="House Kari"/>
          </div>
          <div className={styles.section_history_box_right}>
            <div className={styles.history_content}>
              <div className={styles.history_circle_right}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>1913</h1>
              <h3 className={styles.historySubHeading}>Tahun ke-2 Periode Taisho</h3>
              <p className={styles.historyDesc}>Berawal dari Seisuke Urakami, pendiri House Foods Group menbuat toko bahan obat kimia dan diberi nama “Urakami Shoten”. Melalui toko tersebut, Urakami mulai menjual bubuk kari pertama dalam kemasan botol kepada pelanggan. Bumbu sambal kari ala Jepang sanat mudah dan cepat</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bg_history_second}>
        <div className={styles.divider}></div>
        <img src="/images/history_border_left.png" alt="House Kari" className={styles.history_border_left} />
        <img src="/images/history_border_right.png" alt="House Kari" className={styles.history_border_right} />
        <img src="/images/history_icon_1.png" alt="House Kari" className={styles.history_icon_1} />
        <img src="/images/history_icon_2.png" alt="House Kari" className={styles.history_icon_2} />
        <div className={styles.section1}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section1_image}>
            <img src="/images/history_4.png" alt="House Kari"/>
          </div>
          <div className={styles.section1_content}>
            <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>PERIODE SHOWA AWAL</h1>
            <h3 className={`${styles.historySubHeading} ${styles.historySubHeadingWhite}`}>Budaya Layanan Makanan Barat</h3>
            <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>Secara perlahan makanan Barat pun mulai terkenal sebagai menu rumahan, tapi makanan Barat berkembang pesat akibat budaya ‘piknik’ di Jepang. Makanan Barat menjadi terkenal di restoran murah di penjuru negeri mereka.</p>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1928</h1>
              <h3 className={`${styles.historySubHeading} ${styles.historySubHeadingWhite}`}>Tahun ke-3 Periode Showa</h3>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>Seiring dengan berkembangnya bisnis kari “Home Currie”, sang istri, yaitu Yasuyo Urakami yang mengatakan bahwa “nama ‘Home’ kurang tepat dan bukanlah kata yang umum di Jepang pada saat itu, melainkan ‘House’-lah yang lebih pupuler”. Urakami terinspirasi dari kata-kata tersebut dan memutuskan untuk menganti nama “Home Currie” menjadi “House Currie”.</p>
            </div>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1947</h1>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>Seisuke Urakami mendirikan perusahaan dengan nama Urakami Food Industry Co., Ltd.</p>
            </div>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1949</h1>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>Urakami Food Industry Co., Ltd berganti nama menjadi House Curry Urakami Shoten Co., Ltd.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_5.png" alt="House Kari"/>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <img src="/images/history_6.png" alt="House Kari"/>
          </div>
          <div className={styles.section_history_box_right}>
            <div className={styles.history_content}>
              <div className={`${styles.history_circle_right} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1952</h1>
              <h3 className={`${styles.historySubHeading} ${styles.historySubHeadingWhite}`}>Produksi dan penjualan “Kari Rumahan” dimulai</h3>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>House Curry menggunakan promo melalui iklan truk yang dihias menyerupai kemasan produk “House Currie” dengan iringan music dan juga promosi melalui mikrofon.
              Jenis promosi seperti ini menjadi populer sampai ke penjuru negeri, sehingga banyak pelaku bisnis yang ingin melakukan promosi iklan truk untuk produknya.</p>
            </div>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1959</h1>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>House Curry Urakami Shoten Co.,Ltd. membuat Kari Roux pertama di pabrik Higashi Osaka dan diberi nama “Indo Currie” atau Indian Currie.</p>
            </div>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1960</h1>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>House Curry Urakami Shoten Co.,Ltd. berganti nama menjadi House Foods Industry Co., Ltd. dan meuncurkan Indo Currie sebagai Kari Roux Instan pertama di Jepang.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_7.png" alt="House Kari"/>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <img src="/images/history_8.png" alt="House Kari"/>
          </div>
          <div className={styles.section_history_box_right}>
            <div className={styles.history_content}>
              <div className={`${styles.history_circle_right} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1963</h1>
              <h3 className={`${styles.historySubHeading} ${styles.historySubHeadingWhite}`}>Tahun ke-38 Periode Showa Kelahiran “Kari Vermont”</h3>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>Pada tahun 1963, House Food menciptakan Kari yang memiliki rasa manis dengan merek “Vermount Curry” sehingga dapat dinikmati oleh anak-anak.
              Sejak kemunculannya, Vermount Curry memiliki banyak pengemar dan telah menjadi merek tepercaya dalam dunia masakan rumahan khas Jepang.</p>
            </div>
            <div className={styles.history_content}>
              <div className={`${styles.history_circle_right} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1968</h1>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>House Food meluncurkan varian rasa Kari pedas yaitu Java Curry. Java Curry menjadi Kari yang sangat populer dikalangan orang dewasa.</p>
            </div>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={`${styles.history_circle} ${styles.history_circle_white}`}>
                <div className={`${styles.history_circle_in} ${styles.history_circle_in_white}`}></div>
              </div>
              <h1 className={`${styles.historyHeading} ${styles.historyHeadingWhite}`}>1971</h1>
              <h3 className={`${styles.historySubHeading} ${styles.historySubHeadingWhite}`}>Tahun ke-46 Periode Showa Produk kari siap santap dalam kantung yang pertama dari House Foods</h3>
              <p className={`${styles.historyDesc} ${styles.historyDescWhite}`}>House Food meluncurkan produk Kari siap santap dalam kemasan atau retort dengan merek “Kukure Curry”. Kukure sendiri memiliki arti tanpa perlu di masak.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_9.png" alt="House Kari"/>
          </div>
        </div>
      </div>
      <div className={styles.bg_history_third}>
        <img src="/images/history_icon_3.png" alt="House Kari" className={styles.history_icon_3} />
        <img src="/images/history_icon_4.png" alt="House Kari" className={styles.history_icon_4} />
        <img src="/images/pattern_center.png" alt="House Kari" className={styles.pattern_center_history} />
        <div className={styles.section1}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section1_image}>
            <img src="/images/history_10.png" alt="House Kari"/>
          </div>
          <div className={styles.section1_content}>
            <h1 className={`${styles.historyHeading}`}>2007 - PERIODE HEISEI</h1>
            <h3 className={`${styles.historySubHeading}`}>Tahun ke-19 Periode Heisei Makanan Ruang Angkasa</h3>
            <p className={`${styles.historyDesc}`}>Salah satu dari tiga jenis produk kari ala Jepang siap santap yang dikembangkan dengan Japan Aerospace Exploration Agency (JAXA) khususnya untuk para Astronot Jepang, yang memperoleh sertifikat formal pada bulan Juni 2007, yang dipasarkan ke publik sebagai “Space Curry” (daging sapi). Agar dapat mendukung gaya hidup di luar angkasa, yang sangat berbeda dari di Bumi, dengan efek nol- gravitasi dan radiasi kosmik, kami menciptakan kari unik yang mengandung lebih banyak kunyit dan kalsium dan lebih kaya serta lebih pedas dari merek kari siap santap reguler.</p>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={styles.history_circle}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>2011</h1>
              <h3 className={styles.historySubHeading}>Tahun ke-23 Periode Heisei Peluncuran produk yang berguna selama bencana</h3>
              <p className={styles.historyDesc}>2011 adalah tahun gempa Bumi Hebat yang melanda Jepang bagian Timur. House Foods memperkenalkan kari yang tidak perlu dihangatkan untuk dimakan, dan bisa digunakan sebagai makanan darurat pada saat bencana. Kari ini, yang terbuat tanpa tujuh bahan khusus (telur, susu, gandum, soba (buckwheat/gandum kuda), kacang, udang, kepiting), tentunya dapat dimakan tanpa rasa khawatir oleh siapa saja dan tidak perlu banyak waktu untuk memasaknya, sangat bermanfaat untuk berbagai situasi.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_11.png" alt="House Kari"/>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <img src="/images/history_12.png" alt="House Kari"/>
          </div>
          <div className={styles.section_history_box_right}>
            <div className={styles.history_content}>
              <div className={styles.history_circle_right}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>2013</h1>
              <h3 className={styles.historySubHeading}>Tahun ke-25 Periode Heisei 50 tahun dari sejak peluncuran “Kari Vermont”</h3>
              <p className={styles.historyDesc}>Perayaan 50 tahun “Vermont Curry” yang sangat populer dikalangan anak-anak, bahkan seluruh sekolah di Jepang menyajikannya sebagai menu makan siang. Berdasarkan penelitian, 80% ibu rumah tangga di Jepang memasak Kari untuk keluarga lebih dari satu kali dalam seminggu. Oleh karena itu, Kari menjadi salah satu menu makanan nasional Jepang.</p>
            </div>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={styles.history_circle}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>2016</h1>
              <p className={styles.historyDesc}>House Foods masuk ke Indonesia melalui PT House And Vox Indonesia dan memproduksi Kari Jepang halal pertama di Indonesia dengan merek House Kari ala Jepang dengan ukuran 935g yang diproduksi di pabrik PT Java Agri Tech, Semarang.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_13.png" alt="House Kari"/>
          </div>
        </div>
        <div className={styles.section_history}>
          <img src="/images/history_border.png" alt="House Kaei" className={styles.history_border}/>
          <div className={styles.section_history_box_left}>
            <img src="/images/history_14.png" alt="House Kari"/>
          </div>
          <div className={styles.section_history_box_right}>
            <div className={styles.history_content}>
              <div className={styles.history_circle_right}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>2019</h1>
              <p className={styles.historyDesc}>Sejak kemunculannya, Kari Jepang cukup mendapatkan respon yang baik dari masyarakat Indonesia. Berdasarkan hasil survey tahun 2019, sebanyak 54% masyarakat Jabodetabek mengetahui dan menyukai Kari Jepang.</p>
            </div>
          </div>
        </div>
        <div className={styles.section_history}>
          <div className={styles.section_history_box_left}>
            <div className={styles.history_content_right}>
              <div className={styles.history_circle}>
                <div className={styles.history_circle_in}></div>
              </div>
              <h1 className={styles.historyHeading}>2020</h1>
              <p className={styles.historyDesc}>PT House And Vox Indonesia meluncurkan House Kari ala Jepang kemasan kecil yaitu 300g yang dapat dinikmati oleh keluarga. Dan di tahun yang sama, House Kari ala Jepang Spicy juga dihadirkan untuk para penggemar makanan pedas di Indonesia.</p>
            </div>
          </div>
          <div className={styles.section_history_box_right}>
            <img src="/images/history_15.png" alt="House Kari"/>
          </div>
        </div>
      </div>
    </>
  );
}
