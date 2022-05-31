import { createContext, useReducer } from "react";

const CartItemContext = createContext({
  cartsItem: [],
  totalCartsAmount: 0,
  addToCart: (item) => {},
  removefromCart: (id) => {},
});

const defaultCartState = {
  cartsItem: [],
  totalCartsAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.cartsItem.concat(action.item);
    const updatedTotalAmount =
      state.totalCartsAmount + action.item.price * action.item.amount;
    return {
      cartsItem: updatedItem,
      totalCartsAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

export const CartsItemContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartsHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    cartsItem: cartState.cartsItem,
    totalCartsAmount: cartState.totalCartsAmount,
    addToCart: addItemToCartHandler,
    removefromCart: removeItemFromCartsHandler,
  };
  return (
    <CartItemContext.Provider value={cartContext}>
      {props.children}
    </CartItemContext.Provider>
  );
};

export default CartItemContext;
