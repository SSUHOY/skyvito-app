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

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 768px){
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0;
  }
`;

export const HeaderBtnLk = styled.button`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBtnMainEnter = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

export const Main = styled.main`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

export const MainSearch = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const SearchLogoLink = styled.a`
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 55px;
  height: 50.06px;
`;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;
}
`;

export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  @media screen and (max-width: 590px) {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: flex;
  }
`;

export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const SearchTextMob = styled.input`
  display: none;

  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;

    &::-moz-placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }

    &::placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const SearchLogoMobLink = styled.div`
  display: none;

  @media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const SearchLogoMob = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const BackToBtn = styled.img`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
    position: absolute;
    top: 89px;
  }
`;

export const SearchBtn = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 13px;
      cursor: pointer;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
  }
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;

  &::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
    }
  &::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
    }
}
`;

//CardsItem

// export const CardsItem = styled.div`
//   margin: 0;

//   @media screen and (max-width: 590px) {
//     box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
//     border-radius: 6px;
//   }
// `;

// export const CardContainer = styled.div`
//   @media screen and (max-width: 620px) {
//     padding-left: 10px;
//   }
// `;

// export const ContentCards = styled.div`
//   max-width: 1158px;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(4, 270px);
//   grid-auto-rows: 441px;
//   grid-gap: 40px 26px;
//   justify-content: center;
//   overflow-y: auto;
//   scrollbar-color: #ffffff #2e2e2e;
//   scrollbar-width: thin;
//   scrollbar-width: 0px;
//   height: 922px;

//   &::-webkit-scrollbar {
//     width: 0px;
//     background-color: #009ee4;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #0080c1;
//     border-radius: 3px;
//   }

//   @media screen and (max-width: 1158px) {
//     display: grid;
//     grid-template-columns: repeat(3, 270px);
//   }

//   @media screen and (max-width: 890px) {
//     display: grid;
//     grid-template-columns: repeat(2, 270px);
//   }

//   @media screen and (max-width: 620px) {
//     display: grid;
//     grid-template-columns: repeat(2, 137px);
//     grid-auto-rows: 293px;
//     grid-gap: 10px 10px;
//     justify-content: center;
//     height: 100%;
//   }
// `;

// export const CardsCard = styled.div`
//   width: 270px;
//   height: 441px;
//   display: flex;
//   flex-direction: column;

//   @media screen and (max-width: 590px) {
//     width: 137px;
//     height: 293px;
//     display: flex;
//     flex-direction: column;
//     box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
//     border-radius: 6px;
//     }
// }
// `;

// export const CardImageContainer = styled.div`
//   width: 270px;
//   height: 270px;
//   background-color: #f0f0f0;

//   @media screen and (max-width: 590px) {
//     border-top-left-radius: 6px;
//     border-top-right-radius: 6px;
//     width: 137px;
//     height: 132px;
//     background-color: #d9d9d9;
//   }
// `;

// export const CardImage = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   -o-object-fit: cover;
//   object-fit: cover;

//   @media screen and (max-width: 590px) {
//     width: 100%;
//     height: 100%;
//     display: block;
//     -o-object-fit: cover;
//     object-fit: cover;
//     border-top-left-radius: 6px;
//     border-top-right-radius: 6px;
//   }
// `;

// export const CardTitle = styled.h3`
//   height: 52px;
//   font-size: 22px;
//   line-height: 26px;
//   color: #009ee4;
//   margin-bottom: 10px;
//   margin-top: 20px;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   @media screen and (max-width: 590px) {
//     height: 51px;
//     font-size: 14px;
//     line-height: 17px;
//     color: #009ee4;
//     margin-bottom: 10px;
//     margin-top: 10px;
//   }
// `;

// export const CardPrice = styled.p`
//   color: #000000;
//   font-size: 22px;
//   line-height: 33px;
//   margin-bottom: 10px;

//   @media screen and (max-width: 590px) {
//     font-size: 16px;
//     line-height: 24px;
//   }
// `;

// export const CardPlace = styled.p`
//   font-size: 16px;
//   line-height: 21px;
//   color: #5f5f5f;
//   margin-bottom: 4px;

//   @media screen and (max-width: 590px) {
//     font-size: 12px;
//     line-height: 16px;
//     color: #5f5f5f;
//   }
// `;

// export const CardDate = styled.p`
//   font-size: 16px;
//   line-height: 21px;
//   color: #5f5f5f;

//   @media screen and (max-width: 590px) {
//     font-size: 12px;
//     line-height: 16px;
//     color: #5f5f5f;
//   }
// `;
