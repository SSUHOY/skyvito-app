import React, { useEffect, useState } from "react";
import LogoSkyUrl from "../../../assets/images/logo-skypro.png";
import ShowPassWordLogo from "../../../assets/images/view_show_icon_124811.png";
import HidePassWordLogo from "../../../assets/images/view_hide_icon_124813.png";
import * as S from "./changePassword.styles";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../services/adsApi";

const ChangePasswordModal = ({ active, setActive }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [sendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [changePassword, { error }] = useChangePasswordMutation();
  const [showPassword, setShowPassWord] = useState("password");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    if (showPassword == "password") {
      setShowPassWord("text");
    } else {
      setShowPassWord("password");
    }
    return false;
  };

  const handleSetCurrentPassword = (event) => {
    setCurrentPassword(event.target.value);
    setSendButtonDisabled(false);
  };

  const handleSetNewPassword = (event) => {
    setNewPassword(event.target.value);
    setSendButtonDisabled(false);
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword) {
      setErrorMessage("Обязательные поля не заполнены");
      return;
    }

    const newPassData = {
      password_1: currentPassword,
      password_2: newPassword,
    };

    changePassword(newPassData);
    setSendButtonDisabled(true);

    navigate("/account", { replace: true });
  };

  return (
    <S.PageContainer className={active ? "active" : ""}>
      <S.ModalForm
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}>
        <S.ModalLogo>
          <S.ModalLogoImage src={LogoSkyUrl} alt="logo" />
        </S.ModalLogo>
        <S.ModalBtnCloseBox>
          <S.ModalBtnCloseLine onClick={() => setActive(false)} />
        </S.ModalBtnCloseBox>
        <S.Inputs>
          <S.Description>Введите текущий пароль:</S.Description>
          <S.ModalInput
            type={showPassword}
            name="password"
            placeholder="Текущий пароль"
            onChange={handleSetCurrentPassword}
          />
          <S.ShowPasswordLogo
            onClick={handleShowPassword}
            src={
              showPassword === "password" ? ShowPassWordLogo : HidePassWordLogo
            }
          />
          <S.Description>Новый пароль:</S.Description>
          <S.ModalInput
            type={showPassword}
            name="password"
            placeholder="Новый пароль"
            onChange={handleSetNewPassword}
          />

          <S.ShowPasswordLogoSec
            onClick={handleShowPassword}
            src={
              showPassword === "password" ? ShowPassWordLogo : HidePassWordLogo
            }
          />
        </S.Inputs>

        {error ? (
          <S.Error>Ошибка : {JSON.stringify(error.data.detail)}</S.Error>
        ) : (
          ""
        )}

        <S.Buttons>
          <S.PrimaryButton
            disabled={sendButtonDisabled}
            onClick={handleChangePassword}>
            Сменить пароль
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
};

export default ChangePasswordModal;
