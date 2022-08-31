import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

function ScrollTop() {
  function goScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Container>
      <LogoTitle>
        <FontAwesomeIcon
          onClick={goScrollTop}
          icon={faArrowUp}
          size="4x"
          className="upArrow"
        />
        <div className="logo">SEOOUL</div>
      </LogoTitle>
    </Container>
  );
}
const Container = styled.div`
  width: 1440px;
  height: 1536px;
  margin: auto;
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  text-align: center;
  color: white;
`;
const LogoTitle = styled.div`
  .logo {
    font-family: "Stretch Pro Regular", sans-serif;
    font-size: 210px;
    color: #ff0000;
    margin-top: 20px;
  }
  .upArrow {
    cursor: pointer;
  }
  position: absolute;
  bottom: 0;
`;

export default ScrollTop;
