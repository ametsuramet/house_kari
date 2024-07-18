// pages/product/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export async function getStaticPaths() {
    try {
      const response = await fetch('http://localhost:3000/api/product');
      const data = await response.json();
  
      console.log('API Response:', data);
  
      if (!Array.isArray(data) || data.length === 0) {
        console.error('Invalid data format or empty response:', data);
        return {
          paths: [],
          fallback: false,
        };
      }
  
      const paths = data.map((product) => ({
        params: { id: product.id.toString() },
      }));
  
      return {
        paths,
        fallback: false,
      };
    } catch (error) {
      console.error('Fetch product IDs error:', error);
      return {
        paths: [],
        fallback: false,
      };
    }
  }
  

export async function getStaticProps({ locale, params }) {
  const { id } = params;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      productId: id,
    },
  };
}

const ProductDetailPage = ({ productId }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product-detail/${productId}`);
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Fetch product error:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const pageTitle = product ? `House Kari | ${product.name}` : 'House Kari';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <div className="breadcrumbs">
        <p>{t('menu.home')} / {t('menu.ourStory')} / <span>{t('menu.companyHistory')}</span></p>
      </div>
      <div>
        <h1>Product Detail</h1>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img src={`https://prahwa.net/${product.image}`} alt={product.name} />
        <p>Category: {product.category.name}</p>
        <p>E-commerce Links: {product.ecommerce_links}</p>
      </div>
    </>
  );
};

export default ProductDetailPage;
