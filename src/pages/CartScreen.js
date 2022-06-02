import classes from "./CartScreen.module.css";

const CartScreen = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const taxPrice = itemPrice * 0.14;

  const shippingPice = itemPrice > 2000 ? 0 : 50;

  const totalPrice = itemPrice + taxPrice + shippingPice;
  return (
    // <div>
    //   <div className={cartItems.list}>
    //     <ul className={classes.container}>
    //       <li>
    //         <h3>Shopping Cart</h3>
    //         <div>Price</div>
    //       </li>
    //       {cartItems}
    //     </ul>
    //   </div>
    //   {cartItems.length === 0 ? (
    //     <div>Cart is empty</div>
    //   ) : (
    //     cartItems.map((item) => (
    //       <div key={item.id}>
    //         <img src={item.image} />
    //         <div className="cart-name">
    //           <div>{item.name}</div>
    //           <div>
    //             Qty:{" "}
    //             <select>
    //               <option value="1">1</option>
    //               <option value="2">2</option>
    //               <option value="3">3</option>
    //             </select>
    //           </div>
    //         </div>
    //         <div>{item.price}</div>
    //       </div>
    //     ))
    //   )}
    // </div>
    <div className={classes.cart}>
      <div className={cartItems.list}>
        <ul className={classes.container}>
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.totalPrice}
        </ul>
      </div>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className={classes.row}>
          <img src={item.image} alt="products" />
          <div className={classes.name}>{item.name}</div>
          <div className={classes.buttons}>
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
          <div className={classes.text}>
            {item.qty} x $ {item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div className={classes.actions}>
          <hr></hr>

          <div className={classes.row}>
            <div className={classes.price}>Item Price</div>
            <div className={classes.results}>${itemPrice.toFixed(2)}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.price}>Tax Price</div>
            <div className={classes.results}>${taxPrice.toFixed(2)}</div>
          </div>
          <div className={classes.row}>
            <strong> Total Price</strong>
            <div className={classes.results}>${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div>
            <button
              className={classes.primary}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
