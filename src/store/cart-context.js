import { createContext, useState } from "react";

const CartContext = createContext({
  carts: [],
  totalCarts: 0,
  addToCarts: (cartItem) => {},
  removeFromCarts: (cartItemId) => {},
  itemIsCarts: (cartItemId) => {},
});

export const CartsContextProvider = (props) => {
  const [userCarts, setUserCarts] = useState([]);

  const addToCartsHandler = (cartItem) => {
    setUserCarts((prevUserCarts) => {
      return prevUserCarts.concat(cartItem);
    });
  };

  const removeFromCartsHandler = (cartItemId) => {
    setUserCarts((prevUserCarts) => {
      return prevUserCarts.filter((cartItem) => cartItem.id !== cartItemId);
    });
  };

  const itemIsCartsHandler = (cartItemId) => {
    return userCarts.some((cartItem) => cartItem.id === cartItemId);
  };

  const context = {
    carts: userCarts,
    totalCarts: userCarts.length,
    addToCarts: addToCartsHandler,
    removeFromCarts: removeFromCartsHandler,
    itemIsCarts: itemIsCartsHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
