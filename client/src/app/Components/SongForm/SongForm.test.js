import React from 'react';
import { render } from '@testing-library/react';
import SongForm from './SongForm';

test('renders SongForm without crashing', () => {
  const formData = {
    title: 'test title',
    artist: 'test artist',
    lyrics: 'test lyrics'
  }
  render(
    <SongForm toggleEdit={jest.fn} formData={formData} formHandler={jest.fn} lyricsUrl={'testUrl'} submitHandler={jest.fn} text='create' />
  );
});