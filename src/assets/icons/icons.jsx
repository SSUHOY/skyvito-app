import LogoUrl from "../images/logo.png";
import LogoMobUrl from "../images/logo-mob.png";
import BackToLogoMobUrl from "../images/back_to_logo.png"
import * as S from "../../components/styles/main/MainPage.styles";

export const Logo = () => {
  return <S.LogoImg src={LogoUrl} alt="logo" />;
};

export const SearchLogoMob = () => {
  return <S.SearchLogoMob src={LogoMobUrl} alt="logo" />;
};

export const BackToBtn = () => {
  return <S.BackToBtn src={BackToLogoMobUrl} alt="back-to-logo" />;
};
