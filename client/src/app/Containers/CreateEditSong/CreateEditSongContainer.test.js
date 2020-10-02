import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import CreateEditSongContainer from './CreateEditSongContainer';

const mockStore = configureStore();
  
test('renders CreateEditSongContainer without crashing', () => {
  let store;
  store = mockStore({
    song: {},
  })
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateEditSongContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(container.querySelector('#title')).toBeInTheDocument();
  expect(container.querySelector('#title').value).toEqual('');
});

test('renders CreateEditSongContainer with song info for editing', () => {
  let store;
  store = mockStore({
    song: {
      id: 1,
      title: 'test title',
      artist: 'test artist',
      lyrics: 'test lyrics'
    },
  })
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateEditSongContainer />
      </MemoryRouter>
    </Provider>
  );
  expect(container.querySelector('#title').value).toEqual('test title');
  expect(container.querySelector('#artist').value).toEqual('test artist');
  expect(container.querySelector('#lyrics').value).toEqual('test lyrics');
});