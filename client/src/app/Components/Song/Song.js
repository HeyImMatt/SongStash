import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return (
    <>
      <hr />
      <h3>{song.title}</h3>
      <h5>{song.artist}</h5>
      <hr />
      <span id="lyrics" className="mt-3" dangerouslySetInnerHTML = {{__html: song.lyrics}}></span>
      {
        song.lyricsLocation &&
        <div className="mt-3">
          <p>Lyrics preview provided by MusixMatch. Right song? Click below to add to your songs. You will be able to edit and add more lyrics on the next screen.</p>
          <Link to="/createsong"><Button className="mt-2" color="warning">Add to My Songs</Button></Link>
        </div>
      }
    </>
  )
}