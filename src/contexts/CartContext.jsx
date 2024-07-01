import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalQuantity: state.totalQuantity + action.payload.quantity,
      };
    case REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.productId
      );
      const removedItem = state.items.find(
        (item) => item.id === action.payload.productId
      );
      const updatedQuantity =
        state.totalQuantity - (removedItem ? removedItem.quantity : 0);
      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedQuantity,
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalQuantity: 0,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalQuantity: 0,
  });

  const addToCart = (product, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { productId } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
