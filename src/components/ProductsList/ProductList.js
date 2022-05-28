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
// <Card>
//   <li key={product.id}>
//     <div className="product">
//       <img
//         src={product.image}
//         alt="products"
//         className="product-image"
//       />
//       <div className="product-name">
//         <a href="product.html"> {product.name}</a>
//       </div>
//       <div className="product-brand">{product.brand}</div>
//       <div className="product-price">{product.price}</div>
//       <div className="product-rating">
//         {product.ratings} Stars ({product.numReviews} Reviews)
//       </div>
//     </div>
//   </li>
// </Card>

export default ProductList;
