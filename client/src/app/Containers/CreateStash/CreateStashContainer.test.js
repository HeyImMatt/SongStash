import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router-dom';
import CreateStashContainer from './CreateStashContainer';

test('renders CreateStashContainer without crashing', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateStashContainer />
      </MemoryRouter>
    </Provider>
  );
});
