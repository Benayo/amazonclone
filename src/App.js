import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/Product";

import Layout from "./components/layouts/layout";
import MainNavigation from "./components/layouts/MainNavigation";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <Layout>
      <MainNavigation />
      <main className="main">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/products/:id">
              <ProductScreen />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
