import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AccountPage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { Container, Header, Nav, PageContainer } from "./AccountPage.styles";

const Account = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <Header>
            <Nav>
              <Link>
                <SearchLogoMob />
              </Link>
              <S.Button>Разместить объявление</S.Button>
              <S.SellerButton>Личный кабинет</S.SellerButton>
            </Nav>
          </Header>
          <S.Main>
            <S.MainContainer>
              <S.MainCenterBox>
                <S.MainMenu>
                  <Link to="/">
                    <Logo />
                  </Link>
                  <S.MenuForm>
                    <Link to="/">
                      <S.ToMainButton>
                        Вернуться на главную
                      </S.ToMainButton>
                    </Link>
                  </S.MenuForm>
                </S.MainMenu>
                <S.TitleGreetings>Здравствуйте, ... !</S.TitleGreetings>
              </S.MainCenterBox>
            </S.MainContainer>
          </S.Main>
        </Container>
      </PageContainer>
    </>
  );
};

export default Account;
