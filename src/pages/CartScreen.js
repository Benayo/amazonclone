import classes from "./CartScreen.module.css";

import { Link } from "react-router-dom";
const CartScreen = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className={classes.cart}>
      <div className={classes.list}>
        <ul className={classes.container}>
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          <li>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <div className={classes.frame} key={item.id}>
                  <div className={classes.images}>
                    <img
                      src={item.image}
                      alt="products"
                      className={classes.image}
                    />
                  </div>

                  <div className={classes.name}>
                    <Link to={"/products/" + item.id}>{item.name}</Link>
                    <div>
                      Qty: {item.qty} items
                      <div className={classes.buttons}>
                        <button
                          onClick={() => onAddToCart(item)}
                          className={classes.add}
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemoveFromCart(item)}
                          className={classes.remove}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={classes.price}>
                    {item.qty} x $ {item.price}
                  </div>
                </div>
              ))
            )}
          </li>
        </ul>
      </div>
      <div className={classes.action}>
        <h3>Subtotal : ${itemPrice}</h3>
        <button className={classes.primary} disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
