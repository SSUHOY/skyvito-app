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
} from "../../../styles/main/CardsItems.styles";

export const CardsItem = () => {
  return (
    <CardsContentBox>
        <CardsCard>
          <CardImgBox>
            <Link to="#">
              <CardImage />
            </Link>
          </CardImgBox>
          <CardContentBox>
            <Link to="#">
              <CardTitle>Ракетка для большого тенниса</CardTitle>
            </Link>
            <CardPrice>2&nbsp;200&nbsp;₽ </CardPrice>
            <CardPlace>Санкт-Петербург</CardPlace>
            <CardDate>Сегодня в 10:12</CardDate>
          </CardContentBox>
        </CardsCard>
    </CardsContentBox>
  );
};

