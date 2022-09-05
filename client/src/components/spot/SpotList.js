import {useEffect, useState} from "react";
import styled from "styled-components";
import Modal from "./Modal";

function SpotList({spots, title}) {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  function closeModal() {
    document.body.style.overflow = "unset";
    setModal((prev) => !prev);
  }
  return (
    <>
      {modal && (
        <Modal
          isModal={modal}
          closeModal={closeModal}
          data={activeData}
        ></Modal>
      )}
      <Wrapper>
        <CategoryName>{title}</CategoryName>
        <Thumnails>
          {spots &&
            spots.data.map((ele, idx) => (
              <ThumBox
                key={idx}
                URL={ele.imgURL}
                onClick={() => {
                  setModal(true);
                  setActiveData(ele);
                  document.body.style.overflow = "hidden";
                }}
              ></ThumBox>
            ))}
        </Thumnails>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: -70px;
  margin: 30px auto;
  /* border: 1px white solid; */
  width: 1396px;
  height: 238px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const CategoryName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-top: 20px;
`;
const Thumnails = styled.div`
  width: 100%;
  margin: 18px 0;
  overflow: scroll;
  overflow: auto;
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
`;
const ThumBox = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  width: 328px;
  height: 196px;
  background-image: url(${(props) => props.URL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url(${(props) => props.URL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
export default SpotList;
