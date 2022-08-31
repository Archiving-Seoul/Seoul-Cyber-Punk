import styled from "styled-components";

function AboutDescription() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/03.jpg";
  return (
    <Container>
      <Img src={BACKGROUND_URL} />
      <TextBox>
        <MainText>SEOUL</MainText>
        <ContentText>
          Seoul is a colorful city.The old and the modern coexist and harmonize.
          <br />
          People in Seoul work hard during the day and enjoy the night.
          <br />
          Buildings that were hidden during the day are revealed more dazzlingly
          when the night comes.
        </ContentText>
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
  height: 1024px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 60px;
  left: 43px;
`;
const MainText = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin: 0;
  margin-bottom: 44px;
`;

const ContentText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  color: white;
`;

export default AboutDescription;
