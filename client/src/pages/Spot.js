import styled from "styled-components";
import Header from "../components/common/Header";
import Preview from "../components/spot/Preview";
import SpotList from "../components/spot/SpotList";
import * as api from "../api";
import {useQuery} from "@tanstack/react-query";

function Spot() {
  async function getSpot() {
    try {
      const res = await api.get(`/api/spot`);
      const data = await res.data;
      return data;
    } catch (error) {
      throw new Error(`${error} : 데이터를 받아올 수 없습니다.`);
    }
  }
  const {isLoading, data} = useQuery([`${"popular"}`], () => getSpot(), {
    select: (data) => {
      const popularData = data.data.filter((ele) =>
        ele.category.includes("popular")
      );
      const mzData = data.data.filter((ele) => ele.category.includes("mz"));
      return [popularData, mzData];
    },
  });
  console.log(data, isLoading);
  return (
    <Container>
      <Header isAbout={true} />
      <Preview />
      {!isLoading && <SpotList spots={data[0]} title="Most Popular" />}
      {!isLoading && <SpotList spots={data[1]} title="Hot place for MZ" />}
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
