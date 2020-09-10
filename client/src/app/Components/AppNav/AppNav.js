import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './AppNav.css';

export default function AppNav() {
  return (
    <>
      <Navbar id="main-nav-bar" color="dark" dark >
        <NavbarBrand className="mb-auto mx-auto w-100 text-center" href="/">SongStash</NavbarBrand>
        <Nav navbar pills vertical justified className="h-75 w-100">
          <NavItem className="mx-auto my-auto">
            <NavLink>Stashes</NavLink>
          </NavItem>
          <NavItem className="mx-auto my-auto">
            <NavLink>Songs</NavLink>
          </NavItem>
          <NavItem className="mx-auto my-auto">
            <NavLink>Song Search</NavLink>
          </NavItem>
          <NavItem className="mx-auto my-auto">
            <NavLink>Create Song</NavLink>
          </NavItem>
        </Nav>
        <NavLink className="d-block mx-auto mt-auto" href="/logout">Log Out</NavLink>
      </Navbar>
    </>
  )
}