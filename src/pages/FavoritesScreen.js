import { useContext } from "react";
import ProductList from "../components/ProductsList/ProductList";
import CartContext from "../store/cart-context";

const FavoritesScreen = () => {
  const cartCtx = useContext(CartContext);

  let content;

  if (cartCtx.totalCarts === 0) {
    content = <p>You got no favourites yet. Start adding!</p>;
  } else {
    content = <ProductList data={cartCtx.carts} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesScreen;
