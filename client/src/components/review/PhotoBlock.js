import styled from "styled-components";

function PhotoBlock({title, imgURL, id, linkURL, setClickedModal}) {
  return (
    <Photo
      id={id}
      target="_blank"
      onClick={() => {
        setClickedModal((cur) => {
          return {...cur, id: linkURL, isModal: true};
        });
      }}
    >
      <ImgBox>
        <img src={imgURL} alt={imgURL} />
      </ImgBox>
      <p>{title}</p>
    </Photo>
  );
}
const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid white;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const Photo = styled.a`
  width: 100%;
  height: 100%;
  display: inline-block;
  color: white;
  position: relative;
  border-radius: 20px;
  grid-column: ${({id}) =>
    id === "width_long" ? "3/5" : id === "height_long" ? "1/2" : "0"};
  grid-row: ${({id}) =>
    id === "width_long" ? "2/3" : id === "height_long" ? "1/3" : "0"};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  p {
    position: absolute;
    bottom: 24px;
    left: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }
`;

export default PhotoBlock;
