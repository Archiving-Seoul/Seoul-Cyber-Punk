import styled from "styled-components";
import TextBox from "./TextBox";

function AboutIntroMap() {
  const INTRO_MAP_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/about_main.png";
  return (
    <Container>
      <Img src={INTRO_MAP_URL} />
      <TextBox name={"Hongdae"} left={"110px"} top={"455px"} />
      <TextBox name={"Sadang"} left={"660px"} top={"835px"} />
      <TextBox name={"Itewon"} left={"770px"} top={"575px"} />
      <TextBox name={"Gangnam"} left={"1000px"} top={"750px"} />
      <TextBox name={"Jamsil"} left={"1285px"} top={"685px"} />
      <TextBox name={"Euljiro"} left={"720px"} top={"183px"} />
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

export default AboutIntroMap;
