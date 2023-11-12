import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, API, API_CATEGORIES } from '../helpers/consts';

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  categories: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };

    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  //! READ
  const getProducts = async () => {
    const result = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: result.data });
  };

  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  // ! get one product
  const getOneProduct = async (id) => {
    const result = await axios.get(`${API}/${id}`);
    dispatch({ type: ACTIONS.GET_ONE_PRODUCT, payload: result.data });
  };

  //! Save changes
  const saveChanges = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate('/products');
  };

  const getCategories = async () => {
    const result = await axios.get(API_CATEGORIES);
    dispatch({ type: ACTIONS.GET_CATEGORIES, payload: result.data });
  };

  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getCategories();
  };

  // FILTER & SORT
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  // FILTER & SORT

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,

    getOneProduct,
    oneProduct: state.oneProduct,
    saveChanges,
    createCategory,

    getCategories,
    categories: state.categories,

    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
