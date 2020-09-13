import React from 'react';
import { useDispatch } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText } from 'reactstrap';
import { AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { CLEAR_CURRENT_SONG } from '../../Actions/types';
import './AppNav.css';

export default function AppNav() {
  const dispatch = useDispatch();
  const clearSong = () => {
    dispatch({
      type: CLEAR_CURRENT_SONG,
    });
  }

  return (
    <>
      <Navbar id="main-nav-bar" color="dark" dark >
        <NavbarBrand className="mb-auto mx-auto w-100 text-center" href="/">SongStash</NavbarBrand>
        <Nav navbar pills justified className="h-75 w-100">
          <NavItem className="mx-auto my-auto">
            <NavbarText>My Stashes  <Link to="/addstash"><AddCircle /></Link></NavbarText>
          </NavItem>
          <NavItem className="mx-auto my-auto">
            <Link to="/mysongs"><NavLink>My Songs</NavLink></Link>
          </NavItem>
          <NavItem className="mx-auto my-auto">
          <Link to="/searchsongs"><NavLink onClick={clearSong}>Song Search</NavLink></Link>
          </NavItem>
          <NavItem className="mx-auto my-auto">
            <Link to="/createsong"><NavLink onClick={clearSong}>Create Song</NavLink></Link>
          </NavItem>
        </Nav>
        <NavLink className="d-block mx-auto mt-auto" href="/logout">Log Out</NavLink>
      </Navbar>
    </>
  )
}