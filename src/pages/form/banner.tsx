import { TextReg } from "../../common/text/text-reg";
import React, { useEffect, useMemo, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import type { DialogProps } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  width: "60vw",
  bgcolor: "#1B1D28",
  border: "6px solid white",
  color: "text.primary",
  borderRadius: 5,
  boxShadow: 24,
  maxHeight: "90vh",
  outline: "none",
  p: 2,
};

export const Banner = (props: any) => {
  const [open, setOpen] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleClose: DialogProps["onClose"] = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    if (!isButtonEnabled) return;
    setOpen(false);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 8 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Modal
        className={!open ? "pointer-events-none" : ""}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col items-center gap-2 min-h-screen p-16 w-full text-white text-center text-3xl form uppercase">
              <TextReg
                customClass={"text-5xl mb-12"}
                text={"$TOME Airdrop Instructions"}
              />
              <TextReg customClass={""} text={"1) ENTER YOUR SOL ADRESS "} />
              <TextReg customClass={""} text={"2) ENTER YOUR TWITTER @"} />
              <TextReg customClass={""} text={"3) FOLLOW @tarotofmeme"} />
              <TextReg
                customClass={"mb-6"}
                text={"4) MAKE A POST USING  $TOME, @tarotofmeme AND PICTURE "}
              />
              <TextReg
                customClass={""}
                text={"Example: I am wif $TOME @tarotofmem"}
              />
              <TextReg
                customClass={""}
                text={
                  "Twitter account should be 60+ days old and 40+ followers"
                }
              />
              <img
                className={
                  "w-full md:w-8/12 xl:w-4/12 my-auto cursor-pointer transition duration-500 ease-in-out transform " +
                  (isButtonEnabled ? "hover:scale-[1.1]" : " opacity-50")
                }
                // @ts-ignore
                onClick={handleClose}
                src="./form/enter.webp"
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
