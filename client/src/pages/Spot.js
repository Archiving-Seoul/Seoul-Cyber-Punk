import styled from "styled-components";
import Header from "../components/common/Header";
import Preview from "../components/spot/Preview";
import SpotList from "../components/spot/SpotList";
import * as api from "../api";
import {useEffect, useState} from "react";

function Spot() {
  const [spots, setSpots] = useState({});
  async function getSpot(category) {
    try {
      const res = await api.get(`/api/spot/${category}`);
      const data = await res.data;
      return data;
    } catch (error) {
      throw new Error(`${error} : 데이터를 받아올 수 없습니다.`);
    }
  }
  useEffect(() => {
    (async () => {
      const popular = await getSpot("popular");
      const mz = await getSpot("mz");
      const calm = await getSpot("calm");
      const funny = await getSpot("funny");
      const traditional = await getSpot("traditional");
      const movie = await getSpot("movie");
      const spotDatas = {popular, mz, calm, funny, traditional, movie};
      setSpots(spotDatas);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Preview prevSpot={spots} />
      <SpotList spots={spots.popular} title="Most Popular" />
      <SpotList spots={spots.mz} title="Hot place for MZ" />
      <SpotList spots={spots.calm} title="calm" />
      <SpotList spots={spots.funny} title="Fun" />
      <SpotList spots={spots.traditional} title="Traditional" />
      <SpotList spots={spots.movie} title="Movie spot" />
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
export default Spot;
