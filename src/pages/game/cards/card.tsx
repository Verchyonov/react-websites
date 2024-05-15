import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./card.css";

export const Card = (props: any) => {
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={props.card.isFlipped}
        timeout={500}
        classNames="card-anim"
      >
        <div
          className="card cursor-pointer rounded-md hover:scale-[1.02] transition-all duration-300"
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