import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice, getLocalStorage, getProductsCountInCart } from "../helpers/functions";


export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength:getProductsCountInCart()
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!ф-я для получения продуктов добавленных в корзину из хранилища
  const getCart = () => {
    //!получения данных из localstorage
    let cart = getLocalStorage();

    //!проверка на наличие данных под ключом cart в localstr
    if (!cart) {
        //! помещаем данные в случае если в сart лежии null
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      //! перезваисываем переменную cart c null обьекта
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    //! обновляем состояние
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  //!ф-я для добавления товара в корзину
  const addProductToCart = (product) => {
    //!получаем содердимое из хранилища прд ключом cart
    let cart = getLocalStorage();
    //! проверка на существования данных в хрвнилища под ключом cart
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    //! cоздаем обьект который добавим а ls в массив cart
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    //! проверяем есть ли уже продукт который хотим. добавить в корзину
    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    //!еслт продукт уже добавлен в корзину то удаляем его из массива cart.products через фильтр в противном случае добавляем его cartproduct
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    //! пересчитываем totalPrice
    cart.totalPrice = calcTotalPrice(cart.products);
//! обнаения данные в ls
    localStorage.setItem("cart", JSON.stringify(cart));
    //! обновляем  состояние
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };
//!функция для проверки на наличие товара в корзине
  const checkProductInCart = (id)=> {
    let cart = getLocalStorage()

    if(cart){
        let newCart = cart.products.filter((elem)=> elem.item.id === id)
        return newCart.length > 0 ? true : false;
    }
  };

  // функция для изменения кол-ва товаров в корзине
  const changeProductCount = (id, count) => {
    // получаем данные корзины из local storage
    let cart = getLocalStorage();
    //перебираем массив с продуктами из корзины, и у продукта,  у которого id совпадает с тем id, что передали при вызове, перезаписываем кол-во и subPrice
    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    // пересчитываем totalPrice, так как кол-во и subprice поменялись
    cart.totalPrice = calcTotalPrice(cart.products);

    // помещаем в localStorage обновленные данные
    localStorage.setItem('cart', JSON.stringify(cart));

    // обновляем состояние корзины
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage();
    // фильтруем массив products, и оставляем только те продукты, у которых id не совпадает с id переданным при вызове функции
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    // пересчитываем totalPrice
    cart.totalPrice = calcTotalPrice(cart.products);

    // обновляем данные в хранилище
    localStorage.setItem('cart', JSON.stringify(cart));
    // обновляем состояние
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    })
  }

  const values = {
    getCart, 
    cart: state.cart, 
    addProductToCart, 
    checkProductInCart,
    changeProductCount,
    deleteProductFromCart,
    getProductsCountInCart
  };


  return <cartContext.Provider value={values}>
    {children}
    </cartContext.Provider>;
};

export default CartContextProvider;