import React, { useEffect, useMemo, useState } from "react";

import {
  Container,
  Header,
  HeaderNav,
  HeaderBtnMainEnter,
  MainSearch,
  SearchLogoLink,
  SearchLogoImg,
  SearchLogoMobLink,
  SearchLogoMobImg,
  SearchForm,
  SearchText,
  SearchTextMob,
  SearchBtn,
  MainH2,
  MainContent,
} from "../../components/styles/main/MainPage.styles";
import { Link, NavLink } from "react-router-dom";
import * as S from "../profile/ProfilePage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { ContentCards } from "../../components/styles/main/CardsItems.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";
import { useGetAllAdsQuery } from "../../components/services/adsApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetAdsRequest, setSearchParameters } from "../../store/actions/creators/ads";
import { selectAllAdsList, selectIsLogin } from "../../store/selectors/ads";
import { useAuthContext } from "../../components/context/AuthContext";
import { MainContainer } from "../../components/styles/reusable/Usable.styles";

const Main = () => {
  const { data } = useGetAllAdsQuery({});
  const { user } = useAuthContext();

  // Фильтр по вводу в строку поиска
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const SearchProducts = async (data, keyword) => {
    const regex = new RegExp(keyword, 'i');
    const results = data.filter(product => regex.test(product?.title) || regex.test(product?.description));
    setSearchResults(results);
    dispatch(setSearchParameters(results))
}

const HandleSearchClick = async (event) => {
  event.preventDefault();
  SearchProducts(data, searchText)
}

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
     setSearchResults(data);
     dispatch(fetchSetAdsRequest(data))
    }
  }, [data]);

  return (
    <S.Wrapper>
      <Container>
        <Header>
          <HeaderNav>
            {user ? (
              <>
                <S.Button>Разместить объявление</S.Button>
                <NavLink to="/account">
                  <S.SellerButton>Личный кабинет</S.SellerButton>
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">
                <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
              </NavLink>
            )}
          </HeaderNav>
        </Header>
        <main>
          <MainSearch>
            <SearchLogoLink>
              <Logo />
            </SearchLogoLink>
            <SearchLogoMobLink>
              <SearchLogoMob />
            </SearchLogoMobLink>
            <SearchForm>
              <SearchText
                type="text"
                placeholder="Поиск по объявлениям"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <SearchTextMob
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
                <SearchBtn onClick={HandleSearchClick}>Найти</SearchBtn>
            </SearchForm>
          </MainSearch>
          <MainContainer>
            <MainH2>Объявления</MainH2>
            <MainContent>
              <ContentCards>
                {searchResults === "" ? data.map((ad, index) => (
                  <CardsItem
                    key={index}
                    title={ad.title}
                    picture={`http://localhost:8090/${ad.images[0]?.url}`}
                    price={ad.price}
                    date={ad.created_on.split("T")[0]}
                    place={ad.user.city}
                  />
                )) :
                searchResults.map((ad, index) => (
                  <CardsItem
                  key={index}
                  title={ad.title}
                  picture={`http://localhost:8090/${ad.images[0]?.url}`}
                  price={ad.price}
                  date={ad.created_on.split("T")[0]}
                  place={ad.user.city}
                  />
              ))}
                {searchText !== "" && searchResults?.length === 0
                  ? "Ничего не найдено"
                  : null}
              </ContentCards>
            </MainContent>
          </MainContainer>
        </main>
        <FooterAll />
      </Container>
    </S.Wrapper>
  );
};

export default Main;
