import styled from "styled-components";

function DayNightMain() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/%EB%8D%B0%EC%9D%B4%EB%82%98%EC%9E%87.jpg";
  return (
    <Container>
      <Img src={BACKGROUND_URL} />
      <TextBox>
        <DayText>DAY</DayText>
        <NightText>NIGHT</NightText>
      </TextBox>
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
  height: 1898px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.h1`
  font-family: "Stretch Pro Regular", sans-serif;
  font-weight: 400;
  font-size: 140px;
  line-height: 180px;
  color: #ff0000;
`;

const DayText = styled(MainText)`
  position: absolute;
  top: 74px;
`;

const NightText = styled(MainText)`
  position: absolute;
  bottom: 74px;
`;

export default DayNightMain;
