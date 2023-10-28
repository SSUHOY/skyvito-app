import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserAdsList } from "../../store/selectors/ads";
import * as S from "./SellerProfile.styles";
import { Link } from "react-router-dom";
import { FooterAll } from "../../components/footer/footer";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { BackToBtn, Logo, SearchLogoMob } from "../../assets/icons/icons";
import { useAuthContext } from "../../components/context/AuthContext";
import { useGetCurrentUserAdvtQuery } from "../../components/services/adsApi";
import { useEffect } from "react";
import { fetchSetCurrentUserAdsRequest } from "../../store/actions/creators/ads";
import { MainMenu, MenuForm, ToMainButton } from "../../components/styles/reusable/Usable.styles";

const SellerProfile = () => {
  const dispatch = useDispatch();

  const { user, logoutUserFn } = useAuthContext();
  const { data } = useGetCurrentUserAdvtQuery({});

  const fetchAllCurrentUserAds = useSelector(selectCurrentUserAdsList);

  useEffect(() => {
    if (data) {
      dispatch(fetchSetCurrentUserAdsRequest(data));
    }
  }, [data, dispatch]);

  return (
    <>
      <S.Wrapper>
        <S.PageContainer>
          <S.Container>
            <S.Header>
              <S.Nav>
                <Link to="/">
                  <SearchLogoMob />
                </Link>
                <S.SellerPostButton>Разместить объявление</S.SellerPostButton>
                <Link to="/">
                  <S.SellerButton onClick={() => logoutUserFn()}>
                    Выйти
                  </S.SellerButton>
                </Link>
              </S.Nav>
            </S.Header>
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
                  <BackToBtn />
                  <S.Title>Профиль продавца</S.Title>
                  <S.MainProfile>
                    <S.ProfileContent>
                      <S.ProfileSellerContainer>
                        <S.UserContentLeftBox>
                          <S.SellerImg>
                            <Link to="#">
                              <S.ProfileImg src="#" />
                            </Link>
                          </S.SellerImg>
                        </S.UserContentLeftBox>
                        <S.UserContentRightBox>
                          <S.SellerName>
                            {user.name} {user.surname}
                          </S.SellerName>
                          <S.SellerCity
                          // onChange={handleNameChange}
                          // id="settings-name"
                          // name="name"
                          // type="text"
                          // defaultValue={name}
                          >
                            {user.city}
                          </S.SellerCity>
                          <S.SellerRegistrationDate>
                            Продает товары с {user.sells_from}
                          </S.SellerRegistrationDate>
                          <S.ButtonBox>
                            <S.SellerimgBox>
                              <S.SellerImgMob>
                                <Link to="#">
                                  <S.ProfileImg src="#" />
                                </Link>
                              </S.SellerImgMob>
                            </S.SellerimgBox>
                            <S.PhoneShownBtn
                            // onChange={handleSurnameChange}
                            // id="settings-name"
                            // name="name"
                            // type="text"
                            // defaultValue={surname}
                            >
                              Показать телефон <br />
                              <S.PhoneNumber>8-XXX-XXX-XX-XX</S.PhoneNumber>
                            </S.PhoneShownBtn>
                          </S.ButtonBox>
                        </S.UserContentRightBox>
                      </S.ProfileSellerContainer>
                    </S.ProfileContent>
                  </S.MainProfile>
                  <S.MainContentTitle>Товары продавца</S.MainContentTitle>
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
          </S.Container>
        </S.PageContainer>
        <FooterAll />
      </S.Wrapper>
    </>
  );
};

export default SellerProfile;
