import React, { useEffect, useMemo, useState } from "react";

import {
  Container,
  Header,
  HeaderNav,
  HeaderBtnMainEnter,
  MainSearch,
  SearchLogoLink,
  SearchLogoMobLink,
  SearchForm,
  SearchText,
  SearchTextMob,
  SearchBtn,
  MainH2,
  MainContent,
  SearchError,
} from "../../components/styles/main/MainPage.styles";
import { NavLink } from "react-router-dom";
import * as S from "../profile/ProfilePage.styles";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { ContentCards } from "../../components/styles/main/CardsItems.styles";
import { CardsItem } from "../../components/cardsItem/cardsItem";
import { FooterAll } from "../../components/footer/footer";
import { useGetAllAdsQuery } from "../../components/services/adsApi";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import {
  fetchSetAdsRequest,
  setSearchParameters,
} from "../../store/actions/creators/ads";
import { useAuthContext } from "../../components/context/AuthContext";
import { MainContainer } from "../../components/styles/reusable/Usable.styles";
import { NewAdvModal } from "../../components/modal/new-adv";
import { selectAllAdsList } from "../../store/selectors/ads";

const Main = () => {
  const { data } = useGetAllAdsQuery({});
  const { user } = useAuthContext();

  // Поп-ап "Разместить объявление"
  const [modalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter text by search bar inputs
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const selectAllAds = useSelector(selectAllAdsList);
  console.log("🚀 ~ file: index.jsx:49 ~ Main ~ selectAllAds:", selectAllAds);

  const SearchProducts = async (data, keyword) => {
    const regex = new RegExp(keyword, "i");
    const results = data.filter(
      (product) =>
        regex.test(product?.title) || regex.test(product?.description)
    );
    setSearchResults(results);
    dispatch(setSearchParameters(results));
  };

  useMemo(() => {
    let searchResults = [...selectAllAds];
    if (searchText !== "") {
      searchResults = searchResults.filter((ad) =>
        ad.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return setSearchResults(searchResults);
  }, [selectAllAds, searchText]);

  const HandleSearchClick = (event) => {
    event.preventDefault();
    SearchProducts(data, searchText);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setSearchResults(data);
      dispatch(fetchSetAdsRequest(data));
    }
  }, [data]);

  // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper>
      <Container>
        <Header>
          <HeaderNav>
            {user ? (
              <>
                <S.Button
                  disabled={isLoading}
                  className={isLoading ? "disabled" : ""}
                  onClick={() => setModalActive(true)}>
                  Разместить объявление
                </S.Button>
                <NavLink to="/account">
                  <S.SellerButton
                    disabled={isLoading}
                    className={isLoading ? "disabled" : ""}>
                    Личный кабинет
                  </S.SellerButton>
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">
                <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
              </NavLink>
            )}
          </HeaderNav>
        </Header>
        <main>
          <MainSearch>
            <SearchLogoLink>
              <Logo />
            </SearchLogoLink>
            <SearchLogoMobLink>
              <SearchLogoMob />
            </SearchLogoMobLink>
            <SearchForm>
              <SearchText
                type="text"
                placeholder="Поиск по объявлениям"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <SearchTextMob
                type="search"
                placeholder="Поиск"
                name="search-mob"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <SearchBtn
                onClick={HandleSearchClick}
                onKeyDown={HandleSearchClick}>
                Найти
              </SearchBtn>
            </SearchForm>
          </MainSearch>
          <MainContainer>
            <MainH2>Объявления</MainH2>
            <MainContent>
              {searchText !== "" && searchResults?.length === 0
                ? <SearchError>Ничего не найдено</SearchError>
                : null}
              <ContentCards>
                {searchResults === ""
                  ? data.map((ad, index) => (
                      <CardsItem
                        advId={ad.id}
                        key={index}
                        title={ad.title}
                        picture={`http://localhost:8090/${ad.images[0]?.url}`}
                        price={ad.price}
                        date={ad.created_on}
                        place={ad.user.city}
                        isLoading={isLoading}
                      />
                    ))
                  : searchResults.map((ad, index) => (
                      <CardsItem
                        advId={ad.id}
                        key={index}
                        title={ad.title}
                        picture={`http://localhost:8090/${ad.images[0]?.url}`}
                        price={ad.price}
                        date={ad.created_on}
                        place={ad.user.city}
                        isLoading={isLoading}
                      />
                    ))}
              </ContentCards>
            </MainContent>
          </MainContainer>
        </main>
        <NewAdvModal active={modalActive} setActive={setModalActive} />
        <FooterAll active={modalActive} setActive={setModalActive} />
      </Container>
    </S.Wrapper>
  );
};

export default Main;
