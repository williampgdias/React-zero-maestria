const Challenge = () => {
  const a = 5;
  const b = 10;
  const handleSomaDosNumeros = () => {
    console.log(a + b);
  };

  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={handleSomaDosNumeros}>Soma dos números</button>
    </div>
  );
};

export default Challenge;
