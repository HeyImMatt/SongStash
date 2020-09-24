import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';

test('renders Song without crashing', () => {
  const song = {
    title: 'test title',
    artist: 'test artist',
    lyrics: 'test lyrics'
  };
  render(
    <Song song={song} />
  );
});