import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRef, useState } from "react";
import Photo from "./Photo";
import EnlargePhoto from "./EnlargePhoto";

function GallerySlider({ firstImg, secondImg }) {
  const [moveLeft, setMoveLeft] = useState(false);
  const [clickedImgURL, setClickedImgURL] = useState("");
  const photoBoxRef1 = useRef();
  const photoBoxRef2 = useRef();

  return (
    <>
      <EnlargePhoto mainURL={clickedImgURL} firstImg={firstImg} />
      <GalleryContainer moveLeft={moveLeft}>
        <ButtonBox>
          <LeftButton
            moveLeft={moveLeft}
            onClick={() => {
              setMoveLeft(true);
              photoBoxRef1.current.style.transform = "translateX(-1326px)";
              photoBoxRef2.current.style.transform = "translateX(-1326px)";
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </LeftButton>
        </ButtonBox>
        <PhotoContainer>
          <PhotoBox ref={photoBoxRef1}>
            {firstImg &&
              firstImg.map((el) => {
                return (
                  <Photo
                    key={el._id}
                    subURL={el.subURL}
                    mainURL={el.mainURL}
                    setClickedImgURL={setClickedImgURL}
                  />
                );
              })}
          </PhotoBox>
          <PhotoBox ref={photoBoxRef2}>
            {secondImg &&
              secondImg.map((el) => {
                return (
                  <Photo
                    key={el._id}
                    subURL={el.subURL}
                    mainURL={el.mainURL}
                    setClickedImgURL={setClickedImgURL}
                  />
                );
              })}
          </PhotoBox>
        </PhotoContainer>
        <ButtonBox>
          <RightButton
            moveLeft={moveLeft}
            onClick={() => {
              setMoveLeft(false);
              photoBoxRef1.current.style.transform = "translateX(1px)";
              photoBoxRef2.current.style.transform = "translateX(1px)";
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </RightButton>
        </ButtonBox>
      </GalleryContainer>
    </>
  );
}

const GalleryContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-color: black;
  display: grid;
  grid-template-columns: ${({ moveLeft }) =>
    moveLeft ? " 0 1fr 120px  " : "120px 1fr 0 "};
`;

const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const PhotoBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 44px;
  column-gap: 55px;
  padding: 44px 0;
  padding-right: 20px;
  background-color: black;
  transition: transform 1.3s ease-out 0.1s;

  div {
    width: 172px;
    height: 283px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 56px;
  height: 45px;
  background: none;
  font-weight: bold;
  font-size: 40px;
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const LeftButton = styled(Button)`
  color: ${({ moveLeft }) => (moveLeft ? "black" : "white")};
`;

const RightButton = styled(Button)`
  color: ${({ moveLeft }) => (moveLeft ? "white" : "black")};
`;

export default GallerySlider;
