import styled from "styled-components";

function Section() {
  return (
    <>
      <SectionHome>
        <HomeText>
          <div>37°33'58.87"N 126°58'40.63"E</div>
        </HomeText>
      </SectionHome>
      <ImgSection>
        <ImgLayer></ImgLayer>
      </ImgSection>
    </>
  );
}
const SectionHome = styled.div`
  background-image: url("https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/Frame.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 650px;
  width: 100%;
  margin-top: 41px;
  /* border: solid 1px red; */
`;
const HomeText = styled.div`
  color: #ff0000;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  padding-top: 3%;
  /* border: solid 1px red; */
`;
const ImgSection = styled.div`
  background-image: url("https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/home_section1.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 873px;
`;
const ImgLayer = styled.div`
  background-image: url("https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/home_section1_img.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  width: 894px;
  padding-left: calc(894px / 2);
  padding-top: calc((873px / 2));
`;
export default Section;
