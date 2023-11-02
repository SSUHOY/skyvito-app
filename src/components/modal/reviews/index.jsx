import React, { useState } from "react";
import * as S from "./Reviews.styles";
import ReviewItem from "./reviewItem";
import { useAddCommentMutation } from "../../services/adsApi";
import { useParams } from "react-router-dom";

export const ReviewsModal = ({ active, setActive, comments, advId }) => {
  let { id } = useParams();
  const [addComment, { isLoading }] = useAddCommentMutation();
  console.log(isLoading);
  const [newComment, setNewProduct] = useState("");

  const handleAddComment = async (event) => {
    event.preventDefault();
    if (newComment) {
      await addComment({ text: newComment, id: id });
      setNewProduct("");
    }
  };

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
                <S.ModalFormInput
                  type="text"
                  value={newComment}
                  onChange={(e) =>
                    setNewProduct(e.target.value)
                  }></S.ModalFormInput>
              </S.ModalFormNewArtBlock>
              <S.ModalBtnPublish onClick={handleAddComment}>
                {isLoading ? "Публикация..." : "Опубликовать"}
              </S.ModalBtnPublish>
            </S.ModalFormNewArt>
            <S.ModalReviewsBox>
              <S.ModalReview>
                {comments
                  ? comments.map((item, index) => (
                      <ReviewItem
                        text={item.text}
                        key={index}
                        avatar={`http://localhost:8090/${item.author.avatar}`}
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
