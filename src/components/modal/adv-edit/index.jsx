import React, { useEffect, useMemo, useState } from "react";
import * as S from "./AdvEdit.styles.js";
import { useParams } from "react-router-dom";
import {
  useEditAdvMutation,
  useGetCurrentAdvQuery,
  useRefreshTokenMutation,
} from "../../services/adsApi.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const EditAdvModal = ({ active, setActive }) => {
  const { id } = useParams();
  const { data } = useGetCurrentAdvQuery(id);
  const [editAdvRequest] = useEditAdvMutation(id);
  const [refreshToken] = useRefreshTokenMutation();

  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [saveButtonActive, setSaveButtonActive] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setImages(data.images);
    }
  }, [data]);

  const adv = useMemo(() => data || [], [data]);

  useEffect(() => {
    setTitle(adv.title);
    setDescription(adv.description);
    setPrice(adv.price);
  }, [data]);

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    await refreshToken();
    editAdvRequest({
      title: title,
      description: description,
      price: price,
      id: id,
    });
    setSaveButtonActive(false);
  };

  const handleAdTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAdDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAdPriceChange = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };

  return (
    <S.ContainerModal
      className={active ? "active" : ""}
      onClick={() => setActive(false)}>
      <S.ModalBlock
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}>
        <S.ModalContent>
          <S.ModalTitle>Редактировать объявление</S.ModalTitle>
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
                defaultValue={adv.title}
                onChange={handleAdTitleChange}
              />
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormLabelName>Описание</S.FormLabelName>
              <S.FormLabelTextDescription
                className="form-newArt__area"
                name="text"
                id="formArea"
                defaultValue={adv.description}
                onChange={
                  handleAdDescriptionChange
                }></S.FormLabelTextDescription>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtParagraph>
                Фотографии товара
                <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              </S.FormNewArtParagraph>
              {isLoading ? (
                <Skeleton count={1} />
              ) : (
                <S.FormNewArtBarImages>
                  {data?.images?.map((image, index) => (
                    <S.FormNewArtImage htmlFor="upload-photo" key={index}>
                      <S.FormNewArtImg
                        src={
                          !image.url ? "" : `http://localhost:8090/${image.url}`
                        }
                      />
                      <S.FormNewArtCover type="file" id="upload-photo" />
                    </S.FormNewArtImage>
                  ))}
                  <S.FormNewArtImage htmlFor="upload-photo">
                    <S.FormNewArtImg />
                    <S.FormNewArtCover type="file" id="upload-photo" />
                  </S.FormNewArtImage>
                </S.FormNewArtBarImages>
              )}
            </S.FormNewArtBlock>
            <S.FormNewArtBlockPrice>
              <S.FormPrice>Цена</S.FormPrice>
              <S.FormPriceInput
                className="form-newArt__input-price"
                type="number"
                name="price"
                id="formName"
                defaultValue={adv.price}
                onChange={handleAdPriceChange}></S.FormPriceInput>
              <S.FormNewArtPriceCover> &#8381;</S.FormNewArtPriceCover>
            </S.FormNewArtBlockPrice>
            <S.FormSendBtn
              onClick={handleSaveChanges}
              active={!saveButtonActive ? "#D9D9D9" : "#009EE4"}
              activehover={!saveButtonActive ? "#D9D9D9" : "#0080C1"}>
              {" "}
              Опубликовать
            </S.FormSendBtn>
            {/* {error && <S.Error>{error}</S.Error>} */}
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};

export default EditAdvModal;