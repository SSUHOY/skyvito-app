import { Link } from "react-router-dom";
import AddNewImgUrl from "../../assets/images/icon_02.png";
import HomeLinkImgUrl from "../../assets/images/icon_01.png";
import UserProfileImgUrl from "../../assets/images/icon_03.png";
import {
  AddNewImg,
  Footer,
  FooterContainer,
  FooterImg,
  HomeLinkImg,
  UserProfileImg,
} from "../styles/main/Footer.styles";

export const FooterAll = () => {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterImg>
            <Link to="/">
              <HomeLinkImg src={HomeLinkImgUrl} />
            </Link>
          </FooterImg>
          <FooterImg>
            <Link to="#">
              <AddNewImg src={AddNewImgUrl} />
            </Link>
          </FooterImg>
          <FooterImg>
            <Link to="/account">
              <UserProfileImg src={UserProfileImgUrl} />
            </Link>
          </FooterImg>
        </FooterContainer>
      </Footer>
    </>
  );
};
