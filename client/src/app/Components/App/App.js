import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataFromApi } from '../../Actions/user';
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

  if (isLoading) return <h3>Loading</h3>;

  return (
    <div className="App">
      <p>User Id: {user.id}</p>
      {user.songs.map(song => (<p>{song.lyrics.replace(/\n/g, '<br />')}</p>))}
    </div>
  );
}

export default App;
