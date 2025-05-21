import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/productsData';

const Home = ({ addToCart }) => {
  const [activeFilter, setActiveFilter] = useState('');
  
  const categories = [
    { name: 'Смартфоны', icon: '📱', id: 'phones' },
    { name: 'Ноутбуки', icon: '💻', id: 'laptops' },
    { name: 'Техника для дома', icon: '🏠', id: 'home' },
    { name: 'ТВ и аудио', icon: '📺', id: 'tv' }
  ];

  const filters = [
    { name: 'Акции', tag: 'sale' },
    { name: 'Топ продаж', tag: 'top' },
    { name: 'Новинки', tag: 'new' }
  ];

  const filteredProducts = activeFilter
    ? products.filter(p => p.tags?.includes(activeFilter))
    : products;

  return (
    <div className="home-page">
      {/* Акционный баннер */}
      <div className="promo-banner">
        <div className="promo-content">
          <h2>Грандиозная распродажа!</h2>
          <p>Скидки до 70% на технику премиум-класса</p>
          <button className="promo-button">Подробнее</button>
        </div>
      </div>

      {/* Блок категорий */}
      <section className="categories-section">
        <h2 className="section-title">Популярные категории</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Фильтры */}
      <div className="filters-container">
        {filters.map(filter => (
          <button
            key={filter.tag}
            className={`filter-btn ${activeFilter === filter.tag ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.tag)}
          >
            {filter.name}
          </button>
        ))}
        <button 
          className="filter-btn"
          onClick={() => setActiveFilter('')}
        >
          Сбросить
        </button>
      </div>

      {/* Сетка товаров */}
      <section className="products-section">
        <h2 className="section-title">Рекомендуемые товары</h2>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;