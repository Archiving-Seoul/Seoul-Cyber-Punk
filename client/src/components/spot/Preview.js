import styled from "styled-components";

function Preview() {
  return (
    <>
      <ImgBox url={require("../../assets/images/01.jpg")}>
        <Title>Gyeongbokgung Palace</Title>
      </ImgBox>
    </>
  );
}

const ImgBox = styled.div`
  display: block;
  position: relative;
  width: 1440px;
  height: 481px;
  /* left: 0%;*/
  top: -72px;
  margin: auto;
  z-index: -99;
  overflow: hidden;
  background: linear-gradient(to top, transparent, black),
    url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Title = styled.div`
  width: 600px;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  color: #ffffff;
  position: absolute;
  left: 44px;
  top: 293px;
`;
export default Preview;
