import React from 'react';

const Container = ({ children }) => {
  return <div style={{ backgroundColor: '#000', padding: '20px', display: 'grid', gridTemplateColumns: 'auto auto' }}>{children}</div>;
};

export default Container;
