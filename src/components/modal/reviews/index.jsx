import React from "react";
import * as S from "./Reviews.styles";

export const ReviewsModal = ({ active, setActive }) => {
  return (
    <S.ContainerModal
      className={active ? "active" : ""}
      onClick={() => setActive(false)}>
      <S.ModalBlock
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}>
        <S.ModalContent>
          <S.ModalMainTitle>Отзывы о товаре</S.ModalMainTitle>
          <S.ModalBtnClose>
            <S.ModalBtnCloseLine onClick={() => setActive(false)}/>
          </S.ModalBtnClose>
          <S.ModalScroll>
            <S.ModalFormNewArt>
              <S.ModalFormNewArtBlock>
                <S.ModalFormNewArtLabel>Добавить отзыв</S.ModalFormNewArtLabel>
                <S.ModalFormInput></S.ModalFormInput>
              </S.ModalFormNewArtBlock>
              <S.ModalBtnPublish>Опубликовать</S.ModalBtnPublish>
            </S.ModalFormNewArt>
            <S.ModalReviewsBox>
              <S.ModalReview>
                <S.ModalReviewItem>
                  <S.ModalReviewItemLeft>
                    <S.ModalReviewImgBox>
                      <S.ModalReviewImg src="" alt="" />
                    </S.ModalReviewImgBox>
                  </S.ModalReviewItemLeft>
                  <S.ModalReviewItemLeft>
                    <S.ModalReviewItemName>
                      Олег{" "}
                      <S.ModalReviewItemNameSpan>
                        14 августа
                      </S.ModalReviewItemNameSpan>
                    </S.ModalReviewItemName>
                    <S.ModalReviewItemTitle>Комментарий</S.ModalReviewItemTitle>
                    <S.ModalReviewItemText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ModalReviewItemText>
                  </S.ModalReviewItemLeft>
                </S.ModalReviewItem>
              </S.ModalReview>
            </S.ModalReviewsBox>
          </S.ModalScroll>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
