import styled from "styled-components";
import SelectItem from "./SelectItem";
import { useState } from "react";

function Favorite() {
  const [select, setSelect] = useState([
    { mood: "OLD", isSelect: false },
    { mood: "NEW", isSelect: false },
    { mood: "DAY", isSelect: false },
    { mood: "NIGHT", isSelect: false },
  ]);
  function selectHandler(mood) {
    const newSelect = select.map((el) => {
      return el.mood !== mood
        ? { ...el, isSelect: false }
        : { ...el, isSelect: true };
    });
    setSelect(newSelect);
  }

  function filteredSelect(mood) {
    const result = select.find((el) => el.mood === mood);
    return result;
  }
  return (
    <Container>
      <Title>Favorite</Title>
      <HelpText>select your ONE</HelpText>
      <SelectBox>
        <SelectItem
          title={"OLD"}
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/10_1.png"
          }
          select={filteredSelect("OLD")}
          selectHandler={selectHandler}
        />
        <SelectItem
          title={"NEW"}
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/10_2.png"
          }
          select={filteredSelect("NEW")}
          selectHandler={selectHandler}
        />
        <SelectItem
          title={"DAY"}
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/10_3.png"
          }
          select={filteredSelect("DAY")}
          selectHandler={selectHandler}
        />
        <SelectItem
          title={"NIGHT"}
          imgURL={
            "https://seoul-cyber-punk.s3.ap-northeast-2.amazonaws.com/about-background/10_4.png"
          }
          select={filteredSelect("NIGHT")}
          selectHandler={selectHandler}
        />
      </SelectBox>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 1440px;
  height: 918px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #ff0000;
  font-family: "Stretch Pro Regular", sans-serif;
  font-weight: 400;
  font-size: 144px;
  line-height: 120px;
  text-align: center;
  margin-top: 110px;
  margin-bottom: 8px;
`;

const HelpText = styled.h5`
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;

const SelectBox = styled.div`
  position: absolute;
  bottom: 109px;
  left: 144px;
  width: 1152px;
  height: 463px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 45px;
`;

export default Favorite;
