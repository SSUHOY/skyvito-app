import styled from "styled-components";

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
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: 620px) {
    display: none;
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

export const ToMainButton = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  &:hover {
    background: #0080c1;
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
  @media screen and (max-width: 620px) {
    padding: 30px 0px 45px;
  }
  @media screen and (max-width: 890px) {
    padding: 30px 0px 30px;
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

export const MainMenu = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  width: 100%;
  padding: 31px 10px 64px;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;

export const TitleGreetings = styled.h2`
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
  }
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
`;

export const ProfileContent = styled.div`
  max-width: 834px;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileTitleSettings = styled.h3`
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProfileSettingsContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const SettingsLeftBox = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 43px;
  @media screen and (max-width: 620px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0;
  }
`;

export const SettingsRightBox = styled.div`
  width: 630px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const SettingChangePhoto = styled.p`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #009ee4;
`;

export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 620px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const SettingsFormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;

  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const SettingsFormInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
   width: 300px;
           &: focus {
    border: 2px solid #009EE4;

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    }
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    }
    }
  }

      @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;
    } 
  }
`;

export const SettingsPhoneInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: 614px;
  &: focus {
    border: 2px solid #009ee4;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;
  }

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 620px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 620px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const SettingsBtn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: ${(props) => props.active};
  border-radius: 6px;
  border: 1px solid ${(props) => props.active};

  &:hover {
  background-color: ${(props) => props.activeHover};
  }

  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
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
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 84px;
}
`;
