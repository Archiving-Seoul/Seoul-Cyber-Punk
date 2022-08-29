import styled from "styled-components";

function Photo({ subURL, mainURL, setClickedImgURL }) {
  return (
    <>
      <div
        onClick={() => {
          setClickedImgURL(mainURL);
        }}
      >
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
