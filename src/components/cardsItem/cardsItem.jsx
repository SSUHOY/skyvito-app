import React from "react";
import { Link } from "react-router-dom";
import {
  CardsContentBox,
  CardContentBox,
  CardImgBox,
  CardContainer,
  CardImage,
  CardTitle,
  CardPrice,
  CardPlace,
  CardDate,
  CardsCard,
} from "../styles/main/CardsItems.styles";

export const CardsItem = ({title, image, price}) => {
const imagesUrl = image.map((image) => {
return image.url
})

// console.log(...image)
  return (
    <CardsContentBox>
      <CardsCard>
        <CardImgBox>
          <Link to="#">
            <CardImage src={imagesUrl} />
          </Link>
        </CardImgBox>
        <CardContentBox>
          <Link to="#">
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardPrice>{price} ₽</CardPrice>
          <CardPlace>Санкт-Петербург</CardPlace>
          <CardDate>Сегодня в 10:12</CardDate>
        </CardContentBox>
      </CardsCard>
    </CardsContentBox>
  );
};
