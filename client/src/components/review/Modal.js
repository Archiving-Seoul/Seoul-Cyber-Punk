import styled from "styled-components";
import YouTube from "react-youtube";
import {useNavigate, useParams} from "react-router-dom";
export default function Modal({clickedModal, setClickedModal}) {
  const navigate = useNavigate();
  const {modalURL} = useParams();
  console.log(modalURL);
  const option = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };
  return (
    <ModalLayer
      onClick={() => {
        setClickedModal((cur) => {
          return {...cur, isModal: false};
        });
        navigate("/review?tab=youtube");
      }}
    >
      <ModalBox>
        <VideoBox>
          <YouTube videoId={clickedModal.id} option={option} />
        </VideoBox>
      </ModalBox>
    </ModalLayer>
  );
}

const ModalLayer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBox = styled.div`
  width: 640px;
  height: 390px;
  background: rgba(0, 0, 0, 0.8);
`;

const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
