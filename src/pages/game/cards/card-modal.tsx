import { Backdrop, Modal } from "@mui/material";
import React from "react";

type CardModalProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  body: JSX.Element;
  card: any;
};

export const CardModal = (props: CardModalProps) => {
  const handleClose = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      className={!open ? "pointer-events-none" : ""}
      keepMounted
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <div className="flex lg:flex-row flex-col gap-4 justify-center">
        <div className="flex flex-col gap-8 justify-center">
          <img className="w-30vw object-contain" src={props.card.img} />
          <p className="text-black text-center text-2xl font-bold">
            {props.card.name}
          </p>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <p className="text-2xl">{props.card.description}</p>
        </div>
      </div>
    </Modal>
  );
};
