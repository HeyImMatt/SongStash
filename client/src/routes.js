import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CreateSongContainer from './app/Containers/CreateSong/CreateSongContainer';
import SongDetailContainer from './app/Containers/SongDetail/SongDetailContainer';
import SearchSongContainer from './app/Containers/SearchSong/SearchSongContainer';
import SongList from './app/Components/SongList/SongList';
import StashContainer from './app/Containers/Stash/StashContainer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/mysongs" exact>
        <SongList />
      </Route>
      <Route path="/createsong" exact>
        <CreateSongContainer />
      </Route>
      <Route path="/searchsongs" exact>
        <SearchSongContainer />
      </Route>
      <Route path="/song/:id">
        <SongDetailContainer />
      </Route>
      <Route path="/song">
        <SongDetailContainer />
      </Route>
      <Route path="/stash/:id" >
        <StashContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}