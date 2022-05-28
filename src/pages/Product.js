import { useParams, Link } from "react-router-dom";
import classes from "./Product.module.css";

const ProductScreen = (props) => {
  const { id } = useParams();

  console.log(id);
  const product = props.datas.find((x) => x._id === id);

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
              Price: <b>{product.price}</b>
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
              <button className={classes.button}>Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
