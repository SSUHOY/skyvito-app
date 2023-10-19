import React, { useEffect } from "react";

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
  console.log(data);

  const fetchAllAds = useSelector(selectAllAdsList);
  console.log(fetchAllAds);

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
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
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
              {fetchAllAds.map((ad, index) => (
                <CardsItem
                  key={index}
                  title={ad.title}
                  image={ad.images}
                  price={ad.price}
                />
              ))}
              {/* <S.CardsItem /> */}
            </ContentCards>
          </MainContent>
        </MainContainer>
      </main>
      <FooterAll />
    </Container>
  );
};

export default Main;
