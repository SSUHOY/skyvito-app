import React from "react";
import * as S from "./Reviews.styles";
import ReviewItem from "./reviewItem";

export const ReviewsModal = ({ active, setActive, comments }) => {
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
            <S.ModalBtnCloseLine onClick={() => setActive(false)} />
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
                {comments
                  ? comments.map((item, index) => (
                      <ReviewItem
                        text={item.text}
                        key={index}
                        author={item.author.name}
                      />
                    ))
                  : ""}
              </S.ModalReview>
            </S.ModalReviewsBox>
          </S.ModalScroll>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
