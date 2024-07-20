// import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useState, useEffect } from 'react';
// import banner from '@/styles/Banner.module.css';
// import Head from 'next/head';
// import axios from 'axios';
// import styles from '@/styles/Article.module.css';

// const API_RECIPE_DETAIL_URL = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_PAGE_URL || 'http://localhost:3000/api/article-detail';

// export async function getServerSideProps(context) {
//     const { id } = context.params;
  
//     try {
//       const response = await fetch(`${API_RECIPE_DETAIL_URL}/${id}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch product detail');
//       }
//       const recipe = await response.json();
  
//       console.log('Product Detail API Response:', recipe); // Log the API response
  
//       return {
//         props: {
//           ...(await serverSideTranslations(context.locale, ['common'])),
//           recipe,
//         },
//       };
//     } catch (error) {
//       console.error('Fetch product error:', error);
//       return {
//         props: {
//           ...(await serverSideTranslations(context.locale, ['common'])),
//           recipe: null,
//         },
//       };
//     }
// }

// export default function ArticleDetail() {
//     const { t, i18n } = useTranslation('common');
//     const router = useRouter();
//     const { id } = router.query;
//     const [loading, setLoading] = useState(true);
//     const [detail, setDetail] = useState(null);

//     useEffect(() => {
//         const fetchArticle = async () => {
//             if (id) {
//                 try {
//                     const response = await axios.get(`${API_RECIPE_DETAIL_URL}/${id}`);
//                     setDetail(response.data.data);
//                     setLoading(false);
//                     console.log('Fetched product:', response.data.data);
//                 } catch (error) {
//                     console.error('Error fetching product:', error);
//                     setLoading(false);
//                 }
//             }
//         };
      
//         fetchArticle();
//     }, [id]);

//     if (router.isFallback || loading) {
//         return <p>Loading...</p>;
//     }
    
//     if (!detail) {
//         return <p>Product not found</p>;
//     }

//     const getProductName = (detail) => {
//         switch (i18n.language) {
//             case 'en':
//                 return detail.title_en || detail.title;
//             case 'zh':
//                 return detail.title_chi || detail.title;
//             default:
//                 return detail.title;
//         }
//     };

//     const getProductCategory = (detail) => {
//         switch (i18n.language) {
//             case 'en':
//                 return detail.category.name_en || detail.category.name;
//             case 'zh':
//                 return detail.category_name_chi || detail.category.name;
//             default:
//                 return detail.category.name;
//         }
//     };

//     const getProductDesc = (detail) => {
//         switch (i18n.language) {
//             case 'en':
//                 return detail.text_en || detail.text;
//             case 'zh':
//                 return detail_text_chi || detail.text;
//             default:
//                 return detail.text;
//         }
//     };

//     const stripPTags = (html) => {
//         if (typeof html === 'string') {
//             return html.replace(/<\/?p[^>]*>/g, ''); // Remove both opening and closing <p> tags
//         }
//         return html;
//     };

//     const stripH1Tags = (html) => {
//         if (typeof html === 'string') {
//             return html.replace(/<\/?h1[^>]*>/g, ''); // Remove both opening and closing <h1> tags
//         }
//         return html;
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const options = { day: '2-digit', month: 'long', year: 'numeric' };
//         const formattedDate = date.toLocaleDateString('id-ID', options);
//         return formattedDate.replace(/\b(\w)/g, char => char.toUpperCase());
//     };

//     const stripTags = (html, tagName) => {
//         const regex = new RegExp(`<\/?${tagName}[^>]*>`, 'gi');
//         return html.replace(regex, '');
//     };

//     const stripAllTags = (html) => {
//         const tags = ['h1', 'p', 'strong', 'img', 'div'];
//         tags.forEach(tag => {
//             html = stripTags(html, tag);
//         });
//         return html;
//     };
    
//     const modifyImageURLs = (html) => {
//         const imgRegex = /<img\s+([^>]*src=['"]([^'"]+)['"][^>]*)>/gi;
//         return html.replace(imgRegex, (match, p1, p2) => {
//             const newSrc = `https://prahwa.net/storage/${p2}`;
//             return match.replace(p2, newSrc);
//         });
//     };

