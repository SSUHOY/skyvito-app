import React, { useEffect, useState } from "react";
import * as S from "./NewAdv.styles";
import {
  useAddNewAdvPicMutation,
  useAddNewAdvTextMutation,
} from "../../services/adsApi";

export const NewAdvModal = ({ active, setActive }) => {
  const [inputsAreFilled, setInputsAreFilled] = useState();
  const [sendButtonActive, setSendButtonActive] = useState(false);
  const [advTitle, setTitle] = useState("");
  const [advDescription, setDescription] = useState("");
  const [advPrice, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState([]);
  const [photoIsChosen, setPhotoIsChosen] = useState(false);

  // Post Adv with photo
  const [addNewAdvWithPic] = useAddNewAdvPicMutation({});
  // Post Ad without photo
  const [addNewAdvText] = useAddNewAdvTextMutation({});

  const handleAdTitleChange = (event) => {
    setTitle(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdDescriptionChange = (event) => {
    setDescription(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdPriceChange = (event) => {
    setPrice(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAdvPictureUpload = async (event) => {
    event.preventDefault();
    const selectedImg = event.target.files[0];
    if (!selectedFiles) {
      console.log("Файл не выбран");
    } else {
      handleAddItemPhoto(selectedImg);
      console.log("Файл выбран");
      setPhotoIsChosen(true);
      setSendButtonActive(true);

      const newImageSrc = [];

      if (!event.target.files[0]) {
        console.log("Файл не выбран");
        return;
      }

      if (
        event.target.files[0].type &&
        !event.target.files[0].type.startsWith("image/")
      ) {
        console.log(
          "Файл не является картинкой",
          event.target.files[0].type,
          event.target.files[0]
        );
        return;
      }

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        newImageSrc.push(reader.result);
        setImageSrc([...imageSrc, ...newImageSrc]);
      });
      reader.readAsDataURL(event.target.files[0]);

      setSelectedFiles([...selectedFiles, { imageSrc }]);
    }
  };

  const handleAddItemPhoto = (newItem) => {
    setImages((prevItems) => prevItems.concat(newItem));
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
      setError("Пожалуйста, добавьте информацию о товаре");
      return;
    }
    try {
      if (!photoIsChosen) {
        console.log("пост без фото");
        const newAdvData = {
          title: advTitle,
          description: advDescription,
          price: advPrice,
        };
        setSendButtonActive(false);
        addNewAdvText(newAdvData);
        return;
      }
      const formData = new FormData();
      formData.append("title", advTitle);
      formData.append("description", advDescription);
      formData.append("price", advPrice);

      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });
      addNewAdvWithPic(formData);
      setSendButtonActive(false);
      setActive(false);
    } catch (error) {
      console.error("Ошибка:", error);
      setError(error.message || "Неизвестная ошибка обработки запроса к API");
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
                <S.FormNewArtImage htmlFor="upload-photo">
                  <S.FormNewArtImg src={imageSrc[0]} />
                  <S.FormNewArtCover
                    type="file"
                    id="upload-photo"
                    onChange={handleAdvPictureUpload}
                  />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg src={imageSrc[1]} />
                  <S.FormNewArtCover
                    type="file"
                    htmlFor="upload-photo"
                    onChange={handleAdvPictureUpload}
                  />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg src={imageSrc[2]} />
                  <S.FormNewArtCover
                    type="file"
                    htmlFor="upload-photo"
                    onChange={handleAdvPictureUpload}
                  />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg src={imageSrc[3]} />
                  <S.FormNewArtCover
                    type="file"
                    htmlFor="upload-photo"
                    onChange={handleAdvPictureUpload}
                  />
                </S.FormNewArtImage>
                <S.FormNewArtImage id="upload-photo">
                  <S.FormNewArtImg src={imageSrc[4]} />
                  <S.FormNewArtCover
                    type="file"
                    htmlFor="upload-photo"
                    onChange={handleAdvPictureUpload}
                  />
                </S.FormNewArtImage>
              </S.FormNewArtBarImages>
            </S.FormNewArtBlock>
            <S.FormNewArtBlockPrice>
              <S.FormPrice>Цена</S.FormPrice>
              <S.FormPriceInput
                className="form-newArt__input-price"
                type="number"
                name="price"
                id="formPrice"
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
