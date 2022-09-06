import styled from "styled-components";

function Photo({ subURL, setClickedIndex, isFirst, index, isOld }) {
  return (
    <>
      <div
        onClick={() => {
          if (isFirst) {
            setClickedIndex(index);
          } else {
            setClickedIndex(index + 18);
          }
          if (isOld) {
            window.scrollTo(0, 4500);
          } else {
            window.scrollTo(0, 8600);
          }
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