//     const modifiedContent = modifyImageURLs(stripAllTags(getProductDesc(detail)));

//     const pageTitle = detail ? `House Kari | ${stripH1Tags(getProductName(detail))}` : 'House Kari';

//     return (
//         <>
//         <Head>
//             <title>{pageTitle}</title>
//             <meta name="description" content="Learn more about us" />
//         </Head>
//         <div className={banner.bannerStyle}>
//             <img src="/images/recipe_banner.png" alt="House Kari Website"/>
//         </div>
//         <div className={banner.breadcrumbs}>
//             <p>{t('menu.home')} / {t('menu.recipe')} / <span>{stripH1Tags(getProductName(detail))}</span></p>
//         </div>
//         <div className={styles.sectionDetail}>
//             <img src="/images/article_detail_icon_2.png" alt="House Kari" className={styles.article_detail_icon_2}/>
//             <div className={styles.sectionDetail_image}>
//                 <img src={`https://prahwa.net/storage/${detail.image}`} alt={detail.name} />
//             </div>
//             <h1>{stripH1Tags(getProductName(detail))}</h1>
//             <h5 className={styles.articleDate}>{t('postedBy')} {detail.penulis} / {t('on')} {formatDate(detail.date)} / {t('in')} {(getProductCategory(detail))}</h5>
//             <div className={`${styles.sectionDetail_content}`}>
//                 <div dangerouslySetInnerHTML={{ __html: modifiedContent }}></div>
//             </div>
//             <div className={`${styles.sectionDetail_content} ${styles.sectionDetail_content_layout}`}>
//                 <img src="/images/gohan_image.png" alt="House Kari"/>
//                 <div className={styles.sectionDetail_double}>
//                     <h3>Takenoko gohan</h3>
//                     <p>Di Indonesia kita memiliki tumis atau sayur rebung, sementara di Jepang juga memiliki kuliner berbahan dasar tunas bambu, yaitu Takenoko gohan atau nasi bambu.
//                         <br/><br/>Mirip dengan proses memasak bambu di sini, tunas bambu yang mulai banyak bermunculan sekitar bulan Maret hingga Mei ini direbus terlebih dahulu untuk menghilangkan racun yang terkandung di dalamnya. Orang Jepang biasa menyajikannya langsung di atas nasi, ditambah sup miso, atau dijadikan tempura.
//                     </p>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import banner from '@/styles/Banner.module.css';
import Head from 'next/head';
import axios from 'axios';
import styles from '@/styles/Article.module.css';
import SlideArticlesSecond from "../components/slide_articles_second";
import SlideArticlesSecondMobile from "../components/slide_articles_second_mobile";

const API_RECIPE_DETAIL_URL = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_PAGE_URL || 'http://localhost:3000/api/article-detail';

