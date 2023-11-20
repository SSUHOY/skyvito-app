import React from "react";
import { FooterAll } from "../../components/footer/footer";
import { useAuthContext } from "../../components/context/AuthContext";
import * as S from "./NotFoundPage.styles";
import {
  HeaderBtnLk,
  HeaderBtnMainEnter,
  HeaderNav,
} from "../../components/styles/main/MainPage.styles";
import { Link, NavLink } from "react-router-dom";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";

export const NotFound = () => {
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
          <S.ErrorNotFoundContainer>
            <S.ErrorBox>
              <S.ErrorCode>404</S.ErrorCode>
              <S.ErrorHelpDescription>
                Упс.. Страница не найдена &#128546; <br />
                Либо возникла проблема с интернет
                соединением. <br /> Вы можете вернуться&nbsp;
                <S.ErrorItem component={Link} to="/">
                  на главную
                </S.ErrorItem>
              </S.ErrorHelpDescription>
            </S.ErrorBox>
          </S.ErrorNotFoundContainer>
        </main>
      </S.Container>
    </S.Wrapper>
  );
};
