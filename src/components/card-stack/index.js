import React, { useState } from "react";
import move from "lodash-move";

import { Card, CardWrapperContainer, MainCardContainer } from "./style";

import { CARD_IMAGES } from "../../assets";

const CARD_OFFSET = 2;
const SCALE_FACTOR = 0.02;
const OPACITY_FACTOR = 1;

function CardStack() {
  const [cards, setCards] = useState(CARD_IMAGES);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <MainCardContainer>
      <CardWrapperContainer>
        {cards.map((item, index) => {
          const canDrag = index === 0;
          return (
            <Card
              key={item}
              src={item}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_IMAGES.length - index,
                opacity: OPACITY_FACTOR - index * 0.1,
                filter: `blur(${index * 0.8}px)`,
              }}
              drag="y"
              dragSnapToOrigin={true}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
              canDrag={canDrag}
            />
          );
        })}
      </CardWrapperContainer>
    </MainCardContainer>
  );
}

export default CardStack;
