import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ed7070; 
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 0.25rem 0;

    &.active {
      border-bottom: 2px solid #fff; 
    }

   &:hover {
      color: #fdd835; 
    }

  }
`;

const Header = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ margin: 0 }}>Recipe API</h1>
      </Link>

      <NavLinks>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/vision">Vision</NavLink>
        <NavLink to="/endpoints">Endpoints</NavLink>
        <NavLink to="/links">Links</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Header;