import { useContext } from "react";
import ProductList from "../components/ProductsList/ProductList";
import CartContext from "../store/cart-context";

const CartScreen = () => {
  const cartCtx = useContext(CartContext);

  let content;

  if (cartCtx.totalCarts === 0) {
    content = <p>You got no carts yet!</p>;
  } else {
    content = <ProductList data={cartCtx.carts} />;
  }

  return (
    <section>
      <h1>My Carts</h1>
      {content}
    </section>
  );
};

export default CartScreen;
