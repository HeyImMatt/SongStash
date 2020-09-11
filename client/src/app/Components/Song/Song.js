import React from 'react';

export default function Song({ song }) {
  return (
    <>
      <h3>{song.title}</h3>
      <h5>{song.artist}</h5>
      <span id="lyrics" className="mt-3">{song.lyrics}</span>
    </>
  )
}