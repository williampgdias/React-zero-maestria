import './App.css';
import Cars from './components/Cars';
import Container from './components/Container';

function App() {
  const cars = [
    {
      id: 1,
      brand: 'Fiat',
      color: 'Blue',
      km: '10.000',
    },
    {
      id: 2,
      brand: 'Ford',
      color: 'Green',
      km: '5.468',
    },
    {
      id: 3,
      brand: 'BMW',
      color: 'Gold',
      km: '0.0',
    },
    {
      id: 4,
      brand: 'SEAT',
      color: 'Silver',
      km: '140.000',
    },
  ];

  return (
    <div className='App'>
      <h1>Carros a Venda</h1>
      <Container>
        {cars.map((car) => (
          <Cars key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}
      </Container>
    </div>
  );
}

export default App;
