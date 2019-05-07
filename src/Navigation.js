import React, { Component } from "react";

import styled from "styled-components";

const Dropdown = styled.ul`
  /* position: relative;
  display: inline-block ; */

`;
const ButtonNav = styled.li`
float: left;
			position: relative;
			width: 150px;
			list-style: none;
			-webkit-transition: .5s;
			transition: .5s;
:hover{
  background: #ddd
}

:active{
  background-color: pink;
}
:hover>ul{
  visibility: visible
}
&.current{
  background-color: yellow;
}
`;

const DropdownContent = styled.ul`
	visibility: hidden;
  position: absolute;
  left: 0;
	top: 100%;
  background-color: #f1f1f1;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

`;

const LinkItem = styled.li`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  padding: 0.5rem auto;

  :hover {
    background-color: #ddd;
  }
`;

class Navigation extends Component {

  render() {
    return (
      <Dropdown>
        <ButtonNav > Sakums</ButtonNav>
        <ButtonNav > <a href="/pirmsskola">Pirmsskola</a>
        <DropdownContent>
          <LinkItem>  Dienas kartiba </LinkItem>
          <LinkItem href="www.tvnet.lv"> Macibu process </LinkItem>
          <LinkItem href="www.tvnet.lv"> Nodarbibas </LinkItem>
        </DropdownContent>
        </ButtonNav>
       

        <ButtonNav > <a href="/pirmsskola">Sakumskola</a>
        <DropdownContent>
          <LinkItem>  Dienas kartiba </LinkItem>
          <LinkItem href="www.tvnet.lv"> Macibu process </LinkItem>
          <LinkItem href="www.tvnet.lv"> Nodarbibas </LinkItem>
        </DropdownContent>
        </ButtonNav>
      </Dropdown>
    );
  }
}
export default Navigation;
