import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderSummary from "./HeaderSummary";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={classes.navigation}>
        <div className={classes['navigation-spacing']}>
          <h3>Free Library</h3>
          <HeaderCartButton onShowCart={props.onShowCart}/>
        </div>
      </div>
      <div>
        <HeaderSummary />
      </div>
    </header>
  );
};

export default Header;
