import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useCart } from '../../contexts/CartContextProvider';


const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex'
};

export default function Detail({image, title, category, description, price, open, handleClose, item}) {
  const {checkProductInCart, addProductToCart} = useCart()
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
            <div><img width={300} src={image} alt="" /></div>
            <div><h1>{title}</h1>
            <p>description: {description}</p>
            <p>category: {category}</p>
            </div>
            <div style={{marginTop: 'auto'}}>
              {checkProductInCart(item.id) ? (<Button disabled={true}>Already in cart</Button>) : (<Button onClick={()=>addProductToCart(item)}>Buy for {price}$</Button>)}
              </div>
        </Box>
      </Modal>
    </div>
  );
}