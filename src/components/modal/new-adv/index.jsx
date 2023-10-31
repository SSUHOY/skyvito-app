import React from "react";
import * as S from "./NewAdv.styles";

export const NewAdvModal = ({ active, setActive }) => {
  console.log(active);
  return (
    <S.ContainerModal
      className={active ? "active" : ""}
      onClick={() => setActive(false)}>
      <S.ModalBlock
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}>
        <S.ModalContent>
          <S.ModalTitle>Новое объявление</S.ModalTitle>
          <S.ModalBtnCloseBox>
            <S.ModalBtnCloseLine onClick={() => setActive(false)} />
          </S.ModalBtnCloseBox>
          <S.ModalFormNewArt id="formNewArt">
            <S.FormNewArtBlock>
              <S.FormLabelName>Название</S.FormLabelName>
              <S.FormLabelTextName
                className="form-newArt__input"
                type="text"
                name="name"
                id="formName"
                placeholder="Введите название"
              />
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormLabelName>Описание</S.FormLabelName>
              <S.FormLabelTextDescription
                className="form-newArt__area"
                name="text"
                id="formArea"
                placeholder="Введите описание"></S.FormLabelTextDescription>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtParagraph>
                Фотографии товара
                <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              </S.FormNewArtParagraph>
              <S.FormNewArtBarImages>
                <S.FormNewArtImage>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover />
                </S.FormNewArtImage>
                <S.FormNewArtImage>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover />
                </S.FormNewArtImage>
                <S.FormNewArtImage>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover />
                </S.FormNewArtImage>
                <S.FormNewArtImage>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover />
                </S.FormNewArtImage>
                <S.FormNewArtImage>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover />
                </S.FormNewArtImage>
              </S.FormNewArtBarImages>
            </S.FormNewArtBlock>
            <S.FormNewArtBlockPrice>
              <S.FormPrice>Цена</S.FormPrice>
              <S.FormPriceInput
                className="form-newArt__input-price"
                type="text"
                name="price"
                id="formName"></S.FormPriceInput>
              <S.FormNewArtPriceCover> &#8381;</S.FormNewArtPriceCover>
            </S.FormNewArtBlockPrice>
            <S.FormSendBtn>Опубликовать</S.FormSendBtn>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
