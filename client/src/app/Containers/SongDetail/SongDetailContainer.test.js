import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router, MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SongDetailContainer from './SongDetailContainer';

const mockStore = configureStore();

test('renders SongDetailContainer for a user song without crashing', () => {
  let store;
  store = mockStore({
    song: {
      id: 1,
      title: 'test title',
      artist: 'test artist',
      lyrics: 'test lyrics'
    },
    stash: {
      stashes: [
        {
          id: 1,
          name: 'stash test 1',
          song_ids: [1],
        },
        {
          id: 2,
          name: 'stash test 2',
          song_ids: [],
        },
      ],
    },
  })
  const history = createMemoryHistory();
  history.push('/song/1');
  const { container, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/song/:id'>
          <SongDetailContainer />
        </Route>
      </Router>
    </Provider>
  );
  expect(container.querySelector('.dropdown-container')).toBeInTheDocument();
  expect(container.querySelector('.dropdown-heading-value').textContent).toEqual('stash test 1');
  expect(getByText('Edit Song')).toBeInTheDocument();
  expect(getByText('test title')).toBeInTheDocument();
  expect(getByText('test artist')).toBeInTheDocument();
  expect(getByText('test lyrics')).toBeInTheDocument();
});

test('renders SongDetailContainer for a searched song without crashing', () => {
  let store;
  store = mockStore({
    song: {
      id: null,
      title: 'test search title',
      artist: 'test search artist',
      lyrics: 'test search lyrics'
    },
    stash: {
      stashes: [
        {
          id: 1,
          name: 'stash test',
          song_ids: [1],
        },
      ],
    },
  })
  
  const { container, getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <SongDetailContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(container.querySelector('.dropdown-container')).not.toBeInTheDocument();
  expect(getByText('test search title')).toBeInTheDocument();
  expect(getByText('test search artist')).toBeInTheDocument();
  expect(getByText('test search lyrics')).toBeInTheDocument();
});