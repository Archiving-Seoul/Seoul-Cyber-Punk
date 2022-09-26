import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import TypeIt from "typeit-react";

function Header({ isHome, isAbout }) {
  const currentURL = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

  return (
    <Wrapper isAbout={isAbout}>
      {isHome && (
        <TypeIt
          getBeforeInit={(instance) => {
            instance.type("CYBERPUNKSEOUL").pause(1000);
            return instance;
          }}
          options={{ cursor: false }}
          style={TitleLogo}
        />
      )}

      <NavBar>
        <ul className="menu">
          <MenuTag
            onClick={() => {
              navigate("/");
            }}
            selectedMenu={currentURL === ""}
          >
            Home
          </MenuTag>
          <MenuTag
            onClick={() => {
              navigate("/about");
            }}
            selectedMenu={currentURL === "about"}
          >
            About
          </MenuTag>
          <MenuTag
            onClick={() => {
              navigate("/spot");
            }}
            selectedMenu={currentURL === "spot"}
          >
            Spot
          </MenuTag>
          <MenuTag
            onClick={() => {
              navigate("/review");
            }}
            selectedMenu={currentURL === "review"}
          >
            Review
          </MenuTag>
        </ul>
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 24px;
  display: flex;
  overflow: hidden;
  margin-top: 47px;
  position: ${({ isAbout }) => (isAbout ? "absolute" : "")};
  right: ${({ isAbout }) => (isAbout ? "0px" : "")};
  z-index: ${({ isAbout }) => (isAbout ? "999" : "")};
`;

const TitleLogo = {
  fontSize: "24px",
  fontWeight: "400",
  color: "#ff0000",
  margin: "auto auto",
  fontFamily: '"Stretch Pro Regular", sans-serif',
  marginLeft: "45%",
};

const MenuTag = styled.li`
  color: ${(props) => (props.selectedMenu ? "red" : "white")};
`;
const NavBar = styled.nav`
  margin: auto 10px;
  .menu {
    display: flex;
    li {
      margin-right: 30px;
      cursor: pointer;
    }
  }
`;
export default Header;
