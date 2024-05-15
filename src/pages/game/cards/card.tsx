import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import "./card.css";

export const Card = (props: any) => {
  const nodeRef = useRef(null);
  const helpIconRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={helpIconRef}
        in={props.card.isFlipped}
        timeout={300}
        classNames="help-icon-anim"
        unmountOnExit
      >
        <button
          ref={helpIconRef}
          className="absolute -top-[3.5rem] right-1/2 p-2 transform translate-x-1/2 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <LiveHelpIcon style={{ color: "black", fontSize: "2.5rem" }} />
        </button>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRef}
        in={props.card.isFlipped}
        timeout={500}
        classNames="card-anim"
      >
        <div
          className="card cursor-pointer rounded-md hover:scale-[1.02] transition-all duration-300 aspect-[4/7] w-[35vw] md:w-[25vw] lg:w-[10vw]"
          ref={nodeRef}
          onClick={() => {
            props.flipCard(props.card.id);
          }}
        >
          <img className="back" src="./game/back.webp" alt="1" />
          <img className="face" src={props.card.img} alt="2" />
        </div>
      </CSSTransition>
    </>
  );
};
