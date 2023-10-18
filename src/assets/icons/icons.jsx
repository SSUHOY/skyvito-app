import LogoUrl from '../images/logo.png'
import LogoMobUrl from '../images/logo-mob.png'
import * as S from '../../components/styles/main/MainPage.styles'


export const Logo = () => {
    return <S.LogoImg src={LogoUrl} alt="logo" />
  }

  export const SearchLogoMob = () => {
    return <S.SearchLogoMob src={LogoMobUrl} alt="logo" />
  }

