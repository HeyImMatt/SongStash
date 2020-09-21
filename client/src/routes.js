import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CreateEditSongContainer from './app/Containers/CreateEditSong/CreateEditSongContainer';
import SongDetailContainer from './app/Containers/SongDetail/SongDetailContainer';
import SearchSongContainer from './app/Containers/SearchSong/SearchSongContainer';
import MySongsContainer from './app/Containers/MySongs/MySongsContainer';
import StashContainer from './app/Containers/Stash/StashContainer';
import CreateStashContainer from './app/Containers/CreateStash/CreateStashContainer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/mysongs" exact>
        <MySongsContainer />
      </Route>
      <Route path="/createsong" exact>
        <CreateEditSongContainer />
      </Route>
      <Route path="/createstash" exact>
        <CreateStashContainer />
      </Route>
      <Route path="/searchsongs" exact>
        <SearchSongContainer />
      </Route>
      <Route path="/song/:id">
        <SongDetailContainer />
      </Route>
      <Route path="/stash/:id" >
        <StashContainer />
      </Route>
      <Redirect to="/mysongs" />
    </Switch>
  )
}