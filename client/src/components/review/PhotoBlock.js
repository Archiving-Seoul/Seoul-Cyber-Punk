import styled from "styled-components";

function PhotoBlock({
  title,
  imgURL,
  id,
  linkURL,
  setClickedModal,
  tab,
  boxNum,
}) {
  return (
    <>
      {tab === "web" ? (
        (boxNum + 1) % 6 === 0 ? (
          <>
            <StyledLink href={linkURL} target="_blank">
              <ImgBox>
                <img src={imgURL} alt={imgURL} />
              </ImgBox>
              <p>{title}</p>
            </StyledLink>
            <MarginBox></MarginBox>
            <MarginBox></MarginBox>
            <MarginBox></MarginBox>
          </>
        ) : (
          <StyledLink href={linkURL} target="_blank">
            <ImgBox>
              <img src={imgURL} alt={imgURL} />
            </ImgBox>
            <p>{title}</p>
          </StyledLink>
        )
      ) : tab === "youtube" ? (
        (boxNum + 1) % 6 === 0 ? (
          <>
            <Photo
              id={id}
              target="_blank"
              onClick={() => {
                setClickedModal((cur) => {
                  return {...cur, tab, id: linkURL, isModal: true};
                });
              }}
            >
              <ImgBox>
                <img src={imgURL} alt={imgURL} />
              </ImgBox>
            </Photo>
            <MarginBox></MarginBox>
            <MarginBox></MarginBox>
            <MarginBox></MarginBox>
          </>
        ) : (
          <Photo
            id={id}
            target="_blank"
            onClick={() => {
              setClickedModal((cur) => {
                return {...cur, tab, id: linkURL, isModal: true};
              });
            }}
          >
            <ImgBox>
              <img src={imgURL} alt={imgURL} />
            </ImgBox>
          </Photo>
        )
      ) : (
        ""
      )}
    </>
  );
}
const StyledLink = styled.a`
  border-radius: 15px;
  overflow: hidden;
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

const MarginBox = styled.div`
  /* border: 1px solid white; */
  margin-bottom: 50px;
`;
const Photo = styled.div`
  height: 253px;
  width: 100%;
  color: white;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default PhotoBlock;
