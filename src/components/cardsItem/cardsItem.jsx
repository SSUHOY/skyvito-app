import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CardsContentBox,
  CardContentBox,
  CardImgBox,
  CardImage,
  CardTitle,
  CardPrice,
  CardPlace,
  CardDate,
  CardsCard,
  Error,
} from "../styles/main/CardsItems.styles";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const CardsItem = ({
  title,
  picture,
  price,
  date,
  place,
  advId,
  isLoading,
}) => {
  console.log("🚀 ~ file: cardsItem.jsx:30 ~ picture:", picture)
  const [formatAdvDate, setFormatDateWithTime] = useState("");
  

  useEffect(() => {
    if (!isLoading) {
      // format adv date post from
      const date_post_adv = new Date(date);
      const calendarDateFormatWithTime = "PPpp";
      const AdvPostDate = format(date_post_adv, calendarDateFormatWithTime, {
        locale: ru,
      });
      setFormatDateWithTime(AdvPostDate);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Skeleton count={1} />
      ) : (
        <CardsContentBox>
          <CardsCard>
            <CardImgBox>
              <Link to={`/adv-page/${advId}`}>
                {picture === 'http://localhost:8090/undefined' && !isLoading ? (
                  <Error>Фото отсутствует</Error>
                ) : (
                  <CardImage src={picture} />
                )}
              </Link>
            </CardImgBox>

            <CardContentBox>
              <Link to={`/adv-page/${advId}`}>
                <CardTitle>{title}</CardTitle>
              </Link>
              <CardPrice>{price} ₽</CardPrice>
              <CardPlace>{place}</CardPlace>
              <CardDate>{formatAdvDate}</CardDate>
            </CardContentBox>
          </CardsCard>
        </CardsContentBox>
      )}
    </>
  );
};
