import React from "react";
import * as S from "./Reviews.styles";

const ReviewItem = (author, text) => {
    console.log(text)
  return (
    <>
      <S.ModalReviewItem>
        <S.ModalReviewItemLeft>
          <S.ModalReviewImgBox>
            <S.ModalReviewImg src="" alt="" />
          </S.ModalReviewImgBox>
        </S.ModalReviewItemLeft>
        <S.ModalReviewItemRight>
          <S.ModalReviewItemName>
            {/* {author} */}
            <S.ModalReviewItemNameSpan>14 августа</S.ModalReviewItemNameSpan>
          </S.ModalReviewItemName>
          <S.ModalReviewItemTitle>Комментарий</S.ModalReviewItemTitle>
          <S.ModalReviewItemText>
           {text}
          </S.ModalReviewItemText>
        </S.ModalReviewItemRight>
      </S.ModalReviewItem>
    </>
  );
};

export default ReviewItem;
