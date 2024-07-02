import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedItemsAdd = [...state.items, action.payload];
      return {
        ...state,
        items: updatedItemsAdd,
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalPrice: calculateTotalPrice(updatedItemsAdd),
      };
    case REMOVE_FROM_CART:
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: updatedItemsRemove,
        totalQuantity: state.totalQuantity - action.payload.quantity,
        totalPrice: calculateTotalPrice(updatedItemsRemove),
      };
    case UPDATE_CART_QUANTITY:
      const updatedItemsQuantity = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItemsQuantity,
        totalQuantity: updatedItemsQuantity.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        totalPrice: calculateTotalPrice(updatedItemsQuantity),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });

  const addToCart = (product, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
  };

  const removeFromCart = (id) => {
    const item = state.items.find((item) => item.id === id);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id, quantity: item.quantity },
    });
  };

  const updateCartQuantity = (id, quantity) => {
    dispatch({ type: UPDATE_CART_QUANTITY, payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
