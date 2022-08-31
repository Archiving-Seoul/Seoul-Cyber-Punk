import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

function Visitor() {
  return (
    <FullContainer>
      <Container>
        <SubTitle color="red" weight="normal">
          REVIEW
        </SubTitle>
        <Title>VISITOR</Title>
        <hr></hr>
        {/**
          Open API 연동시에 컴포넌트 분리하기
         */}
        <VisitBox>
          <SubTitle color="black">BLOG</SubTitle>
          <SubTitle weight="light">NOV 24 2021</SubTitle>
          <Content>14 Best Things To Do In Seoul</Content>
        </VisitBox>
        <hr></hr>
        <VisitBox>
          <SubTitle color="black">YOUTUBE</SubTitle>
          <SubTitle weight="light">AUG 13 2020</SubTitle>
          <Content>
            Seoul Hongdae 2AM,
            <br />
            walking in the rain
          </Content>
        </VisitBox>
        <hr></hr>
        <VisitBox>
          <SubTitle color="black">BLOG</SubTitle>
          <SubTitle weight="light">APR 7 2021</SubTitle>
          <Content>
            10 Things to Know
            <br />
            Before Travelling to Seoul Alone
          </Content>
        </VisitBox>
        <hr></hr>
        <LinkBox>
          <div>Lets see what others thinking</div>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            size="2x"
            className="rightArrow"
          />
        </LinkBox>
      </Container>
    </FullContainer>
  );
}
const FullContainer = styled.div`
  width: 100vw;
  height: 720px;
  background-color: white;
`;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: auto;
  padding: 40px 45px;
  box-sizing: border-box;
  hr {
    border-width: 1.5px;
    border-style: solid;
    border-color: black;
    background-color: black;
  }
`;
const VisitBox = styled.div`
  height: 110px;
  display: flex;
  box-sizing: border-box;
  div:nth-child(1) {
    width: 130px;
    margin: 23px 0 0 2px;
  }
  div:nth-child(2) {
    width: 342px;
    margin-top: 23px;
  }
`;
const SubTitle = styled.div`
  color: ${(props) => (props.color === "red" ? "#ff0000" : "black")};
  font-size: 20px;
  font-weight: ${(props) =>
    props.weight === "light" ? 400 : props.weight === "normal" ? 500 : 700};
`;
const Title = styled.div`
  color: black;
  font-weight: 800;
  font-size: 48px;
  margin: 24px 0 36px 0;
`;
const Content = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #ff0000;
  line-height: 36px;
  align-self: center;
  cursor: pointer;
`;
const LinkBox = styled.div`
  width: 100%;
  height: 125px;
  font-weight: 500;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-line: underline;
  div,
  .rightArrow {
    margin: 36px;
    cursor: pointer;
  }
`;
export default Visitor;
