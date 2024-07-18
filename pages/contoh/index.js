import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

import { Pagination, Autoplay } from 'swiper/modules';

const Contoh = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // State untuk menyimpan indeks tab aktif

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/recipe-categories');
        const categoriesData = response.data.data;
        setCategories(categoriesData);
        if (categoriesData.length > 0) {
          setSelectedCategory(categoriesData[0].id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!selectedCategory) return;
      try {
        const response = await axios.get(`/api/recipeByCategories/${selectedCategory}`);
        setRecipes(response.data.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  const handleTabClick = (index) => {
    setActiveTab(index); // Mengatur tab aktif saat diklik
  };

  return (
    <div>
      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setActiveTab(0); // Reset tab aktif ke tab pertama saat kategori dipilih
            }}
            className={selectedCategory === category.id ? 'active' : ''}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="tabContent" style={{backgroundColor: "green"}}>
        {recipes.length > 0 && (
          <Swiper
          slidesPerView={3}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiperRecipe"
        >
          {recipes.map(recipe => (
            <SwiperSlide key={recipe.id}>
              <div className='slideItemRecipe'>
                <div className='imageRecipe'>
                  <img src={`https://prahwa.net/storage/${recipe.image}`} alt={recipe.title} />
                </div>
                <div className='contentRecipe'>
                  <h1>{recipe.title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: recipe.description }}></p>
                  <Link href={`/product/${recipe.id}`}><button>Learn More</button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>        
        )}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          margin-bottom: 20px;
        }
        .tabs button {
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
        }
        .tabs button.active {
          background-color: #ddd;
        }
        .tabContent {
          margin-top: 20px;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide img {
          width: 100%;
          max-width: 300px;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Contoh;
