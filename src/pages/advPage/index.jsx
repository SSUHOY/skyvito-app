import React from "react";
import { FooterAll } from "../../components/footer/footer";
import * as S from "./AdvPage.styles";
import {
  HeaderBtnLk,
  HeaderBtnMainEnter,
  HeaderNav,
} from "../../components/styles/main/MainPage.styles";
import { Link, NavLink } from "react-router-dom";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { useAuthContext } from "../../components/context/AuthContext";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";

export const AdvPage = () => {
  const { user } = useAuthContext();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <HeaderNav>
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
                <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
              </NavLink>
            )}
          </HeaderNav>
        </S.Header>
        <main>
          <S.MainContainer>
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
          </S.MainContainer>
          <S.MainArticle>
            <S.ArticleContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImgBox>
                    <S.ArticleImg src="" alt="" />
                  </S.ArticleImgBox>
                  <S.ArticleImgBar>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                    <S.ArticleImgBarBox>
                      <S.ArticleImgBarImg src="" alt="" />
                    </S.ArticleImgBarBox>
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                    <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                    <NavLink>
                      23 отзыва
                    </NavLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                  <S.ArticleBtn>
                    Показать&nbsp;телефон <br />
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </S.ArticleBtn>
                  <S.ArticleAuthor>
                    <S.AuthorImgDiv>
                      <S.AuthorImg src="" alt="" />
                    </S.AuthorImgDiv>
                    <S.AuthorContent>
                      <S.AuthorName>Кирилл</S.AuthorName>
                      <S.AuthorAbout>
                        Продает товары с августа 2021
                      </S.AuthorAbout>
                    </S.AuthorContent>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticleContent>
          </S.MainArticle>
          <S.MainContainerDesc>
            <S.ArticleTitle>Описание товара</S.ArticleTitle>
            <S.MainContentDescription>
              <S.MainContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </S.MainContentText>
            </S.MainContentDescription>
          </S.MainContainerDesc>
        </main>
        <FooterAll />
      </S.Container>
    </S.Wrapper>
  );
};
