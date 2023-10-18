import React from 'react'

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
  MainContent
} from '../../styles/main/MainPage.styles'
import { NavLink } from 'react-router-dom'
import * as S from '../../styles/main/MainPage.styles'
import { Logo, SearchLogoMob } from '../../public/icons'
import { ContentCards } from '../../styles/main/CardsItems.styles'
import { CardsItem } from './components/cardsItem'
import { FooterAll } from './components/footer'
// import { CardsItem } from './components/cardsItem'

const Main = () => {
  return (
  <Container>
            <Header>
                <HeaderNav>
                    <NavLink>
                        <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
                    </NavLink>
                </HeaderNav>
            </Header>
            <main>
                <MainSearch>
                    <SearchLogoLink>
                        <Logo/>
                    </SearchLogoLink>
                    <SearchLogoMobLink>
                        <SearchLogoMob/>
                    </SearchLogoMobLink>
                    <SearchForm>
                        <SearchText
                            type="search"
                            placeholder="Поиск по объявлениям"
                            name="search" />
                        <SearchTextMob
                            type="search"
                            placeholder="Поиск"
                            name="search-mob" />
                        <SearchBtn>
                            Найти
                        </SearchBtn>
                    </SearchForm>
                </MainSearch>
                <MainContainer>
                    <MainH2>Объявления</MainH2>
                    <MainContent>
                        <ContentCards>
               
                                <CardsItem/>
                   
                       
                                    {/* <S.CardsItem /> */}
                       
                        </ContentCards>
                    </MainContent>
                </MainContainer>
            </main >
            <FooterAll/>
        </Container>

  )
}

export default Main

