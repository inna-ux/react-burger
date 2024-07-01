import { func } from "prop-types";
import style from "./modal-overlay.module.css";

function ModalOverlay  ({ onClick }) {
  <div onClick={onClick} className={style.modal__overlay}></div>
};

ModalOverlay.propTypes = {
  onClick: func,
};
export default ModalOverlay;