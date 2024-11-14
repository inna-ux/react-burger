import React from "react";
import style from "./modal-overlay.module.css";

type TModalOverlaylProps = {
  onClick: (() => void);
}


export const ModalOverlay = ({ onClick }: TModalOverlaylProps): React.JSX.Element => {
  return <div onClick={onClick} className={style.modal__overlay}></div>;
};

