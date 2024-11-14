import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";

import { useEffect } from "react";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#modal") as HTMLElement;

type TModalProps = {
  children: JSX.Element;
  onClose: () => void;
  title: string;
};

export const Modal = ({
  onClose,
  children,
  title,
}: TModalProps): React.JSX.Element => {
  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [onClose]);

  return createPortal(
    <div>
      <ModalOverlay onClick={onClose} />
      <section className={style.modal}>
        <div className={`${style.title__container} mt-10 ml-10 mr-10`}>
          <p className="text text_type_main-large">{title}</p>
        </div>
        <div className={style.close__icon}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </section>
    </div>,

    modalRootElement
  );
};
