import { useParams, Link } from "react-router-dom";
import classes from "./Product.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ProductScreen = (props) => {
  const { id } = useParams();
  console.log(id);
  const product = props.datas.find((x) => x.id === id);

  const cartsCtx = useContext(CartContext);
  const itemIsCart = cartsCtx.itemIsCarts(props.id);

  const toggleCartStatusHandler = () => {
    if (itemIsCart) {
      cartsCtx.removeFromCarts(props.id);
    } else {
      cartsCtx.addToCarts({
        id: props.id,
        name: props.name,
        brand: props.brand,
        category: props.category,
        price: props.price,
        ratings: props.ratings,
        numReviews: props.numReviews,
      });
    }
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
            <li>Status: {product.status}</li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button
                onClick={toggleCartStatusHandler}
                className={classes.button}
              >
                {itemIsCart ? "Remove from cart" : "Add to cart"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
