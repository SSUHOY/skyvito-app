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

export const CardsItem = ({ title, picture, price, date, place, advId }) => {
  return (
    <CardsContentBox>
      <CardsCard>
        <CardImgBox>
          <CardImage src={picture} />
        </CardImgBox>
        <CardContentBox>
          <Link to={`/adv-page/${advId}`}>
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardPrice>{price} ₽</CardPrice>
          <CardPlace>{place}</CardPlace>
          <CardDate>{date}</CardDate>
        </CardContentBox>
      </CardsCard>
    </CardsContentBox>
  );
};
