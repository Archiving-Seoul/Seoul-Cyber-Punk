// import {useNavigate} from "react-router-dom";
import styled from "styled-components";
// import {useEffect, useState} from "react";
import Header from "../components/home/Header";
import Section from "../components/home/Section";
import Slide from "../components/home/Slide";
import FloatSlide from "../components/home/FloatSlide";

function Home() {
  return (
    <Container>
      <Header />
      <Section />
      <Slide />
      <FloatSlide />
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Home;
