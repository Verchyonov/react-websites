import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import "./card.css";

type Card = {
  id: number;
  img: string;
  isFlipped: boolean;
  description: string;
};

const cardsStack = Array.from({ length: 77 }, (_, i) => {
  return {
    id: i,
    img: `./cards/cardio_${i}.webp`,
    isFlipped: false,
    description: "test",
  } as Card;
}) as Card[];

export const Cards = () => {
  const controls = useAnimationControls();
  const getRandomCards = (): any => {
    let shuffled = Array.from(cardsStack);

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 4);
  };

  //   const [isVisible, setIsVisible] = useState(false);
  const [isDealt, setIsDealt] = useState(true);
  const [cards, setCards] = useState<Card[]>(getRandomCards());

  const onDeckPress = () => {
    if (isDealt) {
      //REMOVE CARDS
      controls.start({
        x: "-5000px",
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
      <div className="flex md:flex-row flex-col gap-2 md:gap-4 justify-center mx-0 md:mx-4 items-center overflow-hidden">
        <div className="relative overflow-x-hidden overflow-y-hidden z-[100] flex">
          <img
            alt="deck"
            onClick={onDeckPress}
            className="w-[35vh] bg-transparent cursor-pointer select-none z-50 inline hover:scale-[1.01] transition-transform duration-500 ease-in-out"
            src="./game/deck.webp"
          />
        </div>
        {cards.map((card) => {
          return (
            <motion.div
              key={card.id}
              className="relative overflow-visible"
              animate={controls}
              onAnimationStart={turnCardsBack}
              onAnimationComplete={resetCards}
            >
              <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: card.isFlipped ? 0 : 180 }}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: card.isFlipped ? 0 : 180 }}
                >
                  {card.isFlipped ? (
                    <>
                      <motion.div
                        className="front"
                        transition={{ duration: 0.7 }}
                        animate={{ rotateY: card.isFlipped ? 0 : 180 }}
                      >
                        <img
                          alt="card"
                          className="w-[26vh] md:w-[18vh]de cursor-pointer"
                          onClick={() => {
                            flipCard(card.id);
                          }}
                          src={card.img}
                        />
                      </motion.div>
                    </>
                  ) : (
                    <motion.div
                      className="back"
                      //animate={controls}
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <img
                        className="w-[26vh] md:w-[18vh] cursor-pointer"
                        alt="back"
                        onClick={() => {
                          flipCard(card.id);
                        }}
                        src={"./game/back.webp"}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
