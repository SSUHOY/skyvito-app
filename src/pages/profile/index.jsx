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

const Profile = () => {
  const dispatch = useDispatch();

  const { user, logoutUserFn } = useAuthContext();
  const { data, error } = useGetCurrentUserAdvtQuery({});

  const fetchAllCurrentUserAds = useSelector(selectCurrentUserAdsList);

// -----------Доработать функионал получения currentUser из RTK через Mutation----//


  // const [userData, setUserData] = useState('')
  // console.log(userData)
  // const [getCurrentUser, {userData: currentUser}] = useGetCurrentUserMutation();
  // const handleSetUserData = async () => {
  //   if(user) {
  //     await getCurrentUser({data: userData}).unwrap()
  //   }
  // }

  useEffect(() => {
    if (data) {
      dispatch(fetchSetCurrentUserAdsRequest(data));
    }
  }, [data, dispatch]);

  return (
    <>
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
                    {fetchAllCurrentUserAds.length === 0 && 'Вы пока не разместили ни одного объявления'}
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
