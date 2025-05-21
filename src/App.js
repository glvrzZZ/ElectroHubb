import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Загрузка корзины
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Сохранение корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Добавление в корзину
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      return existing 
        ? prev.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1} 
              : item
          )
        : [...prev, {...product, quantity: 1}];
    });
  };

  // Удаление из корзины
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Изменение количества
  const updateQuantity = (productId, newQty) => {
    if(newQty < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? {...item, quantity: newQty} : item
      )
    );
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;