import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <TitleLogo>
        <div className="typo">CYBERPUNKSEOUL</div>
      </TitleLogo>
      <NavBar>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Spot</li>
          <li>Review</li>
        </ul>
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  margin-top: 47px;
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
const NavBar = styled.nav`
  margin: auto 10px;
  .menu {
    display: flex;
    li {
      margin-right: 30px;
    }
  }
`;
export default Header;
