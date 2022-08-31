import styled from "styled-components";
import Header from "../components/home/Header";
import Section from "../components/home/Section";
import Slide from "../components/home/Slide";
import FloatSlide from "../components/home/FloatSlide";
import Visitor from "../components/home/Visitor";
import ScrollTop from "../components/home/ScrollTop";

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Section />
        <Slide />
        <FloatSlide />
      </Container>
      <Visitor />
      <ScrollTop />
    </>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Home;
