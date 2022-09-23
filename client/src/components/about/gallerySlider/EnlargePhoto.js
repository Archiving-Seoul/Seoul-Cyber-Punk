import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

function EnlargePhoto({ combineMood, clickedIndex }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current === null) return;
    sliderRef.current.slickGoTo(clickedIndex);
  }, [clickedIndex]);

  return (
    <Container>
      <StyledSlider {...option} ref={sliderRef}>
        {combineMood.map((el) => {
          return <img key={el._id} src={el.mainURL} alt="사진" />;
        })}
      </StyledSlider>
    </Container>
  );
}

const option = {
  dots: false,
  speed: 400,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToshow: 1,
  SlidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  infinite: true,
};

const Container = styled.section`
  background-color: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1440px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1440px;
    height: 1024px;
  }
`;

export default EnlargePhoto;
