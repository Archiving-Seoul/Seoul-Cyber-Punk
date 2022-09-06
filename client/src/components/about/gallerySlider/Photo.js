import styled from "styled-components";

function Photo({ subURL, mainURL, setClickedImgURL }) {
  return (
    <>
      <div
        onClick={() => {
          setClickedImgURL(mainURL);
          window.scrollTo({
            top: 4500,
            behavior: "smooth",
          });
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
