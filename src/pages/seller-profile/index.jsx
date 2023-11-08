import { useDispatch,  } from "react-redux";
import * as S from "./SellerProfile.styles";
import { Link, NavLink, useParams } from "react-router-dom";
import { FooterAll } from "../../components/footer/footer";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { BackToBtn, Logo, SearchLogoMob } from "../../assets/icons/icons";
import { useAuthContext } from "../../components/context/AuthContext";
import {
  useGetCurrentUserAdvtQuery,
} from "../../components/services/adsApi";
import { useEffect, useState } from "react";
import { fetchSetCurrentUserAdsRequest } from "../../store/actions/creators/ads";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";
import {
  HeaderBtnLk,
  HeaderBtnMainEnter,
} from "../../components/styles/main/MainPage.styles";

const SellerProfile = () => {
  const dispatch = useDispatch();
  const user = useAuthContext();
  const { id } = useParams();
  const { data, isLoading } = useGetCurrentUserAdvtQuery([]);
  console.log(data)
  const [adv, setAdv] = useState();
  const [showPhone, setShowPhone] = useState(false);
  const [sellerAds, setSellerAds] = useState([]);

  const handleShowPhoneClick = () => {
    setShowPhone(true);
  };



  useEffect(() => {
    let i = 0;
    let idToNumber = parseInt(id);
    for (i = 0; i < data?.length; i++) {
      if (data[i].id === idToNumber) {
        setAdv(data[i]);
        break;
      }
    }
  }, [data, id]);

  useEffect(() => {
    if (adv?.user) {
      let userId = adv.user_id;
      let sellerAds = data.filter((item) => item.user_id === userId);
      setSellerAds(sellerAds);
    }
  }, [adv, data]);

  // Помещаем в общий стор данные всех публикаций
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
                {user ? (
                  <>
                    <S.Button>Разместить объявление</S.Button>
                    <NavLink to="/account">
                      <HeaderBtnLk>Личный кабинет</HeaderBtnLk>
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login">
                    <HeaderBtnMainEnter>
                      Вход в личный кабинет
                    </HeaderBtnMainEnter>
                  </NavLink>
                )}
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
                  <Link to={`/adv-page/${id}`}>
                    <div>
                      <BackToBtn />
                    </div>
                  </Link>
                  <S.Title>Профиль продавца</S.Title>
                  <S.MainProfile>
                    <S.ProfileContent>
                      <S.ProfileSellerContainer>
                        <S.UserContentLeftBox>
                          <S.SellerImg>
                            <S.ProfileImg
                              src={`http://localhost:8090/${adv?.user.avatar}`}
                            />
                          </S.SellerImg>
                        </S.UserContentLeftBox>
                        <S.UserContentRightBox>
                          <S.SellerName>
                            {adv?.user.name} {adv?.user.surname}
                          </S.SellerName>
                          <S.SellerCity>{adv?.user.city}</S.SellerCity>
                          <S.SellerRegistrationDate>
                            Продает товары с {adv?.user.sells_from}
                          </S.SellerRegistrationDate>
                          <S.ButtonBox>
                            <S.SellerimgBox>
                              <S.SellerImgMob>
                                <S.ProfileImgMob
                                  src={`http://localhost:8090/${adv?.user.avatar}`}
                                />
                              </S.SellerImgMob>
                            </S.SellerimgBox>
                            <S.PhoneShownBtn onClick={handleShowPhoneClick}>
                              Показать телефон <br />
                              <S.PhoneNumber>
                                {!adv && "Загрузка"}
                                {!showPhone
                                  ? `${adv?.user.phone.substring(
                                      0,
                                      1
                                    )}${adv?.user.phone.substring(
                                      1,
                                      4
                                    )} XXX XX XX`
                                  : adv?.user.phone}
                              </S.PhoneNumber>
                            </S.PhoneShownBtn>
                          </S.ButtonBox>
                        </S.UserContentRightBox>
                      </S.ProfileSellerContainer>
                    </S.ProfileContent>
                  </S.MainProfile>
                  <S.MainContentTitle>Товары продавца</S.MainContentTitle>
                  <S.MainContent>
                    <S.ContentCards>
                      {data?.map((adv) => (
                        <CardsItem
                          key={adv?.id}
                          advId={id}
                          title={adv.title}
                          price={adv.price}
                          place={adv.user.city}
                          date={adv.created_on.split("T")[0]}
                          picture={`http://localhost:8090/${adv.images[0]?.url}`}
                        />
                      ))}
                    </S.ContentCards>
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
