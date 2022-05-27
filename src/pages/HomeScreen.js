import Card from "../components/UI/Card";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    category: "Shirt",
    name: "Slim shirt",
    brand: "Nike",
    price: "$60",
    ratings: 4.5,
    numReviews: 12,
  },

  {
    id: "m2",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    name: "Slim fit",
    brand: "Nike",
    price: "$20",
    ratings: 1.5,
    numReviews: 4,
  },

  {
    id: "m3",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    name: "Causual",
    brand: "Nike",
    price: "$10",
    ratings: 2,
    numReviews: 1,
  },
  {
    id: "m4",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    name: "Slim fit",
    brand: "Nike",
    price: "$20",
    ratings: 1.5,
    numReviews: 4,
  },

  {
    id: "m5",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    name: "Causual",
    brand: "Nike",
    price: "$10",
    ratings: 2,
    numReviews: 1,
  },
  {
    id: "m6",
    image:
      "https:www.thefashionisto.com/wp-content/uploads/2019/09/HM-Slim-Fit-Jeans.jpg",
    name: "Slim fit",
    brand: "Nike",
    price: "$20",
    ratings: 1.5,
    numReviews: 4,
  },
];

const HomeScreen = () => {
  return (
    <ul className="products">
      {DUMMY_DATA.map((product) => (
        <Card>
          <li key={product.id}>
            <div className="product">
              <img
                src={product.image}
                alt="products"
                className="product-image"
              />
              <div className="product-name">
                <a href="product.html"> {product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">
                {product.ratings} Stars ({product.numReviews} Reviews)
              </div>
            </div>
          </li>
        </Card>
      ))}
    </ul>
  );
};

export default HomeScreen;
