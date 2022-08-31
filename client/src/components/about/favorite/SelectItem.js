import styled from "styled-components";

function SelectItem({ title, imgURL }) {
  return (
    <ItemBox>
      <img src={imgURL} alt={title} />
      <Text>{title}</Text>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  width: 569px;
  height: 209px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  img {
    width: 569px;
    height: 209px;
  }
`;
const Text = styled.p`
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 90px;
  left: 270px;
`;
export default SelectItem;
