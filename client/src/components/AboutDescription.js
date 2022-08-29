import styled from "styled-components";

function AboutDescription() {
  const BACKGROUND_URL =
    "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/03.jpg";
  return (
    <Container>
      <Img src={BACKGROUND_URL} />
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

export default AboutDescription;
