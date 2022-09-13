import styled from "styled-components";
import ImageBlocks from "../components/review/ImageBlocks";
import Header from "../components/common/Header";
import {useEffect, useState} from "react";
import * as Api from "../api";
import {DUMMY_DATA} from "../assets/dummy";
import {Routes, Route, Link} from "react-router-dom";

function Review() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedModal, setClickedModal] = useState({id: "", isModal: false});
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const result = await getYoutube();
      const reviewData = result.map(({snippet, id}) => {
        return {
          tab: "youTube",
          img_URL: snippet.thumbnails.medium.url,
          title: snippet.title,
          link_URL: id.videoId,
        };
      });
      reviewData.push(...DUMMY_DATA);
      console.log("data", reviewData);
      setData(reviewData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function getYoutube() {
    const res = await Api.get("/api/youtube");
    const items = res.data.items;
    return items;
  }
  function clickHandler(category) {
    const tmpData = data.filter((ele) => ele.tab === category);
    console.log(tmpData, "wpqkfwpqkf");
    setData(tmpData);
  }

  return (
    <>
      <Container>
        <Header isAbout={true} />
        <SocialMenu>
          <Routes>
            {/* <Route path="" element={<ImageBlocks />} /> */}
            <Route path="review/youtube" element={<ImageBlocks />} />
            <Route path="review/blog" element={<ImageBlocks />} />
          </Routes>
          <Link
            to=""
            onClick={() => {
              clickHandler("all");
            }}
          >
            All
          </Link>
          <Link
            to="/review/blog"
            onClick={() => {
              clickHandler("web");
            }}
          >
            Blog
          </Link>
          <Link
            to="/review/youtube"
            onClick={() => {
              clickHandler("youTube");
            }}
          >
            Youtube
          </Link>
        </SocialMenu>
        {!isLoading && (
          <ImageBlocks
            data={data}
            clickedModal={clickedModal}
            setClickedModal={setClickedModal}
          />
        )}
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
