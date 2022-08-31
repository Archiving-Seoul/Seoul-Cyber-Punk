import styled from "styled-components";
import ImageBlocks from "../components/review/ImageBlocks";
import Header from "../components/common/Header";
function Review() {
  return (
    <>
      <Container>
        <Header />
        <SocialMenu>
          <li id="all">All</li>
          <li id="blog">Blog</li>
          <li id="youtube">Youtube</li>
        </SocialMenu>
        <ImageBlocks />
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

const NavBar = styled.nav`
  position: absolute;
  right: 44px;
  top: 44px;
  width: 268px;
  color: white;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    li:hover {
      opacity: 0.5;
    }

    #review {
      color: red;
    }
  }
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
