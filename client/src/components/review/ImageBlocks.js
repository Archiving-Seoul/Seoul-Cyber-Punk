import styled from "styled-components";
import PhotoBlock from "./PhotoBlock";
import Modal from "./Modal";

function ImageBlocks({ data, clickedModal, setClickedModal }) {
  return (
    <>
      {clickedModal.tab === "youtube" && clickedModal.isModal && (
        <Modal setClickedModal={setClickedModal} clickedModal={clickedModal} />
      )}
      <BlockBox>
        <GridBox>
          {data.map((el) => {
            return (
              <PhotoBlock
                key={el._id}
                tab={el.tab}
                setClickedModal={setClickedModal}
                imgURL={el.imgURL}
                title={el.title}
                linkURL={el.linkURL}
              />
            );
          })}
        </GridBox>
        <LogoTitle>CYBERPUNKSEOUL</LogoTitle>
      </BlockBox>
    </>
  );
}

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
  font-weight: 400;
  font-size: 95px;
  line-height: 98px;
  font-family: "Stretch Pro Regular", sans-serif;
  color: #560d0d;
`;

export default ImageBlocks;
