import {useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";

function Modal({data, isModal, closeModal}) {
  const modalRef = useRef();
  useEffect(() => {
    document.addEventListener("click", clickModalOutside, true);
    return () => {
      document.removeEventListener("click", clickModalOutside, true);
    };
  }, []);
  function clickModalOutside(evt) {
    if (isModal && !modalRef.current.contains(evt.target)) {
      closeModal();
    }
  }
  return (
    <>
      <ModalLayer>
        <ModalBox ref={modalRef} imgURL={data.imgURL}>
          <Container>
            <Title>{data.name}</Title>
            <TextContainer>
              <FlexContent>
                <Content ftWeight={500} widthSize={"112px"}>
                  address
                </Content>
                <Content ftWeight={400}>{data.address}</Content>
              </FlexContent>
              <FlexContent>
                <Content ftWeight={500} widthSize={"112px"}>
                  info
                </Content>
                <Content ftWeight={400}>{data.description}</Content>
              </FlexContent>
            </TextContainer>
          </Container>
        </ModalBox>
      </ModalLayer>
    </>
  );
}

const ModalLayer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const popAni = keyframes`
  from {
    transform: translateY(70px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const ModalBox = styled.div`
  width: 1124px;
  height: 711px;
  background: black;
  background: linear-gradient(to bottom, transparent, black 90%),
    url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 44px;
  box-sizing: border-box;
  animation: ${popAni} 0.3s linear;
`;

const Container = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const TextContainer = styled(Container)`
  height: 30%;
  overflow: auto;
  justify-content: start;
  margin-bottom: 10px;
`;

const Title = styled.div`
  width: 340px;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  margin-bottom: 25px;
`;
const FlexContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Content = styled.div`
  font-size: 24px;
  font-weight: ${(props) => props.ftWeight};
  width: ${(props) => (props.widthSize ? props.widthSize : "662px")};
  line-height: 28px;
`;
export default Modal;
