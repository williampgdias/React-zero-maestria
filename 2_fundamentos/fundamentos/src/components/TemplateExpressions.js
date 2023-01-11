const TemplateExpressions = () => {
  const name = 'William';
  const data = {
    age: 33,
    currentJob: 'Chef',
    futureJob: 'Web Developer',
    anosDeEstudo: 2,
  };

  return (
    <div>
      <h1>Olá, {name}. Tudo bem?</h1>
      <p>
        Você atua como {data.currentJob}, mas está estudando há {data.anosDeEstudo} anos e esse ano você vai conseguir um emprego de {data.futureJob}
      </p>
    </div>
  );
};

export default TemplateExpressions;
