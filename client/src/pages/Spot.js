import styled from "styled-components";
import Header from "../components/common/Header";
import Preview from "../components/spot/Preview";
import SpotList from "../components/spot/SpotList";

function Spot() {
  return (
    <Container>
      <Header />
      <Preview />
      <SpotList />
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Spot;
