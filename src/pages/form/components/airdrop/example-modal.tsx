import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";
import { Tweet } from "react-twitter-widgets";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "text.primary",
  borderRadius: 3,
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ExampleModal = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e: any) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <button
        className="text-white w-1/2 text-center lg:text-lg flex justify-center items-center bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-4 py-3 transition-transform duration-75 ease-in-out cursor-pointer"
        onClick={handleOpen}
      >
        <RemoveRedEyeIcon className="mr-1" />
        Example
      </button>
      <Modal
        className={"form uppercase " + (!open ? "pointer-events-none" : "")}
        keepMounted
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
            <Box position={"absolute"} top={5} right={5}>
              <button
                aria-label="close"
                className="p-2 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                onClick={handleClose}
              >
                <CloseIcon style={{ color: "black", fontSize: "2rem" }} />
              </button>
            </Box>
            <h2 className="text-3xl font-bold text-center">Example</h2>
            <div className="w-full light updated-dark">
              <Tweet tweetId={"1791234180195418453"} />
            </div>
            <h3 className="lg:text-lg font-bold text-center mb-2">
              Feel free to add any image or text
            </h3>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
