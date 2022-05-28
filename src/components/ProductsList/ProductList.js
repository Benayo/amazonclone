import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <ul className={classes.products}>
      {props.data.map((products) => (
        <ProductItem
          key={products._id}
          id={products._id}
          image={products.image}
          name={products.name}
          brand={products.brand}
          price={products.price}
          ratings={products.ratings}
          numReviews={products.numReviews}
        />
      ))}
    </ul>
  );
};

export default ProductList;
