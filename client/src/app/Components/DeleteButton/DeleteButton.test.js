import React from 'react';
import { render } from '@testing-library/react';
import DeleteButton from './DeleteButton';

test('renders DeleteButton without crashing', () => {
  render(
    <DeleteButton />
  );

});