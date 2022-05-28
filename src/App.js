import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/Product";

import Layout from "./components/layouts/layout";
import MainNavigation from "./components/layouts/MainNavigation";
import Footer from "./components/layouts/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://dummyproject-31624-default-rtdb.firebaseio.com/products.json"
      );

      const data = await res.json();

      console.log(data);

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          _id: key,
          name: data[key].name,
          image: data[key].image,
          brand: data[key].brand,
          category: data[key].category,
          price: data[key].price,
          ratings: data[key].ratings,
          numReviews: data[key].numReviews,
        });
      }

      setProducts(loadedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <HomeScreen datas={products} />
        </Route>
        <Route path="/products/:id">
          <ProductScreen datas={products} />
        </Route>
      </Switch>
      <Footer />
    </Layout>
  );
};

export default App;
