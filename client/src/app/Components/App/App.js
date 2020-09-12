import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataFromApi } from '../../Actions/user';
import { Col, Row } from 'reactstrap';
import AppNav from '../../Components/AppNav/AppNav';
import Routes from '../../../routes';
import SongList from '../SongList/SongList';
import './App.css';

function App() {
  const user = useSelector( store => store.user );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    async function fetchUserData() {
      await dispatch(getUserDataFromApi(user.id));
      setIsLoading(false);
    };
    if (isLoading) {
      fetchUserData();
    };
  }, [dispatch, isLoading, user]);

  if (isLoading) return <h3>Loading</h3>

  return (
    <>
      <Row>
        <Col id="nav-col" md={2}>
          <AppNav />
        </Col>
        <Col md={10}>
          <SongList />
          <Routes />
        </Col>
      </Row>
    </>
  );
}

export default App;
