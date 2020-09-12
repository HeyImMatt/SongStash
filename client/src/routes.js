import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CreateSongContainer from './app/Containers/CreateSong/CreateSongContainer';
import SongDetailContainer from './app/Containers/SongDetail/SongDetailContainer';
import SongList from './app/Components/SongList/SongList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/mysongs" exact>
        <SongList />
      </Route>
      <Route path="/createsong" exact>
        <CreateSongContainer />
      </Route>
      <Route path="/song" exact>
        <SongDetailContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}