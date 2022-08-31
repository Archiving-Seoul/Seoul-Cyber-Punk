// import {useNavigate} from "react-router-dom";
import styled from "styled-components";
// import {useEffect, useState} from "react";
import Header from "../components/home/Header";
import Section from "../components/home/Section";
// import VerticalSlide from "../components/home/VerticalSlide";
import Slide from "../components/home/Slide";
// import SliderExam from "../components/home/SimpleSlider";
function Home() {
  return (
    <Container>
      <Header />
      <Section />
      {/* <VerticalSlide /> */}
      <Slide />
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Home;
