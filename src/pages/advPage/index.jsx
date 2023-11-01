import React, { useEffect, useState } from "react";
import { FooterAll } from "../../components/footer/footer";
import * as S from "./AdvPage.styles";
import {
  HeaderBtnLk,
  HeaderBtnMainEnter,
  HeaderNav,
} from "../../components/styles/main/MainPage.styles";
import { Link, NavLink, useParams } from "react-router-dom";
import { Logo, SearchLogoMob } from "../../assets/icons/icons";
import { useAuthContext } from "../../components/context/AuthContext";
import {
  MainMenu,
  MenuForm,
  ToMainButton,
} from "../../components/styles/reusable/Usable.styles";
import {
  useGetAllCommentsQuery,
  useGetAllCurrentUserCommentsQuery,
  useGetCurrentAdvQuery,
} from "../../components/services/adsApi";
import { NewAdvModal } from "../../components/modal/new-adv";
import { ReviewsModal } from "../../components/modal/reviews";

export const AdvPage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { data } = useGetCurrentAdvQuery(id);
  const { data: advComments } = useGetAllCurrentUserCommentsQuery(id);
  console.log(advComments)
  const [selectedImg, setSelectedImg] = useState();
  const [adComments, setAdvComments] = useState([]);
  const [nextImg, setNextImg] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

  // Поп-ап "Разместить объявление"
  const [modalActive, setModalActive] = useState(false);
  // Поп-ап "отзывы"
  const [modalActiveRevs, setModalActiveRevs] = useState(false);

  const handleShowPhoneClick = () => {
    setShowPhone(true);
  };
  const handleSelectImg = (event) => {
    setSelectedImg(event.target.src);
  };

  const handleNextPhotoClick = () => {
    const nextIndex = (nextImg + 1) % data?.images.length;
    setNextImg(nextIndex);
    setSelectedImg(`http://localhost:8090/${data?.images[nextIndex]?.url}`);
  };

  useEffect(() => {
    if (advComments) {
      setAdvComments(advComments);
    }
  }, [advComments]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <HeaderNav>
            <Link to="/">
              <SearchLogoMob />
            </Link>
            {user ? (
              <>
                <S.Button onClick={() => setModalActive(true)}>
                  Разместить объявление
                </S.Button>
                <NavLink to="/account">
                  <HeaderBtnLk>Личный кабинет</HeaderBtnLk>
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">
                <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
              </NavLink>
            )}
          </HeaderNav>
        </S.Header>
        <main>
          <S.MainContainer>
            <MainMenu>
              <Link to="/">
                <Logo />
              </Link>
              <MenuForm>
                <Link to="/">
                  <ToMainButton>Вернуться на главную</ToMainButton>
                </Link>
              </MenuForm>
            </MainMenu>
          </S.MainContainer>
          <S.MainArticle>
            <S.ArticleContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  {data?.images.slice(0, 1).map((image, index) => (
                    <S.ArticleImgBox key={index}>
                      <S.ArticleImg
                        onClick={handleNextPhotoClick}
                        src={
                          !selectedImg
                            ? `http://localhost:8090/${image.url}`
                            : selectedImg
                        }
                      />
                    </S.ArticleImgBox>
                  ))}
                  <S.ArticleImgBar>
                    {data?.images?.slice(0, 5).map((image, index) => (
                      <S.ArticleImgBarBox key={index}>
                        <S.ArticleImgBarImg
                          onClick={handleSelectImg}
                          src={`http://localhost:8090/${image.url}`}
                        />
                      </S.ArticleImgBarBox>
                    ))}
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                    <S.ArticleImgBarCircle />
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    {data ? data.title : "Загрузка..."}
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>
                      {" "}
                      {data ? data.created_on.split("T")[0] : "Загрузка"}
                    </S.ArticleDate>
                    <S.ArticleCity>
                      {data ? data.user.city : "Загрузка"}
                    </S.ArticleCity>
                    <NavLink
                      style={{ color: "blue" }}
                      onClick={() => setModalActiveRevs(true)}>
                      {" "}
                      Отзывы: {adComments ? adComments.length : "..."}
                    </NavLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>
                    {data ? data.price : "Загрузка.."} {data ? "₽" : ""}
                  </S.ArticlePrice>
                  <S.ArticleBtn onClick={handleShowPhoneClick}>
                    Показать&nbsp;телефон
                    <br />
                    <S.ArticleBtnSpan>
                      {!showPhone
                        ? `${data?.user.phone.substring(
                            0,
                            1
                          )}${data?.user.phone.substring(1, 4)} XXX XX XX`
                        : data?.user.phone}
                    </S.ArticleBtnSpan>
                  </S.ArticleBtn>
                  <S.ArticleAuthor>
                    <S.AuthorImgDiv>
                      <S.AuthorImg
                        src={
                          data
                            ? `http://localhost:8090/${data.user.avatar}`
                            : "Загрузка..."
                        }
                      />
                    </S.AuthorImgDiv>
                    <S.AuthorContent>
                      <Link to={`/seller-account/${id}`}>
                        <S.AuthorName>
                          {data ? data.user.name : "Загрузка"}
                        </S.AuthorName>
                      </Link>
                      <S.AuthorAbout>
                        {data ? "Продает товары с " : ""}{" "}
                        {data ? data.user.sells_from : "Загрузка..."}
                      </S.AuthorAbout>
                    </S.AuthorContent>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticleContent>
          </S.MainArticle>
          <S.MainContainerDesc>
            <S.ArticleTitle>Описание товара</S.ArticleTitle>
            <S.MainContentDescription>
              <S.MainContentText>
                {data ? data?.description : "Загрузка..."}
              </S.MainContentText>
            </S.MainContentDescription>
          </S.MainContainerDesc>
        </main>
        <ReviewsModal
          active={modalActiveRevs}
          setActive={setModalActiveRevs}
          comments={advComments}
        />
        <NewAdvModal active={modalActive} setActive={setModalActive} />
        <FooterAll />
      </S.Container>
    </S.Wrapper>
  );
};
