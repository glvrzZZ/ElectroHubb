import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '10px' }}>Корзина</h2>
      
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 0',
                borderBottom: '1px solid #eee'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }} 
                />
                <div>
                  <h4 style={{ margin: 0 }}>{item.name}</h4>
                  <p style={{ margin: '5px 0' }}>{item.price.toLocaleString()} ₽</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </Button>
                <Button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: '15px', color: '#f44336' }}
                >
                  Удалить
                </Button>
              </div>
            </motion.div>
          ))}
          
          <div style={{ marginTop: '30px', textAlign: 'right' }}>
            <h3>Итого: {total.toLocaleString()} ₽</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;