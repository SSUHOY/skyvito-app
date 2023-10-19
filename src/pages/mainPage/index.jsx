import React from "react";

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
// import { CardsItem } from './components/cardsItem'

const Main = () => {
const {data} = useGetAllAdsQuery({})
console.log(data)

  return (
    <Container>
      <Header>
        <HeaderNav>
          <NavLink to='/login'>
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
              <CardsItem />

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
