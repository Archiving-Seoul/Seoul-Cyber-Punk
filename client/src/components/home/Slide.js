import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SEOULS_NAME = [
  "Euljiro",
  "Hongdae",
  "Itaewon",
  "Jamsil",
  "Gangnam",
  "Sadang",
];
function Slide() {
  return (
    <Container>
      <SlideTitle>in Seoul</SlideTitle>
      <StyledSlider {...settings}>
        {SEOULS_NAME.map((ele, id) => {
          let srcLink = "";
          if (id + 1 === 5) {
            srcLink = `https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/inSeoul${
              id + 1
            }.jpg`;
          } else {
            srcLink = `https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/inSeoul${
              id + 1
            }.png`;
          }
          return (
            <CardBox>
              <CardImg key={id} alt={id} src={srcLink} />
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
}
const CustomDot = styled.div`
  font-size: 64px;
  font-family: "Stretch Pro Regular", sans-serif;
`;
const settings = {
  dots: true,
  customPaging: (i) => {
    return <CustomDot>{SEOULS_NAME[i]}</CustomDot>;
  },
  speed: 400,
  // autoplay: true,
  vertical: true,
  autoplaySpeed: 2000,
  slidesToshow: 1,
  SlidesToScroll: 1,
  arrows: false,
};

const Container = styled.div`
  /* border: 1px solid white; */
  position: relative;
  display: block;
`;
const SlideTitle = styled.div`
  font-family: "Stretch Pro Regular", sans-serif;
  font-weight: 400;
  font-size: 88px;
  position: absolute;
  top: 85%;
  left: 2%;
  z-index: 99;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1440px;
    margin: auto;
    /* border: 1px solid white; */
  }
  .slick-dots {
    position: absolute;
    top: 26%;
    left: 60%;
    color: white;
    /* height: 100px; */
    height: 464px;
    width: 424px;

    li {
      height: 90px;
      color: white;
      display: block;
      &.slick-active {
        color: red;
      }
    }
  }
`;
const CardBox = styled.div`
  /* border: 1px solid white; */
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
export default Slide;
