import styled from "styled-components";
import {useNavigate, useLocation} from "react-router-dom";

function Header({isHome}) {
  const currentURL = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleLogo>
        {isHome && <div className="typo">CYBERPUNKSEOUL</div>}
      </TitleLogo>
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
  z-index: 999;
`;
const TitleLogo = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ff0000;
  margin: auto auto;
  .typo {
    margin-left: 45%;
    font-family: "Stretch Pro Regular", sans-serif;
  }
`;
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
