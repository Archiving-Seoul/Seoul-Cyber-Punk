import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRef, useState } from "react";

function GallerySlider() {
  const [moveLeft, setMoveLeft] = useState(false);
  const photoBoxRef1 = useRef();
  const photoBoxRef2 = useRef();

  return (
    <div>
      <GalleryContainer moveLeft={moveLeft}>
        <ButtonBox>
          <LeftButton
            moveLeft={moveLeft}
            onClick={() => {
              setMoveLeft(true);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </LeftButton>
        </ButtonBox>
        <PhotoContainer>
          <PhotoBox ref={photoBoxRef1}>
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
          </PhotoBox>
          {/* <PhotoBox ref={photoBoxRef2}>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
            <div>32</div>
            <div>33</div>
            <div>34</div>
            <div>35</div>
            <div>36</div>
          </PhotoBox> */}
        </PhotoContainer>
        <ButtonBox>
          <RightButton
            moveLeft={moveLeft}
            onClick={() => {
              setMoveLeft(false);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </RightButton>
        </ButtonBox>
      </GalleryContainer>
    </div>
  );
}

const GalleryContainer = styled.div`
  margin: 0 20px;
  background-color: black;
  border: 3px solid black;
  display: grid;
  grid-template-columns: ${({ moveLeft }) =>
    moveLeft ? "44px 1fr 147px" : "147px 1fr 44px"};
`;

const PhotoContainer = styled.div`
  width: 100%;
  background-color: white;
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
  border: 3px solid blue;

  div {
    width: 172px;
    height: 283px;
    border: 1px solid black;
    text-align: center;
    background-color: lightpink;
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
