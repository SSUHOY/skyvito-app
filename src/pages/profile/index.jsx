import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./ProfilePage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { Container, Header, Nav, PageContainer } from "./ProfilePage.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";
import {
  useGetCurrentUserAdvtQuery,
  useGetCurrentUserMutation,
  useGetCurrentUserQuery,
} from "../../components/services/adsApi";
import { useAuthContext } from "../../components/context/AuthContext";
import { selectCurrentUserAdsList } from "../../store/selectors/ads";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetCurrentUserAdsRequest } from "../../store/actions/creators/ads";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";

const Profile = () => {
  const { user, logoutUserFn } = useAuthContext();
  const { data } = useGetCurrentUserAdvtQuery({});
  const fetchAllCurrentUserAds = useSelector(selectCurrentUserAdsList);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("")

  const [saveButtonActive, setSaveButtonActive] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("user_register_name"));
    const userSurName = JSON.parse(localStorage.getItem("user_register_surname"));
    const userCity = JSON.parse(localStorage.getItem("user_register_city"));
    const userPhone = JSON.parse(localStorage.getItem("user_register_phone"))
    setName(userName);
    setSurname(userSurName)
    setCity(userCity)
    setPhone(userPhone)
  }, [user]);

  useEffect(() => {
    if (data) {
      dispatch(fetchSetCurrentUserAdsRequest(data));
    }
  }, [data, dispatch]);

  return (
    <>
      <S.Wrapper>
        <PageContainer>
          <Container>
            <Header>
              <Nav>
                <Link to="/">
                  <SearchLogoMob />
                </Link>
                <S.Button>Разместить объявление</S.Button>
                <Link to="/">
                  <S.SellerButton onClick={() => logoutUserFn()}>
                    Выйти
                  </S.SellerButton>
                </Link>
              </Nav>
            </Header>
            <S.Main>
              <S.MainContainer>
                <S.MainCenterBox>
                  <MainMenu>
                    <Link to="/">
                      <Logo />
                    </Link>
                    <MenuForm>
                      <Link to="/">
                        <ToMainButton>Вернуться на главную</ToMainButton>
                      </Link>
                    </MenuForm>
                  </MainMenu>
                  <S.TitleGreetings>
                    Здравствуйте,&nbsp;
                    {user.name}!
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
                            <S.SettingChangePhoto>
                              Заменить
                            </S.SettingChangePhoto>
                          </Link>
                        </S.SettingsLeftBox>
                        <S.SettingsRightBox>
                          <S.SettingsForm>
                            <S.SettingsDiv>
                              <S.SettingsFormLabel htmlFor="settings-name">
                                Имя
                              </S.SettingsFormLabel>
                              <S.SettingsFormInput
                                onChange={handleNameChange}
                                id="settings-name"
                                name="name"
                                type="text"
                                defaultValue={name}
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
                              defaultValue={surname}
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
                              defaultValue={city}
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
                              defaultValue={phone}
                              />
                            </S.SettingsDiv>
                            <S.SettingsBtn
                              active={saveButtonActive ? "#D9D9D9" : "#009EE4"}
                              activeHover={
                                saveButtonActive ? "#D9D9D9" : "#0080C1"
                              }
                              onClick={handleSaveChanges}
                              id="settings-btn">
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
                      {fetchAllCurrentUserAds.map((ad, index) => {
                        <CardsItem
                          key={index}
                          title={ad.title}
                          picture={`http://localhost:8090/${ad.images[0]?.url}`}
                          price={ad.price}
                          date={ad.created_on.split("T")[0]}
                          place={ad.user.city}
                        />;
                      })}
                    </S.ContentCards>
                    {fetchAllCurrentUserAds.length === 0 &&
                      "Вы пока не разместили ни одного объявления"}
                  </S.MainContent>
                </S.MainCenterBox>
              </S.MainContainer>
            </S.Main>
          </Container>
        </PageContainer>
        <FooterAll />
      </S.Wrapper>
    </>
  );
};

export default Profile;
