import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../../contexts/CartContextProvider';
import { Button, TextField } from '@mui/material';


export default function Cart() {
    const {cart, getCart, changeProductCount, deleteProductFromCart} = useCart()

    React.useEffect(() => {
        getCart();
    }, [])
    
  
    const cartCleaner = () => {
      localStorage.removeItem('cart');
      getCart();
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.image} alt="" width={'70'} />
              </TableCell>
              <TableCell align="right">{row.item.title}</TableCell>
              <TableCell align="right">{row.item.category}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
                <input onChange={(e) => changeProductCount(row.item.id, e.target.value )} type="number" value={row.count} min={1} max={20}/>
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteProductFromCart(row.item.id)}>DELETE</Button>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={cartCleaner}>BUY NOW FOR {cart.totalPrice}</Button>
    </TableContainer>
  );
}