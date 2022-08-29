import styled from "styled-components";
import { useRef } from "react";
function EnlargePhoto({ mainURL, firstImg }) {
  let firstPhoto = useRef();
  if (firstImg) {
    firstPhoto = firstImg[0].mainURL;
  }

  return (
    <Container>
      {mainURL && firstImg ? <Img src={mainURL} /> : <Img src={firstPhoto} />}
    </Container>
  );
}

const Container = styled.section`
  background-color: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 1024px;
`;

const Img = styled.img`
  width: 1440px;
  height: 1024px;
`;
export default EnlargePhoto;
