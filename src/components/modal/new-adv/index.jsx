import React, { useEffect, useState } from "react";
import * as S from "./NewAdv.styles";
import {
  useAddNewAdvPicMutation,
  useAddNewAdvTextMutation,
  useGetCurrentUserAdvtQuery,
} from "../../services/adsApi";
import { AuthContext, useAuthContext } from "../../context/AuthContext";

export const NewAdvModal = ({ active, setActive }) => {
  const { user } = useAuthContext();
  const { data } = useGetCurrentUserAdvtQuery();

  const [inputsAreFilled, setInputsAreFilled] = useState();
  const [sendButtonActive, setSendButtonActive] = useState(false);
  const [advTitle, setTitle] = useState("");
  const [advDescription, setDescription] = useState("");
  const [advPrice, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Добавить объявления без фото
  const [addNewAdv] = useAddNewAdvTextMutation({});
  // Добавление объявления с фото
  const [addNewAdvWithPic] = useAddNewAdvPicMutation({});

  const handleAdTitleChange = (event) => {
    setTitle(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdDescriptionChange = (event) => {
    setDescription(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdPriceChange = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdvPictureUpload = async (event) => {
    event.preventDefault();
    const selectedImg = event.target.files[0];
    setSelectedFiles([...selectedFiles, event.target.files[0]]);

    // if (!selectedImg) {
    //   console.log("Файл не выбран");
    // } else {
    //   const formData = new FormData();
    //   formData.append("file", selectedImg);
    //   setInputsAreFilled(true);
    //   addNewAdvWithPic(formData);
    // }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    let allAreEmpty = true;
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        allAreEmpty = false;
      }
    });
    if (allAreEmpty) {
      setSendButtonActive(false);
    } else {
      setSendButtonActive(true);
    }
  }, [inputsAreFilled]);

  const handleSendChanges = async (event) => {
    event.preventDefault();
    if (!advTitle || !advDescription || !advPrice) {
      setError("Пожалуйста, введите наименование и/или описание объявления");
      return;
    }
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("title", advTitle);
      searchParams.append("description", advDescription);
      searchParams.append("price", advPrice);

      const formData = new FormData();
      selectedFiles.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });
      console.log(selectedFiles);
      const newAdvData = {
        title: advTitle,
        description: advDescription,
        price: advPrice,
        file: formData,
      };
      addNewAdvWithPic(formData, searchParams);
      console.log(newAdvData);
      setSendButtonActive(false);
      setActive(false);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setError(error.message || "Неизвестная ошибка регистрации");
      setSendButtonActive(false);
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
                onChange={handleAdTitleChange}
              />
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormLabelName>Описание</S.FormLabelName>
              <S.FormLabelTextDescription
                className="form-newArt__area"
                name="text"
                id="formArea"
                placeholder="Введите описание"
                onChange={
                  handleAdDescriptionChange
                }></S.FormLabelTextDescription>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtParagraph>
                Фотографии товара
                <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              </S.FormNewArtParagraph>
              <S.FormNewArtBarImages>
                <S.FormNewArtImage
                  id="upload-photo"
                  onChange={handleAdvPictureUpload}>
                  <S.FormNewArtImg />
                  <S.FormNewArtCover type="file" htmlFor="upload-photo" />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg />
                  <S.FormNewArtCover type="file" htmlFor="upload-photo" />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg />
                  <S.FormNewArtCover type="file" htmlFor="upload-photo" />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg />
                  <S.FormNewArtCover type="file" htmlFor="upload-photo" />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg />
                  <S.FormNewArtCover type="file" htmlFor="upload-photo" />
                </S.FormNewArtImage>
              </S.FormNewArtBarImages>
            </S.FormNewArtBlock>
            <S.FormNewArtBlockPrice>
              <S.FormPrice>Цена</S.FormPrice>
              <S.FormPriceInput
                className="form-newArt__input-price"
                type="number"
                name="price"
                id="formName"
                onChange={handleAdPriceChange}></S.FormPriceInput>
              <S.FormNewArtPriceCover> &#8381;</S.FormNewArtPriceCover>
            </S.FormNewArtBlockPrice>
            <S.FormSendBtn
              onClick={handleSendChanges}
              active={!sendButtonActive ? "#D9D9D9" : "#009EE4"}
              activehover={!sendButtonActive ? "#D9D9D9" : "#0080C1"}>
              {" "}
              Опубликовать
            </S.FormSendBtn>
            {error && <S.Error>{error}</S.Error>}
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
