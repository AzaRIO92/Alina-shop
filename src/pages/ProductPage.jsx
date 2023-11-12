import React from 'react';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/product/Sidebar';

const ProductPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '300px', flex: 'none' }}>
        <Sidebar />
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
