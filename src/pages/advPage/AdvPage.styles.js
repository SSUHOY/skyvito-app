import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 768px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const Button = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;

export const MainContainerDesc = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
    margin-top: -65px;
  }
`;

export const MainArticle = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 0px 70px;
  @media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
  @media screen and (max-width: 1024px) {
    margin-right: 24px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 24px;
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleRight = styled.div`
  max-width: 621px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const EmptyImgMessage = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ArticleFillImg = styled.div`
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }
`;

export const ArticleImgBox = styled.div`
  background-color: #f0f0f0;
  margin: 0 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 270px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ArticleImgBarBox = styled.div`
  width: 88px;
  min-width: 88px;
  min-height: 0px;
  background-color: #f0f0f0;
  margin: 0 5px;
`;

export const ArticleImgBarImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background-color: white;
  -o-object-fit: cover;
  object-fit: cover;
  cursor: pointer;
  &.selected {
    border: 2px solid #009ee4;
  }
`;

export const ArticleImgBarMob = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    gap: 7px;
    justify-content: center;
  }
`;

export const ArticleImgBarCircle = styled.img`
  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
  &.selected {
    background-color: #ffffff;
  }
  // Написать значение для active
`;

export const ArticleBlock = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ArticleTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ArticleDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;
export const ArticleCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;
export const ReviewsParagraph = styled.p`
  cursor: pointer;
  color: #009ee4;
`;
export const OpenReviews = styled.div`
  font-size: 16px;
  line-height: 21px;
`;

export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ArticleBtn = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  &:hover {
    background: #0080c1;
  }
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const ArticleBtnEdit = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 189px;
  height: 50px;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background: #0080c1;
  }
  &:disabled {
    background-color: #d9d9d9;
    border: none;
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const UsersUIBtnBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const ArticleBtnDel = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 225px;
  height: 50px;
  gap: 20px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  &:hover {
    background: #0080c1;
  }
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
  &:disabled {
    background-color: #d9d9d9;
    border: none;
    color: #ffffff;
  }
`;

export const ArticleBtnSpan = styled.span``;

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImgDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const AuthorImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`;

export const AuthorContent = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const MainContentDescription = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
  padding-top: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
    padding-top: 15px;
  }
`;

export const MainContentText = styled.p`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const Error = styled.div`
  color: black;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
