import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 22px;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: calc(50% - (400px / 2));
    top: 0px;
    opacity: 0;
    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
  @media screen and (max-width: 400px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    padding: 30px 20px 30px;
  }
`;
export const ModalTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 400px) {
    width: 361px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 600;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
    &:before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: -76px;
      cursor: pointer;
    }
  }
`;

export const ModalBtnCloseBox = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
`;

export const ModalFormNewArt = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormLabelName = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormLabelTextName = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid;
  border-color: #00000033;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding-left: 19px;
  @media screen and (max-width: 600px) {
    border-radius: 30px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormLabelTextDescription = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  border: 1px;
  border: 1px solid;
  border-color: #00000033;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding-left: 19px;
  padding-top: 19px;
  resize: none;
  font-size: 16px;
  line-height: 1;
  box-sizing: border-box;
  vertical-align: top;
  @media screen and (max-width: 600px) {
    border-radius: 30px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &:placeholder {
    color: black;
  }
`;

export const FormNewArtParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 1;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }
`;

export const FormNewArtSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 600px) {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const FormNewArtInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FormNewArtBlockPrice = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormNewArtBarImages = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const FormNewArtImage = styled.label`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  background-color: #f0f0f0;

  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;

export const FormNewArtImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const FormNewArtCoverDiv = styled.div`
  content: "Файл";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -2;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    transform: rotate(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
`;

export const FormNewArtCover = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  content: "Файл";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -2;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    transform: rotate(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
`;

export const DeleteImageBtnDiv = styled.div`
  width: 18px;
  height: 18px;
  position: sticky;
  cursor: pointer;
`;

export const DeleteImageBtn = styled.img`
  width: 18px;
  height: 18px;
  z-index: 2;
  position: sticky;
`;

export const FormPrice = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormPriceInput = styled.input`
  width: 200px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  border-radius: 6px;
  border: 1px solid;
  border-color: #00000033;
  padding-left: 19px;
  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 30px;
  }
`;

export const FormNewArtPriceCover = styled.div`
  position: relative;
  left: 180px;
  bottom: 34px;
  @media screen and (max-width: 600px) {
    position: relative;
    left: 330px;
  }
`;

export const FormSendBtn = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: ${(props) => props.active};
  border-radius: 6px;
  border: 1px solid ${(props) => props.active};

  &:hover {
    background-color: ${(props) => props.activeHover};
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;
