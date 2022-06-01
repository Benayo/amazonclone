import classes from "./CartScreen.module.css";

const CartScreen = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[
  //       {
  //         id: "c1",
  //         name: "Causual",
  //         brand: "Gucci",
  //         category: "Men",
  //         price: 120,
  //         ratings: 3,
  //         numReviews: 12,
  //       },
  //     ].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.key} className={classes.row}>
          <div className={classes["col-2"]}>{item.name}</div>
          <div className={classes["col-2"]}>
            <button onClick={() => onAddToCart(item)} className={classes.add}>
              +
            </button>
            <button
              onClick={() => onRemoveFromCart(item)}
              className={classes.remove}
            >
              -
            </button>
          </div>
          <div className={classes["col-3"]}>
            {item.qty} x $ {item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default CartScreen;
