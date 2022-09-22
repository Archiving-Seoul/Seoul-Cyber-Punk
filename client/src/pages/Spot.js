import styled from "styled-components";
import Header from "../components/common/Header";
import Preview from "../components/spot/Preview";
import SpotList from "../components/spot/SpotList";
import * as api from "../api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Spot() {
  const [cateogry, setCategory] = useState("");
  async function getSpot() {
    try {
      const res = await api.get(`/api/spot`);
      const data = await res.data;
      return data;
    } catch (error) {
      throw new Error(`${error} : 데이터를 받아올 수 없습니다.`);
    }
  }
  const { isLoading, data } = useQuery([`${"popular"}`], () => getSpot(), {
    select: (data) => {
      const tmpData = data.data.filter((ele) =>
        ele.category.includes("popular")
      );
      return tmpData;
    },
  });
  console.log(data, isLoading);
  // const popular = data.data.filter((ele) => ele.category.includes("popular"));
  // function filteredData(category) {
  //   return data.data.filter((ele) => ele.category.contains("popular"));
  // }
  // const popular = filteredData("popular");
  // console.log(popular);
  return (
    <Container>
      <Header />
      <Preview />
      {!isLoading && <SpotList spots={data} title="Most Popular" />}
      {/* <SpotList spots={data} title="Hot place for MZ" /> */}
      {/* <SpotList spots={data} title="calm" /> */}
      {/* <SpotList spots={data} title="Fun" /> */}
      {/* <SpotList spots={data} title="Traditional" /> */}
      {/* <SpotList spots={data} title="Movie spot" /> */}
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Spot;
