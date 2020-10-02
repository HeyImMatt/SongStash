import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import SearchSongContainer from './SearchSongContainer';

const mockStore = configureStore();

test('renders SearchSongContainer', () => {
  let store;
  store = mockStore({
    search: {}
  })
  const { getByText, container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchSongContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(getByText('Enter artist, title, or song lyrics to find new songs')).toBeInTheDocument();
  expect(container.querySelector('.react-bootstrap-table')).not.toBeInTheDocument();
})
  
test('renders SearchSongContainer results', () => {
  let store;
  store = mockStore({
    search: {
      results: [{
        artist: 'test results artist',
        lyricsLocation: 'test url',
        mmId: 123,
        title: 'test results title'
      }]
    }
  })
  const { getByText, container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchSongContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(container.querySelector('.react-bootstrap-table')).toBeInTheDocument();
  expect(getByText('test results artist')).toBeInTheDocument();

});