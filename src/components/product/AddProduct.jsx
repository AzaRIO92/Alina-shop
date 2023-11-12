import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import CategorySelect from './CategorySelect';

const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    price: 0,
  });

  useEffect(() => {
    getCategories();
  }, []);

  console.log(product);

  const handleInput = (e) => {
    if (e.target.name === 'price') {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: '50vw', height: 500, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <CategorySelect handleInput={handleInput} categories={categories} />
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        type="number"
        label="Price"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button onClick={() => addProduct(product)} fullWidth variant="outlined">
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
