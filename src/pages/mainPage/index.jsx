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
  MainContainer,
  MainH2,
  MainContent,
} from "../../components/styles/main/MainPage.styles";
import { NavLink } from "react-router-dom";
import * as S from "../../components/styles/main/MainPage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { ContentCards } from "../../components/styles/main/CardsItems.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";
import { useGetAllAdsQuery } from "../../components/services/adsApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetAdsRequest } from "../../store/actions/creators/ads";
import { selectAllAdsList } from "../../store/selectors/ads";
// import { CardsItem } from './components/cardsItem'

const Main = () => {
  const { data } = useGetAllAdsQuery({});
  const fetchAllAds = useSelector(selectAllAdsList);

  // Фильтр по вводу в строку поиска
  const [searchText, setSearchText] = useState("");

  const filteredAds = useMemo(() => {
    let result = [...fetchAllAds];
    console.log(result)
    if (searchText !== "") {
      result = result.filter((ad) =>
        ad.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    return result;
  }, [fetchAllAds, searchText]);


  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(fetchSetAdsRequest(data));
    }
  }, [data, dispatch]);

  return (
    <Container>
      <Header>
        <HeaderNav>
          <NavLink to="/login">
            <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
          </NavLink>
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
            <SearchBtn>Найти</SearchBtn>
          </SearchForm>
        </MainSearch>
        <MainContainer>
          <MainH2>Объявления</MainH2>
          <MainContent>
            <ContentCards>
              {filteredAds.map((ad, index) => (
                <CardsItem
                  key={index}
                  title={ad.title}
                  picture={`http://localhost:8090/${ad.images[0]?.url}`}
                  price={ad.price}
                  date={ad.created_on.split("T")[0]}
                  place={ad.user.city}
                />
              ))}
              {/* <S.CardsItem /> */}
              {searchText !== '' && filteredAds?.length === 0 ? "Ничего не найдено" : null}
            </ContentCards>
          </MainContent>
        </MainContainer>
      </main>
      <FooterAll />
    </Container>
  );
};

export default Main;
