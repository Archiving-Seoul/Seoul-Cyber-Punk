import styled from "styled-components";
import Header from "../components/common/Header";
import Preview from "../components/spot/Preview";
import SpotList from "../components/spot/SpotList";
import * as api from "../api";
import {useQuery} from "@tanstack/react-query";
import {Loading} from "../components/Loading";

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
      const popular = data.data.filter((ele) =>
        ele.category.includes("popular")
      );
      const mz = data.data.filter((ele) => ele.category.includes("mz"));
      const calm = data.data.filter((ele) => ele.category.includes("calm"));
      const funny = data.data.filter((ele) => ele.category.includes("funny"));
      const movie = data.data.filter((ele) => ele.category.includes("movie"));
      const traditional = data.data.filter((ele) =>
        ele.category.includes("traditional")
      );
      return [popular, mz, calm, funny, movie, traditional];
    },
  });
  return (
    <>
      {!isLoading ? (
        <Container>
          <Header isAbout={true} />
          <Preview />
          <SpotList spots={data[0]} title="Most Popular" />
          <SpotList spots={data[2]} title="calm" />
          <SpotList spots={data[3]} title="Fun" />
          <SpotList spots={data[1]} title="Hot place for MZ" />
          <SpotList spots={data[4]} title="Movie spot" />
          <SpotList spots={data[5]} title="Traditional" />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Spot;
