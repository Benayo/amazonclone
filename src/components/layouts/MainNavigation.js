import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./MainNavigation.module.css";

import SideBar from "./SideBar";

const MainNavigation = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { countCartItems } = props;

  const toggleSideBarHandler = () => {
    setShowSideBar(true);
  };
  const toggleCloseSideBarHandler = () => {
    setShowSideBar(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <button className={classes.open} onClick={toggleSideBarHandler}>
          &#9776;
        </button>

        {showSideBar && <SideBar onCancel={toggleCloseSideBarHandler} />}
        <div className={classes.logo}>
          <Link to="/">amazon</Link>
        </div>
      </div>
      <nav>
        <ul className="header-links">
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className={classes.button}>
            <Link to="/carts/:id">Your Cart</Link>
            <span className={classes.badge}>{countCartItems}</span>
          </li>

          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
