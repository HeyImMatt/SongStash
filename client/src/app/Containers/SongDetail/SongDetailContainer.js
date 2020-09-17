import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Button } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import Song from '../../Components/Song/Song';

export default function SongDetailContainer() {
  const history = useHistory();
  const song = useSelector( store => store.song );

  return (
    <>
      <Col md={2} className="mt-3">
        <Button onClick={() => history.goBack()}>Back</Button>
      </Col>
      <Col md={9} className="text-center mx-auto mt-3">
        <Song song={song} />
      </Col>
    </>
  )
}