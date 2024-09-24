import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './modal.module.css';
import { bool, func, node } from "prop-types";
import { useEffect } from "react";
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { useMemo } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#modal");

export const Modal = ({ onClose, children, marker, open }) => {

  const element = useMemo(() => {
    const element = document.createElement('div');
    element.dataset.marker = marker;
    return element;
  }, [marker]);

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);
      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  useEffect(() => {
    window.addEventListener("keyup", (event) => {
      if (event.key !== "Escape") return;
      onClose();
    });
  }, [onClose]);

  if (open) {
    return createPortal(
      <div>
        <ModalOverlay onClick={onClose} />
        <section className={style.modal}>
          <div className={style.close__icon}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
          {children}
        </section>
      </div>,
      element
    );
  }
  return null;
};

Modal.propTypes = {
  open: bool,
  children: node,
  onClose: func,
};
