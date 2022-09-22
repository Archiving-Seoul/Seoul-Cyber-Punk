import styled from "styled-components";
import ImageBlocks from "../components/review/ImageBlocks";
import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import * as Api from "../api";
import { DUMMY_DATA } from "../assets/dummy";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getYoutube } from "../react-query/queryFunction";

function Review() {
  const navigate = useNavigate();
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["review"],
    getYoutube,
    {
      staleTime: 600 * 1000,
    }
  );
  const [categoryData, setCategoryData] = useState(data);
  const [tab, setTab] = useState("all");
  const [clickedModal, setClickedModal] = useState({ id: "", isModal: false });

  console.log("data", data);

  function clickHandler(category) {
    const filteredData = data.filter((el) => el.tab === category);
    setCategoryData(filteredData);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error: ${error.message}</h1>;
  }

  return (
    <>
      {isFetching ? <h1>Fetching...</h1> : ""}
      <Container>
        <Header isAbout={true} />
        <SocialMenu tab={tab}>
          <li
            id="all"
            onClick={() => {
              setTab("all");
              navigate("?tab=all");

              // clickHandler("all");
            }}
          >
            All
          </li>
          <li
            id="web"
            onClick={() => {
              setTab("web");
              navigate("?tab=web");

              // clickHandler("web");
            }}
          >
            Blog
          </li>
          <li
            id="youtube"
            onClick={() => {
              setTab("youtube");
              navigate("?tab=youtube");

              // clickHandler("youTube");
            }}
          >
            Youtube
          </li>
        </SocialMenu>

        <ImageBlocks
          data={categoryData}
          clickedModal={clickedModal}
          setClickedModal={setClickedModal}
        />
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
    color: ${({ tab }) => (tab === "all" ? "red" : "white")};
  }
  #web {
    color: ${({ tab }) => (tab === "web" ? "red" : "white")};
  }
  #youtube {
    color: ${({ tab }) => (tab === "youtube" ? "red" : "white")};
  }
`;
export default Review;
