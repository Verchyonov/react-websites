import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import { Card } from "./card";

type Card = {
  id: number;
  img: string;
  isFlipped: boolean;
  description: string;
};

const cardsStack = Array.from({ length: 78 }, (_, i) => {
  return {
    id: i,
    img: `./cards/cardio_${i}.webp`,
    isFlipped: false,
    description: "test",
  } as Card;
}) as Card[];

export const Cards = () => {
  const controls = useAnimationControls();
  let audio = new Audio("./sound2.wav");
  let audio2 = new Audio("./sound.wav");
  const getRandomCards = (): any => {
    let shuffled = Array.from(cardsStack);

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 4);
  };

  let animationProps = {
    initial: { rotateY: 180 },
    animate: { rotateY: 170, transition: { duration: 3 } },
    exit: { rotateY: 170, transition: { duration: 3 } },
  };

  //   const [isVisible, setIsVisible] = useState(false);
  const [isDealt, setIsDealt] = useState(true);
  const [cards, setCards] = useState<Card[]>(getRandomCards());

  const onDeckPress = () => {
    if (isDealt) {
      //REMOVE CARDS
      controls.start({
        x: "-2000px",
        y: "0",
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      //DEAL CARDS
      controls.start({
        x: "0",
        y: "0",
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    audio.play();
    setIsDealt(!isDealt);
  };

  const resetCards = () => {
    setCards(getRandomCards());
  };

  const turnCardsBack = () => {
    setCards(
      cards.map((card) => {
        card.isFlipped = false;
        return card;
      })
    );
  };

  const flipCard = (index: number) => {
    audio2.play();
    setCards(
      cards.map((card) => {
        if (card.id === index) {
          card.isFlipped = !card.isFlipped;
        }
        return card;
      })
    );
  };

  return (
    <div className="flex w-full min-h-[50vh] justify-center align-middle items-center relative">
      <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-row lg:gap-4 justify-center mx-0 lg:mx-4 items-center overflow-hidden">
        <div className="relative col-span-2 overflow-x-hidden overflow-y-hidden z-[100] flex justify-center">
          <img
            alt="deck"
            onClick={onDeckPress}
            className="w-[35vh] bg-transparent cursor-pointer select-none z-50 inline hover:scale-[1.01] transition-transform duration-500 ease-in-out"
            src="./game/deck.webp"
          />
        </div>
        {cards.map((card, index) => {
          return (
            <motion.div
              key={index}
              className="relative overflow-visible"
              animate={controls}
              onAnimationStart={turnCardsBack}
              onAnimationComplete={resetCards}
            >
              <Card key={index} card={card} flipCard={flipCard} />
              {/* <CSSTransition
                in={card.isFlipped}
                timeout={500}
                classNames="card-anim w-[26vh] md:w-[20vh] cursor-pointer rounded-md hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="card"
                  onClick={() => {
                    flipCard(card.id);
                  }}
                >
                  <img className="back" src="./game/back.webp" alt="1" />
                  <img className="face" src={card.img} alt="2" />
                </div>
              </CSSTransition> */}
              {/* <motion.div
                onClick={() => {
                  flipCard(card.id);
                }}
                {...animationProps}
              >
                <img
                  className="w-[26vh] md:w-[20vh] cursor-pointer rounded-md hover:scale-[1.02] transition-all duration-300"
                  src={card.isFlipped ? card.img : "./game/back.webp"}
                />
              </motion.div> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
