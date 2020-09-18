import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText } from 'reactstrap';
import { AddCircle } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { CLEAR_CURRENT_SONG } from '../../Actions/types';
import './AppNav.css';

export default function AppNav() {
  const location = useLocation();
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
        <NavbarBrand className="mx-auto mt-0 mb-0 w-100 text-center" href="/mysongs">SongStash</NavbarBrand>
        <hr className="mt-0 mb-2" />
        <Nav navbar pills justified className="mt-0 h-75 w-100">
          <NavItem className="mx-auto mt-0 mb-auto">
            <NavbarText><u>My Stashes</u>  <Link to="/stash/createstash"><AddCircle /></Link></NavbarText>
            {stashes.map(stash => (<Link to={`/stash/${stash.id}`}><NavLink active={location.pathname === `/stash/${stash.id}`}>{stash.name}</NavLink></Link>))}
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/mysongs"><NavLink active={location.pathname === '/mysongs'}>My Songs</NavLink></Link>
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/searchsongs"><NavLink active={location.pathname === '/searchsongs'} onClick={clearSong}>Song Search</NavLink></Link>
          </NavItem>
          <hr />
          <NavItem className="mx-auto my-auto">
            <Link to="/createsong"><NavLink active={location.pathname === '/createsong'} onClick={clearSong}>Create Song</NavLink></Link>
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