import styled from "styled-components";

export const PageContainer = styled.div`
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

export const ModalBtnCloseBox = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 40px;
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

export const ModalForm = styled.div`
  width: 366px;
  height: 439px;
  background-color: white;
  padding: 43px 47px 47px 40px;
  border-radius: 12px;
  position: absolute;
  z-index: 5;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  top: 60px;
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
    top: 55px;
    opacity: 0;
    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: block;
`;

export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Error = styled.div`
  position: absolute;
  color: coral;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  background: #009ee4;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color:;
  border-radius: 6px;
  border: 1px solid;
  &:disabled {
    background-color: #d9d9d9;
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const ShowPasswordLogo = styled.img`
  position: absolute;
  left: 287px;
  bottom: 265px;
  width: 22px;
  height: 21px;
`;

export const ShowPasswordLogoSec = styled.img`
  position: absolute;
  left: 287px;
  bottom: 150px;
  width: 22px;
  height: 21px;
`;
