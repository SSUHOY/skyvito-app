import React, { useState } from "react";
import * as S from "./Reviews.styles";
import ReviewItem from "./reviewItem";
import { useAddCommentMutation } from "../../services/adsApi";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const ReviewsModal = ({ active, setActive, comments, advId }) => {
  let { id } = useParams();
  const { user } = useAuthContext();
  const [addComment, { isLoading }] = useAddCommentMutation();
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  const handleAddComment = async (event) => {
    event.preventDefault();

    if (!newComment) {
      setError("Пожалуйста, введите комментарий");
      return;
    }
    if (newComment) {
      await addComment({ text: newComment, id: id });
      setNewComment("");
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

          <S.ModalFormNewArt>
            {!user ? (
              ""
            ) : (
              <S.ModalFormNewArtBlock>
                <S.ModalFormNewArtLabel>Добавить отзыв</S.ModalFormNewArtLabel>
                <S.ModalFormInput
                  type="text"
                  placeholder="Введите отзыв"
                  value={newComment}
                  onChange={(e) =>
                    setNewComment(e.target.value)
                  }></S.ModalFormInput>
              </S.ModalFormNewArtBlock>
            )}
            {!user ? (
              ""
            ) : (
              <S.ModalBtnPublish
                onClick={handleAddComment}
                disabled={!newComment}>
                {isLoading ? "Публикация..." : "Опубликовать"}
              </S.ModalBtnPublish>
            )}
          </S.ModalFormNewArt>
          <S.ModalScroll>
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
            {error && <S.Error>{error}</S.Error>}
          </S.ModalScroll>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
