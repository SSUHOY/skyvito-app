import LogoUrl from './img/logo.png'
import LogoMobUrl from './img/logo-mob.png'
import * as S from '../../components/styles/main/MainPage.styles'


export const Logo = () => {
    return <S.LogoImg src={LogoUrl} alt="logo" />
  }

  export const SearchLogoMob = () => {
    return <S.SearchLogoMob src={LogoMobUrl} alt="logo" />
  }

