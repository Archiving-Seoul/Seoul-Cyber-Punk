import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function AboutMain() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/gr.png";
  return (
    <Container>
      <Img src={BACKGROUND_URL} />
      <NavBar>
        <ul>
          <li id="home">Home</li>
          <li id="about">About</li>
          <li id="spot">Spot</li>
          <li id="review">Review</li>
        </ul>
      </NavBar>
      <TitleText>CYBERPUNKSEOUL</TitleText>
      <IconBox>
        <FontAwesomeIcon icon={faArrowDown} />
      </IconBox>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 1440px;
  height: 1024px;
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
  color: red;
  line-height: 180px;
  text-align: center;
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
