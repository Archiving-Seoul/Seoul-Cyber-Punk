import styled from "styled-components";
import PhotoBlock from "./PhotoBlock";
import Modal from "./Modal";

function ImageBlocks({data, clickedModal, setClickedModal}) {
  return (
    <>
      {clickedModal.isModal && (
        <Modal setClickedModal={setClickedModal} clickedModal={clickedModal} />
      )}
      <BlockBox>
        <GridBox>
          {/* {} */}
          <PhotoBlock
            setClickedModal={setClickedModal}
            id="height_long"
            imgURL={data && data[6].img_URL}
            title={data && data[6].title}
            linkURL={data && data[6].link_URL}
          />
          <PhotoBlock
            setClickedModal={setClickedModal}
            imgURL={data && data[0].img_URL}
            title={data && data[0].title}
            linkURL={data && data[0].link_URL}
          />
          <PhotoBlock
            setClickedModal={setClickedModal}
            imgURL={data && data[1].img_URL}
            title={data && data[1].title}
            linkURL={data && data[1].link_URL}
          />
          <PhotoBlock
            setClickedModal={setClickedModal}
            imgURL={data && data[2].img_URL}
            title={data && data[2].title}
            linkURL={data && data[2].link_URL}
          />
          <PhotoBlock
            setClickedModal={setClickedModal}
            imgURL={data && data[3].img_URL}
            title={data && data[3].title}
            linkURL={data && data[3].link_URL}
          />
          <PhotoBlock
            id="width_long"
            setClickedModal={setClickedModal}
            imgURL={data && data[4].img_URL}
            title={data && data[4].title}
            linkURL={data && data[4].link_URL}
          />
        </GridBox>
        <MainPhotoBox>
          <PhotoBlock
            setClickedModal={setClickedModal}
            imgURL={data && data[5].img_URL}
            title={data && data[5].title}
            linkURL={data && data[5].link_URL}
          />
        </MainPhotoBox>
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
  grid-template-columns: repeat(4, 1fr);
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
