import React from "react";
import { Link } from "react-router-dom";
import * as S from "./ProfilePage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { Container, Header, Nav, PageContainer } from "./ProfilePage.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";

const Profile = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <Header>
            <Nav>
              <Link to='/'>
                <SearchLogoMob />
              </Link>
              <S.Button>Разместить объявление</S.Button>
              <S.SellerButton>Личный кабинет</S.SellerButton>
            </Nav>
          </Header>
          <S.Main>
            <S.MainContainer>
              <S.MainCenterBox>
                <S.MainMenu>
                  <Link to="/">
                    <Logo />
                  </Link>
                  <S.MenuForm>
                    <Link to="/">
                      <S.ToMainButton>Вернуться на главную</S.ToMainButton>
                    </Link>
                  </S.MenuForm>
                </S.MainMenu>
                <S.TitleGreetings>
                  Здравствуйте, <br />
                  Семён!
                </S.TitleGreetings>
                <S.MainProfile>
                  <S.ProfileContent>
                    <S.ProfileTitleSettings>
                      Настройки профиля
                    </S.ProfileTitleSettings>
                    <S.ProfileSettingsContainer>
                      <S.SettingsLeftBox>
                        <S.SettingsImg>
                          <Link to="#">
                            <S.ProfileImg src="#" />
                          </Link>
                        </S.SettingsImg>
                        <Link to="#">
                          <S.SettingChangePhoto>Заменить</S.SettingChangePhoto>
                        </Link>
                      </S.SettingsLeftBox>
                      <S.SettingsRightBox>
                        <S.SettingsForm>
                          <S.SettingsDiv>
                            <S.SettingsFormLabel htmlFor="settings-name">
                              Имя
                            </S.SettingsFormLabel>
                            <S.SettingsFormInput
                            // onChange={handleNameChange}
                            // id="settings-name"
                            // name="name"
                            // type="text"
                            // defaultValue={name}
                            />
                          </S.SettingsDiv>
                          <S.SettingsDiv>
                            <S.SettingsFormLabel htmlFor="lname">
                              Фамилия
                            </S.SettingsFormLabel>
                            <S.SettingsFormInput
                            // onChange={handleSurnameChange}
                            // id="settings-name"
                            // name="name"
                            // type="text"
                            // defaultValue={surname}
                            />
                          </S.SettingsDiv>
                          <S.SettingsDiv>
                            <S.SettingsFormLabel htmlFor="city">
                              Город
                            </S.SettingsFormLabel>
                            <S.SettingsFormInput
                            // onChange={handleCityChange}
                            // id="settings-name"
                            // name="name"
                            // type="text"
                            // defaultValue={city}
                            />
                          </S.SettingsDiv>
                          <S.SettingsDiv>
                            <S.SettingsFormLabel htmlFor="phone">
                              Телефон
                            </S.SettingsFormLabel>
                            <S.SettingsPhoneInput
                            // onChange={handlePhoneChange}
                            // id="settings-fname"
                            // name="name"
                            // type="text"
                            // defaultValue={phone}
                            />
                          </S.SettingsDiv>
                          <S.SettingsBtn
                          // active={!saveButtonActive ? "#D9D9D9" : "#009EE4"}
                          // activeHover={
                          //   !saveButtonActive ? "#D9D9D9" : "#0080C1"
                          // }
                          // onClick={handleSaveChanges}
                          // id="settings-btn"
                          >
                            Сохранить
                          </S.SettingsBtn>
                        </S.SettingsForm>
                      </S.SettingsRightBox>
                    </S.ProfileSettingsContainer>
                  </S.ProfileContent>
                </S.MainProfile>
                <S.MainContentTitle>Мои товары</S.MainContentTitle>
                <S.MainContent>
                  <S.ContentCards>
                    <CardsItem />
                  </S.ContentCards>
                </S.MainContent>
              </S.MainCenterBox>
            </S.MainContainer>
          </S.Main>
        </Container>
      </PageContainer>
      <FooterAll />
    </>
  );
};

export default Profile;
