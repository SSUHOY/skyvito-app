import React, { useState } from "react";
import * as S from "./AuthPage.styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoSkyUrl from "../../assets/images/logo-skypro.png";

export const AuthPage = () => {
  // const dispatch = useDispatch();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
console.log(error)

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Пожалуйста, введите пароль и/или логин");
      return;
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Не заполнены обязательные поля (email, пароль)");
      return;
    }
    if (repeatPassword !== password) {
      setError("Пароли не совпадают");
      return;
    }
  };

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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({email, password})}>
                Войти
              </S.PrimaryButton>
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
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="password"
                placeholder="Пароль"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
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
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleRegister({email, password})}>Зарегистрироваться</S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
