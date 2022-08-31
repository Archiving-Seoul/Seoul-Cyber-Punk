import styled from "styled-components";

const IMG_URL =
  "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/16617522";

function FloatSlide() {
  return (
    <>
      <Container>
        <ImgCard className="img1" src={`${IMG_URL}63511.jpg`}></ImgCard>
        <ImgCard className="img2" src={`${IMG_URL}74481.jpg`}></ImgCard>
        <ImgCard className="img3" src={`${IMG_URL}68440.jpg`}></ImgCard>
        <ImgCard className="img4" src={`${IMG_URL}78788.jpg`}></ImgCard>
        <ImgCard className="img5" src={`${IMG_URL}30705.png`}></ImgCard>
        <ImgCard className="img6" src={`${IMG_URL}59440.jpg`}></ImgCard>
        <ImgCard className="img7" src={`${IMG_URL}47146.png`}></ImgCard>
        <ImgCard className="img8" src={`${IMG_URL}55160.png`}></ImgCard>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 1219px;
  /* border: 1px solid white; */
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  position: relative;
`;

const ImgCard = styled.img`
  position: absolute;
  &.img1 {
    left: 44px;
    top: 44px;
  }
  &.img2 {
    left: 173px;
    top: 754px;
  }
  &.img3 {
    left: 865px;
    top: 357px;
  }
  &.img4 {
    left: 1092px;
    top: 981px;
  }
  &.img5 {
    left: 1485px;
    top: 114px;
  }
  &.img6 {
    left: 1871px;
    top: 800px;
  }
  &.img7 {
    width: 328px;
    height: 196px;
    left: 2391px;
    top: 44px;
  }
  &.img8 {
    width: 667px;
    height: 401px;
    left: 2169px;
    top: 335px;
  }
`;
export default FloatSlide;
