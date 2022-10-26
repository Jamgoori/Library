import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Header>
        <LeftHome>
      <Link to="/">
        <img src="../images/Logo.png" />
      </Link>
      </LeftHome>
      <Nav>

          <ul>
            <li>
             <a><Link to="book">BOOK</Link></a>
            </li>
            <li>
            <a><Link to="about">ABOUT</Link></a>
            </li>
          </ul>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  align-items: center;
`;
const LeftHome = styled.h1`
  display: inline-block;
  vertical-align: middle;
  color: white;
  margin: 0.5rem;
  padding: 0;
`
const Nav = styled.nav`
  display: inline-block;
  vertical-align: middle;
  ul {
    list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  }
  li{
    display: block;
  text-align: center;
  margin: .25rem;
  padding: .5rem 1rem;
  flex-basis: 25%;
  }
  a{  display: block;
  text-align: center;
  margin: .25rem;
  padding: .5rem 1rem;
  font-size: 1.5rem;
  }
  a:hover{
    color: #b83ab8
  }
`;

export default Navbar;
