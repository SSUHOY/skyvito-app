import React, { useEffect, useState } from "react";
import * as S from "./LoginModal.styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoSkyUrl from "../../../assets/images/logo-skypro.png";
import ShowPassWordLogo from "../../../assets/images/view_show_icon_124811.png";
import HidePassWordLogo from "../../../assets/images/view_hide_icon_124813.png";
import { useRegisterUserMutation } from "../../services/adsApi";
import { useAuthContext } from "../../context/AuthContext";
import { loginUser } from "../../../store/actions/creators/ads";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const { setUser, loginUserFn } = useAuthContext();
  const [registerUser, { data }] = useRegisterUserMutation();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  console.log(
    "🚀 ~ file: index.jsx:25 ~ AuthPage ~ isAuthLoading:",
    isAuthLoading
  );

  const [showPassword, setShowPassWord] = useState("password");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginMode(location.pathname === "/reLogin");
  }, [location.pathname, isLoginMode]);

  const handleLogin = async () => {
    dispatch(loginUser());
    if (!email || !password) {
      setError("Пожалуйста, введите пароль и/или логин");
      return;
    }
    try {
      setIsAuthLoading(true);
      await loginUserFn({ email, password });
      setIsAuthLoading(false);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setError(error.message || "Неизвестная ошибка при входе");
      setIsAuthLoading(false);
    }
  };

  const handleShowPassword = () => {
    if (showPassword == "password") {
      setShowPassWord("text");
    } else {
      setShowPassWord("password");
    }
    return false;
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
    try {
      setIsAuthLoading(true);
      localStorage.clear();

      const userData = {
        email,
        password,
        name,
        city,
        surname,
      };
      registerUser(userData);
      setUser(userData)
      await loginUserFn({ email, password });
      setIsAuthLoading(false);
      navigate("/account", { replace: true });
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setError(error.message || "Неизвестная ошибка регистрации");
      setIsAuthLoading(false);
    }
  };
  // Отлавливаем ошибку
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

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
                type={showPassword}
                name="password"
                placeholder="пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ShowPasswordLogoLogin
                onClick={handleShowPassword}
                src={
                  showPassword === "password"
                    ? ShowPassWordLogo
                    : HidePassWordLogo
                }
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}

            <S.Buttons>
              <S.PrimaryButton
                onClick={() => handleLogin({ email, password })}
                disabled={isAuthLoading}>
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
                type="text"
                name="login"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type={showPassword}
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ShowPasswordLogoSec
                onClick={handleShowPassword}
                src={
                  showPassword === "password"
                    ? ShowPassWordLogo
                    : HidePassWordLogo
                }
              />
              <S.ModalInput
                type={showPassword}
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              <S.ShowPasswordLogo
                onClick={handleShowPassword}
                src={
                  showPassword === "password"
                    ? ShowPassWordLogo
                    : HidePassWordLogo
                }
              />
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                value={name}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="
              surname"
                placeholder="Фамилия (необязательно)"
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="
              surname"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={() =>
                  handleRegister({ email, password, name, surname, city })
                }
                disabled={true}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
