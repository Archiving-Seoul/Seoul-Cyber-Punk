import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Header from "../components/home/Header";
import Section from "../components/home/Section";
function Home() {
  return (
    <Container>
      <Header />
      <Section />
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Home;
