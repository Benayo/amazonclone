import { useParams, Link } from "react-router-dom";
import classes from "./Product.module.css";
import { useContext, useState } from "react";
import CartItemContext from "../store/cartItem-context";

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  // const history = useHistory();
  const product = props.datas.find((x) => x.id === id);
  const cartCtx = useContext(CartItemContext);

  const submitHandler = (amount) => {
    cartCtx.addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
    });
    // history.push("/carts/" + id + "?qty=" + qty);
  };

  return (
    <div>
      <div className={classes.back}>
        <Link to="/">Back to result</Link>
      </div>
      <div className={classes.details}>
        <div className={classes.image}>
          <img className={classes.images} src={product.image} alt="img" />
        </div>
        <div className={classes.info}>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.ratings} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: $ <b>{product.price}</b>
            </li>
            <li>
              Description
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className={classes.action}>
          <ul>
            <li>Price: $ {product.price}</li>
            <li>
              Status: {product.countInStock > 0 ? "In stock" : "Out of stock"}
            </li>
            <li>
              Qty:
              <select
                value={qty}
                onChange={(event) => setQty(event.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </li>
            <li>
              {product.countInStock > 0 && (
                <button onClick={submitHandler} className={classes.button}>
                  + Add to cart
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
