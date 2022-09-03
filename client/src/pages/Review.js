import styled from "styled-components";
import ImageBlocks from "../components/review/ImageBlocks";
import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import * as Api from "../api";
function Review() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getYoutube();
  }, []);

  async function getYoutube() {
    const res = await Api.get("/api/youtube");
    const items = res.data.items;
    console.log(items);
    setData(items);
  }

  return (
    <>
      <Container>
        <Header />
        <SocialMenu>
          <li id="all">All</li>
          <li id="blog">Blog</li>
          <li id="youtube">Youtube</li>
        </SocialMenu>

        <ImageBlocks data={data} />
      </Container>
    </>
  );
}

const Container = styled.section`
  position: relative;
  width: 1440px;
  margin: 0 auto;
  border: 1px solid black;
`;

const SocialMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 172px;
  margin-bottom: 44px;
  gap: 44px;
  font-weight: bold;
  cursor: pointer;
  font-size: 24px;

  li:hover {
    opacity: 0.5;
  }

  #all {
    color: red;
  }
`;
export default Review;
