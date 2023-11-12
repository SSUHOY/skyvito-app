import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "./ProfilePage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { Container, Header, Nav, PageContainer } from "./ProfilePage.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";
import {
  useEditUserDataMutation,
  useGetAllAdsQuery,
  useGetCurrentAdvQuery,
  useGetCurrentUserAdvtQuery,
  useGetCurrentUserMutation,
  useGetCurrentUserQuery,
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useUploadUserImageMutation,
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
import { NewAdvModal } from "../../components/modal/new-adv";
import ChangePasswordModal from "../../components/modal/change-password/changePassword";

const Profile = () => {
  const { logoutUserFn } = useAuthContext();
  // Pop-up "post new adv"
  const [modalActive, setModalActive] = useState(false);
  // Pop-up "change password"
  const [modalActiveChangePass, setModalChangePassActive] = useState(false);

  const [uploadImg] = useUploadUserImageMutation({});
  const [getCurrentUser, { data: currentUser }] = useGetCurrentUserMutation();
  const { data, isLoading } = useGetCurrentUserAdvtQuery({});

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [saveButtonActive, setSaveButtonActive] = useState(false);
  const [inputsAreFilled, setInputsAreFilled] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [sellerAdv, setSellerAdv] = useState();
  const [refreshToken] = useRefreshTokenMutation();
  const [editUserData] = useEditUserDataMutation();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setInputsAreFilled(event.target.value);
  };

  const handleAvatarUpload = async (event) => {
    event.preventDefault();
    await refreshToken();
    const selectedImg = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    if (!selectedImg) {
      console.log("Файл не выбран");
    } else {
      const formData = new FormData();
      formData.append("file", selectedImg);
      setInputsAreFilled(true);
      uploadImg(formData);
      alert('Нажмите "Сохранить", чтобы изменения вступили в силу')
    }
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    await refreshToken();
    const userData = { phone, name, surname, city };
    editUserData(userData);
    console.log(selectedFile);
    setSaveButtonActive(false);
    getCurrentUser();
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    let allAreEmpty = true;
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        allAreEmpty = false;
      }
    });
    if (allAreEmpty) {
      setSaveButtonActive(false);
    } else {
      setSaveButtonActive(true);
    }
  }, [inputsAreFilled]);

  useEffect(() => {
    setName(localStorage.user_register_name);
    setSurname(localStorage.user_register_surname);
    setCity(localStorage.user_register_city);
    setPhone(localStorage.user_register_phone);
    setSelectedFile(localStorage.user_register_avatar);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    return;
  }, [currentUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      await getCurrentUser();
      await refreshToken();
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (data) {
      getCurrentUser();
      dispatch(fetchSetCurrentUserAdsRequest(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setSellerAdv(data);
  }, [data]);

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
                <S.Button onClick={() => setModalActive(true)}>
                  Разместить объявление
                </S.Button>
                <S.ChangePasswordButton
                  onClick={() => setModalChangePassActive(true)}>
                  Сменить пароль
                </S.ChangePasswordButton>
                <S.LinkAndBtnHideDiv>
                  <Link to="/">
                    <S.SellerButton onClick={() => logoutUserFn()}>
                      Выйти
                    </S.SellerButton>
                  </Link>
                </S.LinkAndBtnHideDiv>
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
                    {name}!
                  </S.TitleGreetings>
                  <S.MainProfile>
                    <S.ProfileContent>
                      <S.ProfileTitleSettings>
                        Настройки профиля
                      </S.ProfileTitleSettings>
                      <S.ProfileSettingsContainer>
                        <S.SettingsLeftBox>
                          <S.SettingsImg>
                            {selectedFile === 'null'  ? (
                              <S.AvatarAltText>Загрузите аватар</S.AvatarAltText>
                            ) : (
                              <S.ProfileImg
                                src={
                                  currentUser === undefined
                                    ? ""
                                    : `http://localhost:8090/${currentUser?.avatar}`
                                }
                              
                              />
                            )}
                          </S.SettingsImg>
                          <S.SettingChangePhoto
                            id="upload-photo"
                            onChange={handleAvatarUpload}>
                            Заменить
                            <S.SettingChangeAvaInput
                              type="file"
                              htmlFor="upload-photo"
                            />
                          </S.SettingChangePhoto>
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
                              <S.SettingsFormLabel htmlFor="surname">
                                Фамилия
                              </S.SettingsFormLabel>
                              <S.SettingsFormInput
                                onChange={handleSurnameChange}
                                id="settings-surname"
                                name="name"
                                type="text"
                                defaultValue={surname}
                              />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                              <S.SettingsFormLabel htmlFor="city">
                                Город
                              </S.SettingsFormLabel>
                              <S.SettingsFormInput
                                onChange={handleCityChange}
                                id="settings-city"
                                name="city"
                                type="text"
                                defaultValue={city}
                              />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                              <S.SettingsFormLabel htmlFor="phone">
                                Телефон
                              </S.SettingsFormLabel>
                              <S.SettingsPhoneInput
                                onChange={handlePhoneChange}
                                id="settings-phone"
                                name="phone"
                                type="tel"
                                defaultValue={phone === "null" ? "" : phone}
                                placeholder={
                                  phone === "null"
                                    ? "Укажите телефон для связи с Вами"
                                    : undefined
                                }
                              />
                            </S.SettingsDiv>
                            <S.SettingsBtn
                              active={!saveButtonActive ? "#D9D9D9" : "#009EE4"}
                              activehover={
                                !saveButtonActive ? "#D9D9D9" : "#0080C1"
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
                      {data?.length === 0
                        ? "Вы пока не разместили объявления"
                        : ""}
                      {data?.map((item, index) => (
                        <CardsItem
                          key={index}
                          advId={item.id}
                          title={item.title}
                          picture={`http://localhost:8090/${item.images[0]?.url}`}
                          price={item.price}
                          date={item.created_on.split("T")[0]}
                          place={item.user.city}
                          isLoading={isLoading}
                        />
                      ))}
                    </S.ContentCards>
                  </S.MainContent>
                </S.MainCenterBox>
              </S.MainContainer>
            </S.Main>
          </Container>
        </PageContainer>
        <ChangePasswordModal
          active={modalActiveChangePass}
          setActive={setModalChangePassActive}
        />
        <NewAdvModal active={modalActive} setActive={setModalActive} />
        <FooterAll active={modalActive} setActive={setModalActive} />
      </S.Wrapper>
    </>
  );
};

export default Profile;
