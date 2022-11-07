import styled from "styled-components";
import PhotoBlock from "./PhotoBlock";
import Modal from "./Modal";

import {useParams} from "react-router-dom";

function ImageBlocks({data, clickedModal, setClickedModal}) {
  return (
    <>
      {clickedModal.tab === "youtube" && clickedModal.isModal && (
        <Modal setClickedModal={setClickedModal} clickedModal={clickedModal} />
      )}
      <BlockBox>
        <GridBox>
          {data.map((el, idx) => {
            return (
              <>
                <PhotoBlock
                  key={el._id}
                  tab={el.tab}
                  setClickedModal={setClickedModal}
                  id={el._id}
                  imgURL={el.imgURL}
                  title={el.title}
                  linkURL={el.linkURL}
                  boxNum={idx}
                />
              </>
            );
          })}
        </GridBox>
        <LogoTitle>CYBERPUNKSEOUL</LogoTitle>
      </BlockBox>
    </>
  );
}
const Margin = styled.div`
  width: 100%;
  border: 1px solid white;
`;
const BlockBox = styled.div`
  width: 1352px;
  height: 1229px;
  margin: 0 auto;
`;

const GridBox = styled.div`
  width: 100%;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 14px;
  column-gap: 14px;
`;

const MainPhotoBox = styled.div`
  width: 100%;
  height: 521px;
  margin-bottom: 44px;
`;

const LogoTitle = styled.h1`
  display: block;
  font-weight: 400;
  font-size: 95px;
  line-height: 98px;
  font-family: "Stretch Pro Regular", sans-serif;
  color: #560d0d;
`;

export default ImageBlocks;
