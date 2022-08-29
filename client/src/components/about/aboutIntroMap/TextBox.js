import styled from "styled-components";
function TextBox({ name, left, top }) {
  return (
    <Box left={left} top={top}>
      <RedDot></RedDot>
      <Text>{name}</Text>
    </Box>
  );
}

const Box = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const RedDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

const Text = styled.p`
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  font-family: "Roboto";
  font-style: normal;
`;

export default TextBox;
