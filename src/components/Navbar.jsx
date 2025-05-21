import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      borderBottom: '1px solid #000'
    }}>
      <Link 
        to="/" 
        style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#000',
          textDecoration: 'none'
        }}
      >
        ElectroHub
      </Link>
      
      <Link 
        to="/cart" 
        style={{ 
          color: '#000',
          textDecoration: 'none'
        }}
      >
        Корзина ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;