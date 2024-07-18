



import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_PRODUCT_DETAIL_URL = process.env.NEXT_PUBLIC_API_PRODUCT_DETAIL_URL || 'http://localhost:3000/api/product-detail';

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(`${API_PRODUCT_DETAIL_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product detail');
    }
    const product = await response.json();

    console.log('Product Detail API Response:', product); // Log the API response

    return {
      props: {
        ...(await serverSideTranslations(context.locale, ['common'])),
        product,
      },
    };
  } catch (error) {
    console.error('Fetch product error:', error);
    return {
      props: {
        ...(await serverSideTranslations(context.locale, ['common'])),
        product: null,
      },
    };
  }
}

const ProductDetailPage = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
          if (id) {
            try {
              const response = await axios.get(`${API_PRODUCT_DETAIL_URL}/${id}`);
              setDetail(response.data.data); // Perhatikan pengaturan data detail di sini
              setLoading(false);
              console.log('Fetched product:', response.data.data);
            } catch (error) {
              console.error('Error fetching product:', error);
              setLoading(false);
            }
          }
        };
      
        fetchProduct();
      }, [id]);
      

      if (router.isFallback || loading) {
        return <p>Loading...</p>;
      }
      
      if (!detail) {
        return <p>Product not found</p>;
      }
      
      const pageTitle = `House Kari | ${detail.name}`;
      
  
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content="Learn more about us" />
        </Head>
        <div className="breadcrumbs">
          <p>{t('menu.home')} / {t('menu.ourStory')} / <span>{t('menu.companyHistory')}</span></p>
        </div>
        <div className="product-detail-container">
          <h1>Product Detail</h1>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          <img src={`https://prahwa.net/storage/${detail.image}`} alt={detail.name} />
        </div>
      </>
    );
  };
  
  export default ProductDetailPage;