import React from 'react';

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>My name is {name}</h2>
      <p>I am a {job}</p>
      <p>I am {age} years</p>

      {/* Condicional para ver se pode dirigir ou nÃ£o */}
      {age >= 18 ? <p>Wohoo... I can drive!! ð</p> : <p>I can't drive! ð</p>}
    </div>
  );
};

export default UserDetails;
