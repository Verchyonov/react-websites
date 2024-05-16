import React, { useCallback } from "react";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import jsonData from "../../../../public/cards/cards.json";
import { CloseIcon } from "../../../common/icons/close-icon";

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
  borderRadius: 1,
  boxShadow: 24,
  maxHeight: "90vh",
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function Description({ text }: { text: string }) {
  const sentences = text.split(/(?<=\.)/g).filter(Boolean);

  const content = sentences.map((sentence, index) => (
    <React.Fragment key={index}>
      {sentence}
      {index < sentences.length - 1 && (
        <>
          {" "}
          <br />
          <br />
        </>
      )}
    </React.Fragment>
  ));

  return (
    <p className="flex justify-center text-sm md:text-2xl leading-normal lg:leading-[2.5rem] text-pretty items-center">
      {content}
    </p>
  );
}

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

  return (
    <Modal
      className={(!props.isOpen ? "pointer-events-none" : "") + ""}
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
          <div className="absolute top-2.5 right-2.5 z-50">
            <button
              className="p-2 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon iconClass={"w-6 h-6 md:w-10 md:h-10"} />
            </button>
          </div>
          <div className="py-2 md:py-8 flex lg:flex-row flex-col gap-4 justify-center min-w-[70vw] md:min-w-[45] xl:min-w-[35vw] h-full cursor-pointer uppercase font-bold text-pretty">
            <div className="flex flex-col w-full lg:w-4/12 gap-2 justify-center items-center overflow-y-auto">
              {/* <p className="text-black text-center text-lg lg:text-xl font-extrabold ">
                {currentObject().name}
              </p> */}
              <img
                className="w-[30vw] xl:w-fit object-contain"
                src={props.card.img}
              />
            </div>
            <div className="relative w-full lg:w-8/12 align-top gap-4 text-center content-center justify-center">
              <Description text={currentObject().description} />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
