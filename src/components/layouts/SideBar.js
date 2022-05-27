import classes from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <aside className={classes.sidebar}>
      <h3>Shopping Catergories</h3>
      <button className={classes.closesidebar} onClick={props.onCancel}>
        x
      </button>
      <ul>
        <li>Pants</li>

        <li>Shirt</li>
      </ul>
    </aside>
  );
};

export default SideBar;

// <div className={classes.sidebar}>
//   <h3>Shopping categories</h3>
//   <button className={classes.sidebarclose}>x</button>
//   <ul>
//     <li>
//       <a href="index.html">Pants</a>
//     </li>

//     <li>
//       <a href="index.html">Shirts</a>
//     </li>
//   </ul>
// </div>
