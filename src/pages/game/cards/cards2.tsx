import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import "./card.css";

type Card = {
  id: number;
  img: string;
  isFlipped: boolean;
  description: string;
};

const cardsStack = [
  {
    id: 0,
    img: "./landing/cards/card.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 1,
    img: "./landing/cards/card.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 2,
    img: "./landing/cards/back.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 3,
    img: "./landing/cards/card.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 4,
    img: "./landing/cards/back.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 5,
    img: "./landing/cards/card.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
  {
    id: 6,
    img: "./landing/cards/card.png",
    isFlipped: false,
    description: "Lorem pupem poem poem poem poem poem",
  },
] as Card[];

export const Cards2 = () => {
  const controls = useAnimationControls();
  const getRandomCards = (): any => {
    const shuffled = Array.from(cardsStack).sort(() => 0.5 - Math.random());
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
    <div className="flex w-full min-h-fit justify-center align-middle items-center relative">
      <div className="flex gap-8 align-top justify-start items-start overflow-x-hidden min-h-fit mx-4">
        <div className="z-50 inline">
          <img
            alt="deck"
            onClick={onDeckPress}
            className="w-[25vh] bg-white cursor-pointer select-none z-50 inline"
            src="./landing/cards/deck.png"
          />
        </div>
        {cards.map((card, index) => {
          return (
            <motion.div
              className="relative min-h-fit"
              animate={controls}
              onAnimationStart={turnCardsBack}
              onAnimationComplete={resetCards}
            >
              <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: card.isFlipped ? 0 : 180 }}
              >
                <motion.div
                  className="w-fit h-fit"
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: card.isFlipped ? 0 : 180 }}
                >
                  {card.isFlipped ? (
                    <motion.div
                      className="front w-fit h-fit"
                      transition={{ duration: 0.7 }}
                      animate={{ rotateY: card.isFlipped ? 0 : 180 }}
                    >
                      <img
                        alt="card"
                        className="w-[15vh] cursor-pointer"
                        onClick={() => {
                          flipCard(card.id);
                        }}
                        src={card.img}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="back"
                      //animate={controls}
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <img
                        className="w-[15vh] cursor-pointer"
                        alt="back"
                        onClick={() => {
                          flipCard(card.id);
                        }}
                        src={"./landing/cards/back.jpg"}
                      />
                    </motion.div>
                  )}
                </motion.div>
                <p
                  className={
                    "w-[15vh] " + (card.isFlipped ? "text-black" : "text-white")
                  }
                >
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
