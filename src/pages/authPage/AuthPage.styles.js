import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #0080c1;
`;

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  transition: all 0.5s;
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 20px;
    position: absolute;
    left: calc(50% - (320px / 2));
    top: 55px;
    transition: all 0.5s;
  }
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
  margin-top: 60px;
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
  margin-top: 20px;
  text-align: left;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #009ee4;
  &:hover {
    background-color: #0080c1;
  }

`;
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

export const ShowPasswordLogoLogin = styled.img`
  position: absolute;
  left: 287px;
  bottom: 252px;
  width: 22px;
  height: 21px;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 268px;
    bottom: 254px;
    width: 22px;
    height: 21px;
  }
`;

export const ShowPasswordLogo = styled.img`
  position: absolute;
  left: 287px;
  bottom: 412px;
  width: 22px;
  height: 21px;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 268px;
    bottom: 404px;
    width: 22px;
    height: 21px;
  }
`;

export const ShowPasswordLogoSec = styled.img`
  position: absolute;
  left: 287px;
  bottom: 352px;
  width: 22px;
  height: 21px;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 268px;
    bottom: 345px;
    width: 22px;
    height: 21px;
  }
`;

export const ReloginMessage = styled.div`
position: absolute;
color: #009ee4;
font-weight: 400;
font-size: 15px;
line-height: 24px;
margin-top: 10px;
margin-right: 48px;
text-align: left;
`