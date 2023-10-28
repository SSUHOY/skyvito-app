import React from "react";
import { FooterAll } from "../../components/footer/footer";
import * as S from "./AdvPage.styles";
import {
  HeaderBtnLk,
  HeaderBtnMainEnter,
  HeaderNav,
} from "../../components/styles/main/MainPage.styles";
import { Link, NavLink, useParams } from "react-router-dom";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { useAuthContext } from "../../components/context/AuthContext";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";
import {
  useGetCurrentAdvQuery,
} from "../../components/services/adsApi";

export const AdvPage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { data } = useGetCurrentAdvQuery(id);

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
                    {data ? data.title : "Загрузка..."}
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>
                      {" "}
                      {data ? data.created_on.split("T")[0] : "Загрузка"}
                    </S.ArticleDate>
                    <S.ArticleCity>
                      {data ? data.user.city : "Загрузка"}
                    </S.ArticleCity>
                    <NavLink style={{ color: "blue" }}> ... отзыва</NavLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>
                    {data ? data.price : "Загрузка.."} {data ? "₽" : ""}
                  </S.ArticlePrice>
                  <S.ArticleBtn>
                    Показать&nbsp;телефон <br />
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </S.ArticleBtn>
                  <S.ArticleAuthor>
                    <S.AuthorImgDiv>
                      <S.AuthorImg src="" alt="" />
                    </S.AuthorImgDiv>
                    <S.AuthorContent>
                      <S.AuthorName>
                        {data ? data.user.name : "Загрузка"}
                      </S.AuthorName>
                      <S.AuthorAbout>
                        {data ? "Продает товары с " : ""}{" "}
                        {data ? data.user.sells_from : "Загрузка..."}
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
                {data ? data?.description : "Загрузка..."}
              </S.MainContentText>
            </S.MainContentDescription>
          </S.MainContainerDesc>
        </main>
        <FooterAll />
      </S.Container>
    </S.Wrapper>
  );
};
