import { useParams } from 'react-router-dom';
import { products } from '../utils/productsData';
import InstallmentOptions from '../components/InstallmentOptions';
import DeliveryOptions from '../components/DeliveryOptions';
import { Button, Tabs, Tab, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [tabValue, setTabValue] = useState(0);
  const [showDelivery, setShowDelivery] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!product) {
    return <Typography variant="h5" style={{ padding: '20px' }}>Товар не найден</Typography>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '20px 0' }}
    >
      <div style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              maxHeight: '500px', 
              objectFit: 'contain',
              border: '1px solid #000'
            }} 
          />
        </div>
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            {product.name}
          </Typography>
          <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            {product.price.toLocaleString()} ₽
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="contained" 
              style={{ 
                backgroundColor: '#000', 
                color: '#fff',
                padding: '12px 30px',
                borderRadius: 0,
                marginBottom: '20px'
              }}
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Добавить в корзину
            </Button>
          </motion.div>
        </div>
      </div>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Описание" />
          <Tab label="Доставка и оплата" />
        </Tabs>
      </Box>
      
      <div style={{ marginTop: '20px' }}>
        {tabValue === 0 && (
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
        )}
        
        {tabValue === 1 && (
          <div>
            <Button 
              variant="outlined"
              onClick={() => setShowDelivery(!showDelivery)}
              style={{ marginBottom: '20px' }}
            >
              {showDelivery ? 'Скрыть варианты' : 'Показать варианты доставки'}
            </Button>
            
            {showDelivery && <DeliveryOptions />}
            
            <InstallmentOptions price={product.price} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Product;