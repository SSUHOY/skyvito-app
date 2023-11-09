import React, { useEffect, useMemo, useState } from "react";
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
  useDeleteAdvMutation,
  useGetAllCurrentUserCommentsQuery,
  useGetCurrentAdvQuery,
  useRefreshTokenMutation,
} from "../../components/services/adsApi";
import { NewAdvModal } from "../../components/modal/new-adv";
import { ReviewsModal } from "../../components/modal/reviews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { EditAdvModal } from "../../components/modal/adv-edit";

export const AdvPage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { data, isLoading } = useGetCurrentAdvQuery(id);
  const [refreshToken] = useRefreshTokenMutation();

  const { data: advComments } = useGetAllCurrentUserCommentsQuery(id);
  const [deleteAdv] = useDeleteAdvMutation(id);
  const [selectedImg, setSelectedImg] = useState();
  const [adComments, setAdvComments] = useState([]);
  const [nextImg, setNextImg] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const [errorWithImg, setImgError] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedPhotoIndexOnMob, setSelectedPhotoIndexOnMob] = useState(null);

  // Pop-up "Post new Adv"
  const [modalActive, setModalActive] = useState(false);
  // Pop-up "Reviews"
  const [modalActiveRevs, setModalActiveRevs] = useState(false);
  // Pop-up "Edit adv"
  const [modalActiveEdit, setModalActiveEdit] = useState(false);

  const handleShowPhoneClick = () => {
    setShowPhone(true);
  };
  const handleSelectImg = (event) => {
    setSelectedImg(event.target.src);
  };

  const handleSelectImgByClickCircles = () => {
    setSelectedPhotoIndexOnMob(selectedImg.id);
  };

  const handleNextPhotoClick = () => {
    const nextIndex = (nextImg + 1) % data?.images.length;
    setNextImg(nextIndex);
    setSelectedImg(`http://localhost:8090/${data?.images[nextIndex]?.url}`);
  };

  useEffect(() => {
    setUploadedImages(data?.images);
  }, [modalActiveEdit]);

  const handleDeleteAdv = async () => {
    let delPrompt = confirm("Вы действительно хотите удалить объявление?");
    await refreshToken();
    if (delPrompt) {
      setDeleted(true);
      deleteAdv(id);
      return;
    }
  };

  useEffect(() => {
    if (advComments) {
      setAdvComments(advComments);
    }
  }, [advComments]);

  const adv = useMemo(() => data || [], [data]);
  const user_data = useMemo(() => user || [], [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Проверка");
      if (selectedImg === undefined) {
        return setImgError("Фото отсутсвует");
      }
    }, 1300);
    return () => clearTimeout(timer);
  }, [selectedImg]);

  console.log(adv)

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
                {errorWithImg != "" ? <S.Error>{errorWithImg}</S.Error> : ""}
                <S.ArticleFillImg>
                  {data?.images.slice(0, 1).map((image, index) => (
                    <S.ArticleImgBox
                      key={index}
                      onClick={() => handleSelectImgByClickCircles(image.id)}>
                      <S.ArticleImg
                        onClick={handleNextPhotoClick}
                        src={
                          !selectedImg
                            ? setSelectedImg(
                                `http://localhost:8090/${image.url}`
                              )
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
                    {data?.images?.slice(0, 5).map((image, index) => (
                      <S.ArticleImgBarCircle
                        key={index}
                        src={`http://localhost:8090/${image.url}`}
                      />
                    ))}
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              {isLoading ? (
                <Skeleton count={1} />
              ) : (
                <S.ArticleRight>
                  <S.ArticleBlock>
                    <S.ArticleTitle>
                      {adv ? adv.title : "Загрузка"}
                    </S.ArticleTitle>
                    <S.ArticleInfo>
                      <S.ArticleDate>
                        {" "}
                        {adv ? adv.created_on.split("T")[0] : "Загрузка"}
                      </S.ArticleDate>
                      <S.ArticleCity>
                        {adv ? adv.user.city : "Загрузка"}
                      </S.ArticleCity>
                      <S.OpenReviews onClick={() => setModalActiveRevs(true)}>
                        {" "}
                        <S.ReviewsParagraph>
                          Отзывы: {adComments ? adComments.length : "..."}
                        </S.ReviewsParagraph>
                      </S.OpenReviews>
                    </S.ArticleInfo>
                    <S.ArticlePrice>
                      {adv ? adv.price : "Загрузка.."} {data ? "₽" : ""}
                    </S.ArticlePrice>
                    {user_data.id === adv.user.id ? (
                      <S.UsersUIBtnBlock>
                        <S.ArticleBtnEdit
                          disabled={deleted}
                          onClick={setModalActiveEdit}>
                          Редактировать
                        </S.ArticleBtnEdit>
                        <S.ArticleBtnDel
                          onClick={handleDeleteAdv}
                          disabled={deleted}>
                          {deleted ? "Удалено" : "Снять с публикации"}
                        </S.ArticleBtnDel>
                      </S.UsersUIBtnBlock>
                    ) : (
                      <S.ArticleBtn onClick={handleShowPhoneClick}>
                        {adv.user.phone === null ? (
                          <S.ArticleBtnSpan>
                            Телефон продавца не указан
                          </S.ArticleBtnSpan>
                        ) : (
                          <S.ArticleBtnSpan>
                            Показать&nbsp;телефон
                            <br />
                            {!showPhone
                              ? `${adv?.user.phone.substring(
                                  0,
                                  1
                                )}${adv?.user.phone.substring(1, 4)} XXX XX XX`
                              : data?.user.phone}
                          </S.ArticleBtnSpan>
                        )}
                      </S.ArticleBtn>
                    )}

                    <S.ArticleAuthor>
                      <S.AuthorImgDiv>
                        <S.AuthorImg
                          src={
                            adv
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
                          {adv ? "Продает товары с " : ""}{" "}
                          {adv ? adv.user.sells_from : "Загрузка..."}
                        </S.AuthorAbout>
                      </S.AuthorContent>
                    </S.ArticleAuthor>
                  </S.ArticleBlock>
                </S.ArticleRight>
              )}
            </S.ArticleContent>
          </S.MainArticle>
          <S.MainContainerDesc>
            <S.ArticleTitle>Описание товара</S.ArticleTitle>
            <S.MainContentDescription>
              <S.MainContentText>
                {adv ? adv?.description : "Загрузка..."}
                {!adv?.description && "Описание отсутствует"}
              </S.MainContentText>
            </S.MainContentDescription>
          </S.MainContainerDesc>
        </main>
        <ReviewsModal
          active={modalActiveRevs}
          setActive={setModalActiveRevs}
          comments={advComments}
          advId={id}
        />
        <NewAdvModal active={modalActive} setActive={setModalActive} />
        <EditAdvModal
          active={modalActiveEdit}
          setActive={setModalActiveEdit}
          advData={data}
        />
        <FooterAll active={modalActive} setActive={setModalActive} />
      </S.Container>
    </S.Wrapper>
  );
};
