import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ padding: '20px 0' }}
    >
      <h1 style={{ borderBottom: '1px solid #000', paddingBottom: '10px' }}>Оформление заказа</h1>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
        <div style={{ flex: 1 }}>
          <h2>Контактные данные</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField
              label="ФИО"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
            
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />
            
            <TextField
              label="Телефон"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              variant="outlined"
            />
            
            <TextField
              label="Адрес доставки"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              variant="outlined"
              multiline
              rows={4}
            />
          </form>
        </div>
        
        <div style={{ flex: 1 }}>
          <h2>Ваш заказ</h2>
          
          <div style={{ border: '1px solid #000', padding: '20px' }}>
            {cartItems.map(item => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom: '1px solid #eee'
                }}
              >
                <span>{item.name} × {item.quantity}</span>
                <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
              </div>
            ))}
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '20px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              <span>Итого:</span>
              <span>{total.toLocaleString()} ₽</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ marginTop: '30px' }}
            >
              <Button
                fullWidth
                variant="contained"
                style={{ 
                  backgroundColor: '#000', 
                  color: '#fff',
                  padding: '12px',
                  borderRadius: 0
                }}
              >
                Подтвердить заказ
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;