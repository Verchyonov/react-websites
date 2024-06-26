import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

import { Card } from "./card";

type Card = {
  id: number;
  img: string;
  isFlipped: boolean;
  description: string;
  name: string;
};

const cardsStack = Array.from({ length: 78 }, (_, i) => {
  return {
    id: i,
    img: `./cards/cardio_${i}.webp`,
    isFlipped: false,
    description: "test",
    name: "test",
  } as Card;
}) as Card[];

export const Cards = () => {
  const controls = useAnimationControls();
  let audio = new Audio("./sound2.wav");
  let audio2 = new Audio("./sound.wav");
  let audio3 = new Audio("./sound3.mp3");
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

  const [isDealt, setIsDealt] = useState(true);
  const [cards, setCards] = useState<Card[]>(getRandomCards());

  const onDeckPress = () => {
    if (isDealt) {
      audio3.play();
      //REMOVE CARDS
      controls.start({
        x: "-2000px",
        y: "0",
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      audio.play();
      //DEAL CARDS
      controls.start({
        x: "0",
        y: "0",
        opacity: 1,
        transition: { duration: 1 },
      });
    }

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
      <div className="grid grid-cols-2 gap-2 p-4 pt-10 xl:flex xl:flex-row xl:gap-4 justify-center mx-0 xl:mx-4 items-center overflow-hidden">
        <div className="relative col-span-2 overflow-x-hidden overflow-y-hidden z-[100] flex justify-center">
          <img
            alt="deck"
            onClick={onDeckPress}
            className="w-[60vw] md:w-[30vw] xl:w-[18vw] bg-transparent cursor-pointer select-none z-50 inline hover:scale-[1.01] transition-transform duration-500 ease-in-out"
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
