import "./App.css";

import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/Product";
import Layout from "./components/layouts/layout";
import MainNavigation from "./components/layouts/MainNavigation";
import Footer from "./components/layouts/Footer";
import FavoritesScreen from "./pages/FavoritesScreen";
import CartScreen from "./pages/CartScreen";
import { CartsItemContextProvider } from "./store/cartItem-context";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://dummyproject-31624-default-rtdb.firebaseio.com/products.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          name: data[key].name,
          image: data[key].image,
          brand: data[key].brand,
          category: data[key].category,
          price: data[key].price,
          ratings: data[key].ratings,
          numReviews: data[key].numReviews,
          countInStock: data[key].countInStock,
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="loading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="error">
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <CartsItemContextProvider>
      <Layout>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <HomeScreen datas={products} />
          </Route>
          <Route path="/products/:id">
            <ProductScreen datas={products} />
          </Route>
          <Route path="/favorites">
            <FavoritesScreen />
          </Route>
          <Route path="/carts/:id">
            <CartScreen />
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </CartsItemContextProvider>
  );
};

export default App;
