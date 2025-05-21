import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import DeliveryOptions from '../components/DeliveryOptions';

const CartPage = ({ 
  cartItems, 
  removeFromCart, 
  updateQuantity 
}) => {
  return (
    <div style={{ padding: '20px 0' }}>
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      
      {cartItems.length > 0 && (
        <>
          <DeliveryOptions />
          
          <div style={{ marginTop: '30px', textAlign: 'right' }}>
            <Link 
              to="/checkout" 
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Оформить заказ
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;