import Card from "../UI/Card";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ProductItem = (props) => {
  const cartsCtx = useContext(CartContext);
  const itemIsCart = cartsCtx.itemIsCarts(props.id);

  const toggleCartStatusHandler = () => {
    if (itemIsCart) {
      cartsCtx.removeFromCarts(props.id);
    } else {
      cartsCtx.addToCarts({
        id: props.id,
        image: props.image,
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
    <Card>
      <li key={props.id}>
        <div className={classes.product}>
          <Link to={"/products/" + props.id}>
            <img src={props.image} alt="products" className={classes.image} />
          </Link>
          <div className={classes.name}>
            <Link to={"/products/" + props.id}>{props.name}</Link>
          </div>
          <div className={classes.brand}>{props.brand}</div>
          <div className={classes.price}>$ {props.price}</div>
          <div className={classes.rating}>
            {props.ratings} Stars ({props.numReviews} Reviews)
          </div>
          <div>
            <button
              onClick={toggleCartStatusHandler}
              className={classes.button}
            >
              {itemIsCart ? "Remove from favorite" : "Add to favorite"}
            </button>
          </div>
          <div>
            <button className={classes.button}>+ Add to cart</button>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
