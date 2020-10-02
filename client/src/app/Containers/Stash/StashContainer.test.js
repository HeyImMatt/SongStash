import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import StashContainer from './StashContainer';

const mockStore = configureStore();

test('renders StashContainer with a song without crashing', () => {
  let store;
  store = mockStore({
    song: {
      songs: [
        {
          id: 1,
          title: 'test title',
          artist: 'test artist',
          lyrics: 'test lyrics'
        }
      ]
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
  history.push('/stash/1');
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/stash/:id'>
          <StashContainer />
        </Route>
      </Router>
    </Provider>
  );
  expect(getByText('Delete Stash')).toBeInTheDocument();
  expect(getByText('stash test 1')).toBeInTheDocument();
  expect(getByText('test title')).toBeInTheDocument();
});
