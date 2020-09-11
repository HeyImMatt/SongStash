import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Song from '../../Components/Song/Song';

export default function SongDetailContainer() {
  const song = useSelector( store => store.song );

  return (
    <>
      <Col className="text-center mx-auto mt-3">
        <Song song={song} />
      </Col>
    </>
  )
}