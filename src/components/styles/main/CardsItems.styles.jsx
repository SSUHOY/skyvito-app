import styled from "styled-components";

// //CardsItem

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: 590px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 100%;
  }
`;

export const CardsContentBox = styled.div`
  margin: 0;
  @media screen and (max-width: 580px) {
    margin: 0;
  }
`;

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 590px) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const CardImgBox = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 270px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const CardContentBox = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0px 10px 12px;
  @media screen and (max-width: 590px) { 
    width: 137px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
  }
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 590px) {
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: -3px;
    margin-top: 10px;
  }
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 10px;

  @media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;

  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
