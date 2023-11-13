import React, { useEffect, useState } from "react";
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
                <CardImage src={picture} />
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
