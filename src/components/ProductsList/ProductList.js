import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <ul  className={classes.products}>
      {props.data.map((products) => (
        <ProductItem

          key={products.id}
          id={products.id}
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
