import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router-dom';
import AppNav from './AppNav';

test('renders AppNav without crashing', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AppNav />
      </MemoryRouter>
    </Provider>
  );

});
