import React from "react";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type CardModalProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;

  card: any;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "50vh",
  bgcolor: "background.paper",
  color: "text.primary",
  borderRadius: 3,
  boxShadow: 24,
  p: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const CardModal = (props: CardModalProps) => {
  const handleClose = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      className={!props.isOpen ? "pointer-events-none" : ""}
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
      <Fade in={props.isOpen}>
        <Box sx={style}>
          <Box position={"absolute"} top={5} right={5}>
            <IconButton aria-label="delete" onClick={handleClose} size="large">
              <CloseIcon />
            </IconButton>
          </Box>
          <div className="flex lg:flex-row flex-col gap-4 justify-center min-w-[50vw] md:min-w-[60vw] h-full">
            <div className="flex flex-col w-full lg:w-4/12 gap-8 me-auto justify-center">
              <img
                className="h-[35vh] object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                src={props.card.img}
              />
              <p className="text-black text-center text-2xl font-bold">
                {props.card.name}
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-8/12 align-middle gap-8">
              <p className="text-2xl">{props.card.description}</p>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
