import styled from "styled-components";

function PhotoBlock({ title, imgURL, id, linkURL, setClickedModal, tab }) {
  return (
    <>
      {tab === "web" ? (
        <StyledLink href={linkURL} target="_blank">
          <ImgBox>
            <img src={imgURL} alt={imgURL} />
          </ImgBox>
          <p>{title}</p>
        </StyledLink>
      ) : tab === "youtube" ? (
        <Photo
          id={id}
          target="_blank"
          onClick={() => {
            setClickedModal((cur) => {
              return { ...cur, tab, id: linkURL, isModal: true };
            });
          }}
        >
          <ImgBox>
            <img src={imgURL} alt={imgURL} />
          </ImgBox>
          {/* <p>{title}</p> */}
        </Photo>
      ) : (
        ""
      )}
    </>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  width: 100%;
  position: relative;
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

const Photo = styled.div`
  width: 100%;
  color: white;
  position: relative;
  border-radius: 20px;
  /* grid-column: ${({ id }) =>
    id === "width_long" ? "3/5" : id === "height_long" ? "1/2" : "0"};
  grid-row: ${({ id }) =>
    id === "width_long" ? "2/3" : id === "height_long" ? "1/3" : "0"}; */
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

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default PhotoBlock;
