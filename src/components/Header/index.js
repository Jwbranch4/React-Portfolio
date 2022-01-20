import React from "react";
import Nav from "../Nav";
import tree from "../../assets/images/icons8-tms-tree-50.png";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">
          <img src={tree} /> James Branch
        </a>
      </h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
