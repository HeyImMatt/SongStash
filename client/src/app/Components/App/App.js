import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserStashes } from '../../Actions/stash';
import { fetchUserSongs } from '../../Actions/song';
import { Col, Row } from 'reactstrap';
import AppNav from '../../Components/AppNav/AppNav';
import Routes from '../../../routes';
import './App.css';
import loader from '../../../images/music-loader.gif';

function App() {
  const dispatch = useDispatch();
  const [stashesLoading, setStashesLoading] = useState(true);
  const [songsLoading, setSongsLoading] = useState(true);

  useEffect(function() {
    async function fetchStashes() {
      await dispatch(fetchUserStashes());
      setStashesLoading(false);
    };
    if (stashesLoading) {
      fetchStashes();
    };
  }, [dispatch, stashesLoading]);

  useEffect(function() {
    async function fetchSongs() {
      await dispatch(fetchUserSongs());
      setSongsLoading(false);
    };
    if (songsLoading) {
      fetchSongs();
    };
  }, [dispatch, songsLoading]);

  return (
    <>
      <Row>
        <Col id="nav-col" md={2}>
          {!stashesLoading && <AppNav />}
        </Col>
        <Col md={10}>
          {stashesLoading && songsLoading && <img className="d-block m-auto" src={loader} alt="Music loader" />}
          {!stashesLoading && !songsLoading && <Routes />}
        </Col>
      </Row>
    </>
  );
}

export default App;
