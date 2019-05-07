import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

const LinkItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  padding: 0.5rem auto;

  :hover {
    background-color: #ddd;
  }
`;
const DropdownContent = styled.div`
  /* display: none; */
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <Dropdown>
        <Button>Sakums</Button>

        <Button onClick={this.showMenu}> Pirmsskola</Button>
        
        {this.state.showMenu ? (
          <DropdownContent
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <LinkItem href="www.tvnet.lv"> Dienas kartiba </LinkItem>
            <LinkItem href="www.tvnet.lv"> Macibu process </LinkItem>
            <LinkItem href="www.tvnet.lv"> Nodarbibas </LinkItem>
          </DropdownContent>
        ) : null}
        <Button onClick={this.showMenu}> Sakumskola</Button>
        {/* {this.state.showMenu ? (
          <DropdownContent
          className="menu"
          ref={element => {
            this.dropdownMenu = element;
          }}>
            <LinkItem href="www.tvnet.lv"> Nodarbibas </LinkItem>
            <LinkItem href="www.tvnet.lv"> Macibu process </LinkItem>
          </DropdownContent>
        ) : null} */}
      </Dropdown>
    );
  }
}
export default Navigation;
