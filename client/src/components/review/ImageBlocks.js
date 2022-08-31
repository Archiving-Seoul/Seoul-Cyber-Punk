import styled from "styled-components";
import PhotoBlock from "./PhotoBlock";

function ImageBlocks() {
  return (
    <BlockBox>
      <GridBox>
        <PhotoBlock
          id="height_long"
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/10-things-you've-got-to-do-in-Seoul.png"
          }
          title={"10 things \n you've got to do in Seoul"}
        />
        <PhotoBlock
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/14-best-things-to-do-in-seoul.png"
          }
          title={"14 Best Things \n To Do In Seoul"}
        />
        <PhotoBlock
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/Luxury-Travel-Guide-in-Seoul-Korea.png"
          }
          title={"Luxury Travel Guide \n in Seoul Korea"}
        />
        <PhotoBlock
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/10-Tips-To-Visit-Seoul-On-A-Budget.png"
          }
          title={"10 Tips To Visit Seoul \n On A Budget"}
        />
        <PhotoBlock
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/10-Things-to-Know-Before-Travelling-to-Seoul-Alone.png"
          }
          title={"10 Things to Know Before \n Traveling to Seoul Alone"}
        />
        <PhotoBlock
          id="width_long"
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/30-Things-to-Do-and-Know-about-Seoul.png"
          }
          title={"30 Things to Do and Know about Seoul"}
        />
      </GridBox>
      <MainPhotoBox>
        <PhotoBlock
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/review/Travel-to-South-Korea.png"
          }
          title={"Travel to South Korea"}
        />
      </MainPhotoBox>
      <LogoTitle>CYBERPUNKSEOUL</LogoTitle>
    </BlockBox>
  );
}

const BlockBox = styled.div`
  width: 1352px;
  height: 1229px;
  margin: 0 auto;
`;

const GridBox = styled.div`
  width: 100%;
  height: 502px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 14px;
  column-gap: 14px;
`;

const MainPhotoBox = styled.div`
  width: 100%;
  height: 521px;
  border-radius: 20px;
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
