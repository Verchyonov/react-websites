import React, { useCallback } from "react";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import jsonData from "../../../../public/cards/cards.json";

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
  height: "auto",
  bgcolor: "#A6B29B",
  border: "6px solid black",
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

  const currentObject = useCallback(() => {
    return (
      findById(props.card.id) || {
        id: -1,
        name: "Not found",
        description: "Not found",
      }
    );
  }, [props.card.id]);

  const findById = (id: number) => {
    return jsonData.find((item) => Number(item.id) === id);
  };

  console.log(currentObject);

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
          <Box
            position={"absolute"}
            top={5}
            right={5}
            sx={{ cursor: "default" }}
          >
            <button
              aria-label="close"
              className="p-2 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-default"
              onClick={handleClose}
            >
              <CloseIcon style={{ color: "black", fontSize: "2rem" }} />
            </button>
          </Box>
          <div className="flex lg:flex-row flex-col gap-4 justify-center min-w-[50vw] md:min-w-[30vw] h-full cursor-pointer">
            <div className="flex flex-col w-full lg:w-4/12 gap-2 me-auto justify-center content-center">
              <img className="h-fit object-contain" src={props.card.img} />
              <p className="text-black text-center text-2xl font-bold">
                {currentObject().name}
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-8/12 align-middle gap-4 text-center content-center justify-center">
              <p className="text-2xl">{currentObject().description}</p>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
