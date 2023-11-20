import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    background-color: #ffffff;
    min-height: 100vh;
  }
`;

export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 768px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const Button = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;

export const ErrorNotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  padding-top: 20px;
`;


export const ErrorCode = styled.h1`
  font-size: 120px;
  color: #009ee4;
`;

export const ErrorHelpDescription = styled.p``;

export const ErrorItem = styled.span`
  color: #009ee4;
`;
