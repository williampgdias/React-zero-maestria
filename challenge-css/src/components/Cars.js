import styles from './Cars.module.css';

const Cars = ({ brand, color, km }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>cars details:</h3>
        <p>Brand: {brand}</p>
        <p>Color: {color}</p>
        <p>KM: {km}</p>
      </div>
    </>
  );
};

export default Cars;
