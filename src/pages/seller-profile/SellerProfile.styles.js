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

export const PageContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #009ee4;
`;

export const Nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
  @media screen and (max-width: 620px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const HeaderLogo = styled.div`
  display: none;
`;

export const PhoneShownBtn = styled.button`
  width: 214px;
  height: 62px;
  margin-top: 30px;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background-color: #009ee4;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  &:hover {
    background: #0080c1;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const PhoneNumber = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 620px) {
    font-size: 12px;
  }
`;

export const SellerButton = styled.button`
  width: 173px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;
export const SellerPostButton = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Main = styled.main`
  box-sizing: border-box;
  background-color: white;
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 520px) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width: 620px) {
    padding: 30px 0px 45px;
  }
`;

export const MainCenterBox = styled.div`
  box-sizing: border-box;
  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
  }
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const UserInfForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    position: relative;
    padding-left: 25px;
  }
`;

export const MainProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 70px;
  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export const ProfileContent = styled.div`
  max-width: 100%;
  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileSellerContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  justify-content: start;
  @media screen and (max-width: 580px) {
    justify-content: center;
  }
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const UserContentLeftBox = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  @media screen and (max-width: 620px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px 0;
  }
`;

export const UserContentRightBox = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 620px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 620px) {
    display: none;
    width: 132px;
    height: 132px;
  }
`;
export const SellerImgMob = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: none;
  background-color: #f0f0f0;
  @media screen and (max-width: 620px) {
    width: 170px;
    height: 170px;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 0;
    display: block;
  }
`;

export const SellerimgBox = styled.div`
  @media screen and (max-width: 620px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const UserInfDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const MainContentTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`;

export const MainContent = styled.div`
  @media screen and (max-width: 620px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContentCards = styled.div`
  @media screen and (max-width: 590px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (137px) [2];
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const SellerName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;

export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;

export const SellerRegistrationDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;

export const ButtonBox = styled.div`
  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
  }
`;
