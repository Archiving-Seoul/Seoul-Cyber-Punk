import styled from "styled-components";

function Preview() {
  return (
    <>
      <ImgBox>
        <Title>
          Gyeongbokgung
          <br />
          Palace
        </Title>
      </ImgBox>
    </>
  );
}

const ImgBox = styled.div`
  position: relative;
  width: 1440px;
  height: 481px;
  /* left: 0%;*/
  top: -72px;
  margin: auto;
  z-index: -99;
  overflow: hidden;
  background-image: url("https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/inSeoul5.jpg");
  background-position: center;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  color: #ffffff;
  position: absolute;
  left: 44px;
  top: 293px;
`;
export default Preview;
