import classes from "./CartScreen.module.css";

const CartScreen = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Causual",
          brand: "Gucci",
          category: "Men",
          price: 120,
          ratings: 3,
          numReviews: 12,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Back</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default CartScreen;
