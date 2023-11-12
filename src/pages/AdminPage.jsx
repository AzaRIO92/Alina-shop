import { Button } from '@mui/material';
import React from 'react';
import AddCategoryModal from '../components/product/AddCategoryModal';
import AddProduct from '../components/product/AddProduct';

const AdminPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Add Category</Button>

      <AddProduct />
      <AddCategoryModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
