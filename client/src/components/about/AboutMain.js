import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";
import TypeIt from "typeit-react";

function AboutMain() {
  const COLOR_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/gr.png";
  const BLACK_BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/home.png";

  function scrollHandler() {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }
  return (
    <BackgroundBox BACKGROUND_URL={COLOR_URL}>
      <Header isHome={false} isAbout={true} />
      <OverlayImg BACKGROUND_URL={BLACK_BACKGROUND_URL}></OverlayImg>
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type("CYBERPUNKSEOUL").pause(1000);
          return instance;
        }}
        options={{ cursor: false }}
        style={TitleText}
      />

      <IconBox onClick={scrollHandler}>
        <FontAwesomeIcon icon={faArrowDown} />
      </IconBox>
    </BackgroundBox>
  );
}

const BackgroundBox = styled.div`
  background-image: url(${(props) => props.BACKGROUND_URL});
  position: relative;
  width: 1440px;
  height: 1024px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const OverlayImg = styled.div`
  width: 1440px;
  height: 1024px;
  opacity: 0.7;

  background-image: url(${(props) => props.BACKGROUND_URL});
  position: absolute;
  top: 0;
  left: 0;
`;

// const TitleText = styled.h1`
//   position: absolute;
//   top: 112px;
//   left: 44px;
//   right: 44px;
//   width: 1352px;
//   height: 180px;
//   margin: 0;
//   font-size: 98px;
//   font-weight: 400;
//   color: #ff0000;
//   line-height: 180px;
//   text-align: center;
//   font-family: "Stretch Pro Regular", sans-serif;
// `;

const TitleText = {
  position: "absolute",
  top: "112px",
  left: "44px",
  right: "44px",
  width: "1352px",
  height: "180px",
  margin: "0",
  fontSize: "98px",
  fontWeight: "400",
  color: "#ff0000",
  lineHeight: "180px",
  textAlign: "center",
  fontFamily: `Stretch Pro Regular, sans-serif`,
};
const IconBox = styled.div`
  color: white;
  width: 56px;
  height: 45px;
  position: absolute;
  left: 697px;
  top: 701px;
  font-size: 55px;
  cursor: pointer;

  :hover {
    color: black;
    opacity: 0.5;
  }
`;
export default AboutMain;
