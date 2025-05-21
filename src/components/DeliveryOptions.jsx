import { useState } from 'react';
import { Button, Radio, FormControlLabel, Paper } from '@mui/material';

const DeliveryOptions = () => {
  const options = [
    { id: 1, name: "Самовывоз", price: 0, time: "1-2 дня", details: "Заберёте из нашего магазина по адресу..." },
    { id: 2, name: "Курьером", price: 500, time: "1 день", details: "Доставка курьером до двери" },
    { id: 3, name: "Почта России", price: 300, time: "3-7 дней", details: "Отправка почтой с номером отслеживания" }
  ];

  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
      <h3 style={{ marginBottom: '20px' }}>Варианты доставки</h3>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {options.map(option => (
          <Paper 
            key={option.id}
            elevation={selectedOption === option.id ? 5 : 1}
            style={{ 
              padding: '20px',
              flex: '1 1 200px',
              cursor: 'pointer',
              border: selectedOption === option.id ? '2px solid #000' : '1px solid #ddd'
            }}
            onClick={() => setSelectedOption(option.id)}
          >
            <FormControlLabel
              control={<Radio checked={selectedOption === option.id} />}
              label={
                <div>
                  <div style={{ fontWeight: 'bold' }}>{option.name}</div>
                  <div>{option.price === 0 ? 'Бесплатно' : `${option.price} ₽`}</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{option.time}</div>
                </div>
              }
              labelPlacement="end"
              style={{ width: '100%' }}
            />
            
            {selectedOption === option.id && (
              <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                {option.details}
              </div>
            )}
          </Paper>
        ))}
      </div>
      
      <Button
        variant="contained"
        style={{ 
          backgroundColor: '#000',
          color: '#fff',
          marginTop: '20px'
        }}
      >
        Подтвердить выбор доставки
      </Button>
    </Paper>
  );
};

export default DeliveryOptions;