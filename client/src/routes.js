import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CreateSongContainer from './app/Containers/CreateSong/CreateSongContainer';
import SongDetailContainer from './app/Containers/SongDetail/SongDetailContainer';

export default function Routes() {
  return (
    <Switch>
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