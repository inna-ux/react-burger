import React from "react";
import { func } from "prop-types";
import style from "./modal-overlay.module.css";


export const ModalOverlay = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.modal__overlay}></div>
  )
};

ModalOverlay.propTypes = {
  onClick: func,
};
