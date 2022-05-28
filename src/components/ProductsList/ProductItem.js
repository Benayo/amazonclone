import Card from "../UI/Card";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
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
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
