import {useEffect, useState} from "react";
import Slider from "react-slick";
import styled, {keyframes} from "styled-components";
import Modal from "./Modal";

function SpotList({spots, title}) {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const [activeArrow, setActiveArrow] = useState(false);
  function closeModal() {
    document.body.style.overflow = "unset";
    setModal((prev) => !prev);
  }
  useEffect(() => {
    console.log(spots, "스팟");
  }, []);
  return (
    <div>
      {modal && (
        <Modal
          isModal={modal}
          closeModal={closeModal}
          data={activeData}
        ></Modal>
      )}
      <Wrapper
        onMouseOver={() => {
          setActiveArrow(true);
        }}
        onMouseOut={() => {
          setActiveArrow(false);
        }}
        active={activeArrow}
      >
        <CategoryName>{title}</CategoryName>
        <StyledSlider {...settings}>
          {spots &&
            spots.map((ele, idx) => (
              <ThumBox
                key={idx}
                URL={ele.imgURL}
                onClick={() => {
                  setModal(true);
                  setActiveData(ele);
                  document.body.style.overflow = "hidden";
                }}
              >
                <ThumText>{ele.name}</ThumText>
              </ThumBox>
            ))}
        </StyledSlider>
      </Wrapper>
    </div>
  );
}

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
};

const Wrapper = styled.div`
  position: relative;
  top: -70px;
  margin: 30px auto;
  /* border: 1px white solid; */
  /* width: 1396px; */
  height: 238px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const CategoryName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-top: 20px;
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  margin: 25px 0;
  /* overflow: scroll; */
  /* overflow: auto; */
  /* display: flex;
  white-space: nowrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px; */
  .slick-list {
    &:hover {
    }
  }
  .slick-slide {
    width: 324px !important;
    padding-right: 20px;
  }
  .slick-disabled {
    opacity: 0.1;
  }
  .slick-prev {
    z-index: 99;
    left: 0;
    width: 40px;
    height: 240px;
    background: rgba(0, 0, 0, 0.8);
    /* float: left; */
  }
  .slick-next {
    z-index: 99;
    right: 0px;
    width: 40px;
    height: 240px;
    background: rgba(0, 0, 0, 0.8);
  }
  .slick-disabled {
    display: none;
  }
`;
const hoverIn = keyframes`
from {
  transform: scale(1);
  }
  to {
    width: 335px;
    height: 203px;
    z-index: 999;
  }
  `;
const hoverOut = keyframes`
  from {
    width: 335px;
    height: 203px;
    z-index: 999;
    opacity: 0.2;
  }
  to {
    transform: scale(1);
  }
`;

const ThumText = styled.div`
  font-weight: 400;
  font-size: 22px;
  align-self: flex-end;
  margin: 25px;
  display: none;
`;
const ThumBox = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  width: 320px;
  height: 188px;
  background-image: url(${(props) => props.URL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  animation: ${hoverOut} 0.4s ease-in-out;
  &:hover {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url(${(props) => props.URL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${hoverIn} 0.4s linear forwards;
    div {
      display: block;
    }
  }
`;
export default SpotList;
