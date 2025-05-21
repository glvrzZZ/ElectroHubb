import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="product-card"
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString()} ₽</p>
      </Link>
      
      <div className="product-buttons">
        <Button 
          variant="outlined" 
          onClick={() => addToCart(product)}
        >
          В корзину
        </Button>
        <Button 
          variant="contained" 
          style={{ backgroundColor: '#000', color: '#fff' }}
          onClick={() => addToCart(product)}
        >
          Купить
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;