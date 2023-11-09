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
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoaderAds from "../skeleton";
import Skeleton from "react-loading-skeleton";

export const CardsItem = ({
  title,
  picture,
  price,
  date,
  place,
  advId,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton count={1} />
      ) : (
        <CardsContentBox>
          <CardsCard>
            <CardImgBox>
              <Link to={`/adv-page/${advId}`}>
                <CardImage src={picture} />
              </Link>
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
      )}
    </>
  );
};
