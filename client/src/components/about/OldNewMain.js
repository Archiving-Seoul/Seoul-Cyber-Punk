import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import TypeIt from "typeit-react";

function OldNewMain() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/%EC%98%AC%EB%93%9C%EB%89%B4.jpg";
  return (
    <>
      <Container>
        <Img src={BACKGROUND_URL} />
        {/* <TypeIt
          getBeforeInit={(instance) => {
            instance.type("OLD & NEW").pause(750);
            return instance;
          }}
          options={{ cursor: false }}
          style={MainText}
        /> */}

        <MainText>OLD & NEW</MainText>
      </Container>
      <SubBox>
        <SubText>
          "So we beat on, boats against the current, borne back ceaselessly in
          to the past."
        </SubText>
        <IconBox>
          <FontAwesomeIcon icon={faArrowDown} />
        </IconBox>
      </SubBox>
    </>
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

const MainText = styled.h1`
  position: absolute;
  left: 136px;
  top: 438px;
  font-family: "Stretch Pro Regular", sans-serif;
  font-weight: 400;
  font-size: 140px;
  line-height: 180px;
  color: #ff0000;
`;

// const MainText = {
//   position: "absolute",
//   left: "136px",
//   top: "438px",
//   fontFamily: "Stretch Pro Regular, sans-serif",
//   fontWeight: "400",
//   fontSize: "140px",
//   lineHeight: "180px",
//   color: "#ff0000",
// };

const SubBox = styled.article`
  position: relative;
  width: 1440px;
  height: 402px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const SubText = styled.p`
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
`;

const IconBox = styled.div`
  position: absolute;
  bottom: 72px;
  color: white;
  width: 56px;
  height: 45px;
  font-size: 50px;

  :hover {
    opacity: 0.5;
  }
`;
export default OldNewMain;
