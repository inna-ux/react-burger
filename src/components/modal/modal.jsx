import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './modal.module.css';
import { func, node } from "prop-types";
import { Portal } from '../portal/portal';
import ModalOverlay  from '../modal-overlay/modal-overlay';
import { useEffect } from "react";

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
      window.addEventListener("keyup", (event) => {
        if (event.key !== "Escape") return;
        onClose();
      });
    }, [onClose]);
  
    return (
      <Portal>
        <ModalOverlay onClick={onClose} />
        <section className={style.modal}>
          <div className={style.close__icon}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
          {children}
        </section>
      </Portal>
    );
  };
  
  Modal.propTypes = {
    children: node,
    onClose: func,
  };