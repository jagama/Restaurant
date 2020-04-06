import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./nav.css";

const AppMenu = styled.nav`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")}`;

const Nav = ({ open, setOpen }) => {

  return (
    <AppMenu className="style" open={!open}>
      <ul>
        <li><Link to="/" onClick={() => setOpen(!open)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setOpen(!open)}>Menu</Link></li>
      </ul>
    </AppMenu>
  );
};

export default Nav;
