import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import { deleteSong } from '../../Actions/song';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import Song from '../../Components/Song/Song';

export default function SongDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const song = useSelector( store => store.song );

  async function deleteHandler() {
    await dispatch(deleteSong(song.id));
    history.goBack();
  }

  return (
    <>
      <Col md={10} className="mt-3">
        <Button onClick={() => history.goBack()}>Back</Button>
        <DeleteButton classes="ml-2" clickHandler={deleteHandler} />
      </Col>
      <Col md={10} className="text-center mx-auto mt-3">
        <Song song={song} />
      </Col>
    </>
  )
}