import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./MainNavigation.module.css";

import SideBar from "./SideBar";

const MainNavigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);

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
          {/* amazon */}
        </div>
      </div>
      <nav>
        <ul className="header-links">
          <li>
            <Link to="/carts">Carts</Link>
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

// <header className="header">
//         <div className="brand">
//           <button onClick={openMenuHandler}>&#9776;</button>
//           <a href="index.html">amazon</a>
//         </div>
//         <div className="header-links">
//           <a href="cart.html">Cart</a>
//           <a href="signin">Sign In</a>
//         </div>
//       </header>
