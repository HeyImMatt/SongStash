import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import SongList from './SongList';

test('renders SongList without crashing', () => {
  const songs = [{
    id: 1,
    title: 'test title',
    artist: 'test artist',
    lyrics: 'test lyrics'
  }];
  render(
    <Provider store={store}>
      <SongList songs={songs} />
    </Provider>
  );
});