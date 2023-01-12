import React from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};



const Backdrop = (props) => {

  const handleClick = () => {
    if (props.onDidReserve) {
      props.onClearCart()
      props.onHideCart()
    }
    props.onHideCart(props.onDidReserve)
  };

  return <div className={classes.backdrop} onClick={handleClick}/>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart} onDidReserve={props.onDidReserve} onClearCart={props.onClearCart}/>, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