export async function getServerSideProps(context) {
    const { id } = context.params;
  
    try {
      const response = await fetch(`${API_RECIPE_DETAIL_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product detail');
      }
      const recipe = await response.json();
  
      console.log('Product Detail API Response:', recipe); // Log the API response
  
      return {
        props: {
          ...(await serverSideTranslations(context.locale, ['common'])),
          recipe,
        },
      };
    } catch (error) {
      console.error('Fetch product error:', error);
      return {
        props: {
          ...(await serverSideTranslations(context.locale, ['common'])),
          recipe: null,
        },
      };
    }
}

export default function ArticleDetail({ recipe }) {
    const { t, i18n } = useTranslation('common');
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(recipe?.data || null);
    const [articlesSlide, setArticlesSlide] = useState([]);

    useEffect(() => {
        const fetchArticlesSlide = async () => {
            try {
              const response = await axios.get(`/api/list-article/`);
              setArticlesSlide(response.data.data); // Perhatikan pengaturan data detail di sini
              setLoading(false);
              console.log('Fetched product:', response.data.data);
            } catch (error) {
              console.error('Error fetching product:', error);
              setLoading(false);
            }
        };
      
        fetchArticlesSlide();
      }, [id]);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!recipe && id) {
                try {
                    const response = await axios.get(`${API_RECIPE_DETAIL_URL}/${id}`);
                    setDetail(response.data.data);
                    setLoading(false);
                    console.log('Fetched product:', response.data.data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id, recipe]);

    if (router.isFallback || loading) {
        return <p>Loading...</p>;
    }

    if (!detail) {
        return <p>Product not found</p>;
    }

    const getProductName = (detail) => {
        switch (i18n.language) {
            case 'en':
                return detail.title_en || detail.title;
            case 'zh':
                return detail.title_chi || detail.title;
            default:
                return detail.title;
        }
    };

    const getProductCategory = (detail) => {
        switch (i18n.language) {
            case 'en':
                return detail.category.name_en || detail.category.name;
            case 'zh':
                return detail.category.name_chi || detail.category.name;
            default:
                return detail.category.name;
        }
    };

    const getProductDesc = (detail) => {
        switch (i18n.language) {
            case 'en':
                return detail.text_en || detail.text;
            case 'zh':
                return detail.text_chi || detail.text;
            default:
                return detail.text;
        }
    };

    const stripTags = (html, tagName) => {
        const regex = new RegExp(`<\/?${tagName}[^>]*>`, 'gi');
        return html.replace(regex, '');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);
        return formattedDate.replace(/\b(\w)/g, char => char.toUpperCase());
    };

    const modifyImageURLs = (html) => {
        const imgRegex = /<img\s+([^>]*src=['"]([^'"]+)['"][^>]*)>/gi;
        return html.replace(imgRegex, (match, p1, p2) => {
            const newSrc = `https://prahwa.net/storage/${p2}`;
            return match.replace(p2, newSrc);
        });
    };

    const pageTitle = detail ? `House Kari | ${stripTags(getProductName(detail), 'h1')}` : 'House Kari';

    const formattedMeta = `POSTED BY : ${detail.penulis} / ON : ${formatDate(detail.date)} / IN : ${getProductCategory(detail)}`;

    const stripPTags = (html) => {
        if (typeof html === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          return tempDiv.textContent || tempDiv.innerText || '';
        } else {
          return '';
        }
      };

    const modifiedContent = modifyImageURLs(getProductDesc(detail));

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Learn more about us" />
            </Head>
            <div className={banner.bannerStyle}>
                <img src="/images/recipe_banner.png" alt="House Kari Website" />
            </div>
            <div className={banner.breadcrumbs}>
                <p>{t('menu.home')} / {t('menu.recipe')} / <span>{stripTags(getProductName(detail), 'h1')}</span></p>
            </div>
            <div className={styles.sectionDetail}>
                <img src="/images/article_detail_icon_2.png" alt="House Kari" className={styles.article_detail_icon_2} />
                <div className={styles.sectionDetail_image}>
                    <img src={`https://prahwa.net/storage/${detail.image}`} alt={detail.name} />
                </div>
                <h1>{stripTags(getProductName(detail), 'h1')}</h1>
                <h5 className={styles.articleDate}>{t('postedBy')} {detail.penulis} / {t('on')} {formatDate(detail.date)} / {t('in')} {(getProductCategory(detail))}</h5>
                <div className={styles.sectionDetail_content}>
                    <div dangerouslySetInnerHTML={{ __html: modifiedContent }}></div>
                </div> 
            </div>
            <div className={styles.sectionSlide}>
                <div className={styles.space_between_heading}>
                    <h1 className={styles.heading_main_white}>{t('otherRecipeList')}</h1>
                </div>
                <SlideArticlesSecond items={articlesSlide.map(detail => ({
                ...detail,
                    title: stripPTags(getProductName(detail)),
                }))} />
                <SlideArticlesSecondMobile items={articlesSlide.map(detail => ({
                    ...detail,
                    title: stripPTags(getProductName(detail)),
                }))} /> 
            </div>  
        </>
    );
}
