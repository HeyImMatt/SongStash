import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText } from 'reactstrap';
import { AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { CLEAR_CURRENT_SONG } from '../../Actions/types';
import './AppNav.css';

export default function AppNav() {
  const dispatch = useDispatch();
  const stashes = useSelector(store => store.stash.stashes)
  const clearSong = () => {
    dispatch({
      type: CLEAR_CURRENT_SONG,
    });
  }

  return (
    <>
      <Navbar id="main-nav-bar" color="dark" dark >
        <NavbarBrand className="mx-auto w-100 text-center" href="/">SongStash</NavbarBrand>
        <Nav navbar pills justified className="h-75 w-100">
          <hr />
          <NavItem className="mx-auto my-auto">
            <NavbarText>My Stashes  <Link to="/stash/createstash"><AddCircle /></Link></NavbarText>
            {stashes.map(stash => (<Link to={`/stash/${stash.id}`}><NavLink>{stash.name}</NavLink></Link>))}
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/mysongs"><NavLink>My Songs</NavLink></Link>
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/searchsongs"><NavLink onClick={clearSong}>Song Search</NavLink></Link>
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/createsong"><NavLink onClick={clearSong}>Create Song</NavLink></Link>
          </NavItem>
          <hr />
          <NavItem className="d-block mx-auto mt-auto">
            <Link to="/logout"><NavLink>Log Out</NavLink></Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}