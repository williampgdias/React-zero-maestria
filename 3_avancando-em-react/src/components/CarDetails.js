const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <div>
        <h2>Detalhes do carro</h2>
        <ul>
          <li>
            Marca: <span>{brand}</span>
          </li>
          <li>
            KM: <span>{km}</span>
          </li>
          <li>
            Cor: <span>{color}</span>
          </li>
        </ul>
        {newCar && <p>Este carro é novo</p>}
      </div>
    </div>
  );
};

export default CarDetails;
