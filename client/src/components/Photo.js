import styled from "styled-components";

function Photo({ mainURL, subURL }) {
  return (
    <>
      <div>
        <Img src={subURL} />
      </div>
    </>
  );
}

const Img = styled.img`
  width: 172px;
  height: 283px;
  cursor: pointer;
`;
export default Photo;
