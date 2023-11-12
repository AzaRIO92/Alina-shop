import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';
import PaginationControlled from './Pagination';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const { getProducts, products } = useProducts();

  //   SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  //   SEARCH

  //   PAGINATION
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;

    return products.slice(begin, end);
  }
  //   PAGINATION

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <PaginationControlled
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </>
  );
};

export default ProductList;
