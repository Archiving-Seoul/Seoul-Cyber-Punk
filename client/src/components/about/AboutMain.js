import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";

function AboutMain() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/gr.png";
  const BLACK_BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/home.png";
  return (
    <Container>
      <Header isHome={false} />
      <Img BACKGROUND_URL={BACKGROUND_URL}>
        <BackgroundImg src={BLACK_BACKGROUND_URL} />
      </Img>

      <TitleText>CYBERPUNKSEOUL</TitleText>
      <IconBox>
        <FontAwesomeIcon icon={faArrowDown} />
      </IconBox>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  z-index: -999;
  width: 1440px;
  margin: 0 auto;
`;

const Img = styled.div`
  width: 1440px;
  height: 1024px;
  position: relative;
  background-image: url(${(props) => props.BACKGROUND_URL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const BackgroundImg = styled.img`
  width: 1440px;
  height: 1024px;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  /* background-image: url(${(props) => props.BACKGROUND_URL}); */
`;

const NavBar = styled.nav`
  position: absolute;
  right: 44px;
  top: 44px;
  width: 268px;
  color: white;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    li:hover {
      opacity: 0.5;
    }

    #about {
      color: red;
    }
  }
`;

const TitleText = styled.h1`
  position: absolute;
  top: 112px;
  left: 44px;
  right: 44px;
  width: 1352px;
  height: 180px;
  margin: 0;
  font-size: 98px;
  font-weight: 400;
  color: #ff0000;
  line-height: 180px;
  text-align: center;
  font-family: "Stretch Pro Regular", sans-serif;
`;

const IconBox = styled.div`
  color: white;
  width: 56px;
  height: 45px;
  position: absolute;
  left: 697px;
  top: 701px;
  font-size: 60px;
  cursor: pointer;

  :hover {
    color: black;
    opacity: 0.5;
  }
`;
export default AboutMain;
