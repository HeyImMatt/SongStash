import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import MySongsContainer from './MySongsContainer';

const mockStore = configureStore();
  
test('renders MySongsContainer without crashing', () => {
  let store;
  store = mockStore({
    song: {
      songs: [
        {
          title: 'unstashed title',
          artist: 'unstashed artist',
          id: 1,
        },
        {
          title: 'stashed title',
          artist: 'stashed artist',
          id: 2,
        }
      ],
    },
    stash: {
      stashes: [{
        id: 1,
        name: 'stash test',
        song_ids: [2],
      }],
    },
  })
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <MySongsContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(getByText('My Songs')).toBeInTheDocument();
  expect(getByText('unstashed title')).toBeInTheDocument();
  expect(getByText('stash test')).toBeInTheDocument();
});
  
