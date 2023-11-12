import { createTheme } from "@mui/material";

export const API = 'http://localhost:8000/products';

export const API_CATEGORIES = 'http://localhost:8000/categories';

export const ACTIONS = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_ONE_PRODUCT: 'GET_ONE_PRODUCT',
  GET_CART: 'GET_CART',
  GET_CATEGORIES: 'GET_CATEGORIES',
};

export const ADMIN = 'admin@admin.com';

export const THEME = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
});
