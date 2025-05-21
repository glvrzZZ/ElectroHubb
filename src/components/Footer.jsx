import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px 0',
        marginTop: 'auto'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px' }}>ElectroHub</h3>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px',
          marginBottom: '20px'
        }}>
          <div>
            <h4>Контакты</h4>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Email: info@ElectroHub.ru</p>
          </div>
          
          <div>
            <h4>Адрес</h4>
            <p>Москва, ул. Чёрно-Белая, д. 1</p>
            <p>Ежедневно с 10:00 до 20:00</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #fff', paddingTop: '20px' }}>
          <p>© {new Date().getFullYear()} ElectroHub Все права защищены</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;