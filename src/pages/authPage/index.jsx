import React, { useState } from "react";
import * as S from "./AuthPage.styles";
import { Link } from "react-router-dom";
import LogoSkyUrl from "../../assets/images/logo-skypro.png";

export const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src={LogoSkyUrl} alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="email"

                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="пароль"
                // onChange={(event) => {
                //   setPassword(event.target.value);
                // }}
              />
            </S.Inputs>
            {/* {error && <S.Error>{error}</S.Error>} */}
            <S.Buttons>
              <S.PrimaryButton>Войти</S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton onClick={() => setIsLoginMode(false)}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="email"
                name="email"
                placeholder="email"
                // onChange={(event) => {
                //   setUserName(event.target.value);
                // }}
              />
              <S.ModalInput
                type="text"
                name="password"
                placeholder="Пароль"
                // value={email}
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                // value={password}
                // onChange={(event) => {
                //   setPassword(event.target.value);
                // }}
              />
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                // value={repeatPassword}
                // onChange={(event) => {
                //   setRepeatPassword(event.target.value);
                // }}
              />
              <S.ModalInput
                type="text"
                name="
              surname"
                placeholder="Фамилия (необязательно)"
                // value={repeatPassword}
                // onChange={(event) => {
                //   setRepeatPassword(event.target.value);
                // }}
              />
              <S.ModalInput
                type="text"
                name="
              surname"
                placeholder="Город (необязательно)"
                // value={repeatPassword}
                // onChange={(event) => {
                //   setRepeatPassword(event.target.value);
                // }}
              />
            </S.Inputs>
            {/* {error && <S.Error>{error}</S.Error>} */}
            <S.Buttons>
              <S.PrimaryButton>Зарегистрироваться</S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
