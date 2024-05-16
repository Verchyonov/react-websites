import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./card.css";
import { CardModal } from "./card-modal";
import { InfoIcon } from "../../../common/icons/info-icon";

export const Card = (props: any) => {
  const nodeRef = useRef(null);
  const helpIconRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CardModal
        card={props.card}
        isOpen={showModal}
        setIsOpen={setShowModal}
      />
      <div className="min-h-[3.5rem] md:min-h-0 w-full">
        <CSSTransition
          nodeRef={helpIconRef}
          in={props.card.isFlipped}
          timeout={300}
          classNames="help-icon-anim"
          unmountOnExit
        >
          <button
            onClick={() => {
              setShowModal(true);
            }}
            ref={helpIconRef}
            className="flex md:absolute -top-[3.5rem] min right-1/2 p-2 transform translate-x-1/2 hover:scale-110 transition-transform duration-300 ease-in-out cursor-default"
          >
            <InfoIcon iconClass="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </CSSTransition>
      </div>
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
