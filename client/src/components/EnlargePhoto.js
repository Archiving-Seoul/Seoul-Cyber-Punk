import styled from "styled-components";
function EnlargePhoto({ mainURL }) {
  return <Container>{mainURL ? <Img src={mainURL} /> : <div></div>}</Container>;
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
