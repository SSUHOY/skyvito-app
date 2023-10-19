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

export const CardsItem = ({title, picture, price, date, place}) => {

  return (
    <CardsContentBox>
      <CardsCard>
        <CardImgBox>
          <Link to="#">
            <CardImage src={picture} />
          </Link>
        </CardImgBox>
        <CardContentBox>
          <Link to="#">
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
