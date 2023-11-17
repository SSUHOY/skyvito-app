import React, { useEffect, useMemo, useState } from "react";
import * as S from "./AuthPage.styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoSkyUrl from "../../assets/images/logo-skypro.png";
import ShowPassWordLogo from "../../assets/images/view_show_icon_124811.png";
import HidePassWordLogo from "../../assets/images/view_hide_icon_124813.png";
import { loginUserAction } from "../../store/actions/creators/ads";
import { useAuthContext } from "../../components/context/AuthContext";
import { useRegisterUserMutation } from "../../components/services/adsApi";

export const AuthPage = () => {
  const { setUser, loginUserFn, user, authError } = useAuthContext();
  const [registerUser, { error: registerError, data: registerData }] =
    useRegisterUserMutation();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [showPassword, setShowPassWord] = useState("password");
  const [emailError, setEmailError] = useState("Поле не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [information, setInf] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoginMode(location.pathname === "/login");
  }, [location.pathname, isLoginMode]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setError(null);
    let re = /^\S+@\S+\.\S+$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      setIsAuthLoading(true);
      if (!e.target.value) {
        setEmailError("Поле не может быть пустым");
        setIsAuthLoading(true);
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setError(null);
    if (!e.target.value) {
      setPasswordError("Поле не может быть пустым");
      setIsAuthLoading(true);
    } else {
      setPasswordError("");
      setIsAuthLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Пожалуйста, введите пароль и/или логин");
      setIsAuthLoading(true);
      return;
    }
    dispatch(loginUserAction);
    setIsAuthLoading(true);
    const user_data = {
      email,
      password,
    };
    await loginUserFn(user_data);
    setIsAuthLoading(false);
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
    setIsAuthLoading(true);
    const userData = {
      email,
      password,
      name,
      city,
      surname,
    };
    await registerUser(userData);
    setIsAuthLoading(false);
  };

  useEffect(() => {
    if (user) {
      const userData = {
        email,
        password,
        name,
        city,
        surname,
      };
      navigate("/account", { replace: true });
      setUser(userData);
    } else if (!user) {
      console.log("Logout");
    } else {
      console.log("ошибки");
    }
  }, [user, navigate]);

  // Реавторазиация после регистрации
  useEffect(() => {
    if (registerData) {
      navigate("/login", { replace: true });
      setInf("Пользователь зарегистрирован! Авторизуйтесь!");
    }
  }, [registerData]);

  // Отлавливаем ошибку
  useEffect(() => {
    if (authError) {
      setError(authError.data.detail);
      console.log("ошибка авторизации");
    }
    if (registerError) {
      setError(registerError.data.message);
      console.log("ошибка регистрации");
    }
  }, [authError, registerError]);

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
            {emailError && emailDirty && (
              <S.HandleInputErrorEmail>{emailError}</S.HandleInputErrorEmail>
            )}
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
              />
              {passwordError && passwordDirty && (
                <S.HandleInputErrorPassword>
                  {passwordError}
                </S.HandleInputErrorPassword>
              )}
              <S.ModalInput
                type={showPassword}
                name="password"
                placeholder="пароль"
                value={password}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => passwordHandler(e)}
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
            {error && <S.Error>Ошибка: {error}</S.Error>}
            {information && <S.Information>{information}</S.Information>}
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
            {emailError && emailDirty && (
              <S.HandleInputErrorEmail>{emailError}</S.HandleInputErrorEmail>
            )}
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
              />
              {passwordError && passwordDirty && (
                <S.HandleInputErrorPassword>
                  {passwordError}
                </S.HandleInputErrorPassword>
              )}
              <S.ModalInput
                type={showPassword}
                name="password"
                placeholder="Пароль"
                value={password}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => passwordHandler(e)}
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

            {error && <S.Error>Ошибка: {error}</S.Error>}

            <S.Buttons>
              <S.PrimaryButton
                onClick={() =>
                  handleRegister({ email, password, name, surname, city })
                }
                disabled={isAuthLoading}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
