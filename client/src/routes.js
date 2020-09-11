import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CreateSongContainer from './app/Containers/CreateSong/CreateSongContainer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/createsong" exact>
        <CreateSongContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}