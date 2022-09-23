import styled, { keyframes } from "styled-components";
import logo from "../assets/images/logo.png";
export function Loading() {
  return (
    <ImgBox>
      <Img src={logo} alt="로고" />
    </ImgBox>
  );
}

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Rotate = keyframes`
100%{
    transform: rotate(360deg) ;
}
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  animation: ${Rotate} 6s linear infinite;
`;
