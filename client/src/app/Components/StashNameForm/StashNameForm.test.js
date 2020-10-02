import React from 'react';
import { render } from '@testing-library/react';
import StashNameForm from './StashNameForm';

test('renders StashNameForm without crashing', () => {
  const formData = {
    name: 'test stash name'
  }
  render(
    <StashNameForm cancelAction={jest.fn} formData={formData} formHandler={jest.fn} submitHandler={jest.fn} text='create stash' />
  );
});
