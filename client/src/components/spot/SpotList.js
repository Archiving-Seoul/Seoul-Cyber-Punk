import styled from "styled-components";

function SpotList() {
  return (
    <>
      <Wrapper>
        <CategoryName>Most Popular</CategoryName>
        <Thumnails>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
        </Thumnails>
        <CategoryName>Hot place for MZ</CategoryName>
        <Thumnails>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
          <ThumBox></ThumBox>
        </Thumnails>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  position: relative;
  top: -50px;
  margin: auto;
  /* border: 1px white solid; */
  width: 1396px;
  height: 238px;
  padding: 0 20px;
  box-sizing: border-box;
`;
const CategoryName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-top: 20px;
`;
const Thumnails = styled.div`
  width: 100%;
  margin: 18px 0;
  overflow: scroll;
  overflow: auto;
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
`;
const ThumBox = styled.div`
  flex-shrink: 0;
  width: 328px;
  height: 196px;
  background-image: url("https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/home/1661752268440.jpg");
`;
export default SpotList;
