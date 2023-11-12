import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Paper, TextField } from '@mui/material';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Paper sx={{ p: 2 }} elevation={5}>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        fullWidth
        variant="standard"
        label="search..."
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams('category', e.target.value)}
        >
          <FormControlLabel value={'all'} control={<Radio />} label={'All'} />
          {categories.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.name}
              control={<Radio />}
              label={item.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default Sidebar;
