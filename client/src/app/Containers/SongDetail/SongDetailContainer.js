import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { fetchUserStashes } from '../../Actions/stash';
import { deleteSong, setCurrentSong } from '../../Actions/song';
import CreateEditSongContainer from '../CreateEditSong/CreateEditSongContainer';
import SongStashApi from '../../../SongStashApi';
import MultiSelect from 'react-multi-select-component';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import Song from '../../Components/Song/Song';

export default function SongDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const songId = parseInt(id)
  const songs = useSelector( store => store.song.songs );
  const stashes = useSelector( store => store.stash.stashes)
  const song = useSelector( store => store.song );
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing(!isEditing)

  useEffect(function() {
    if (songId) {
      const songToSet = songs.filter(song => song.id === songId)[0];
      if (!!songToSet) {
        dispatch(setCurrentSong(songToSet));
      } else history.push('/mysongs');
    };
  },[dispatch, history, songId, songs])

  const songStashes = stashes.reduce((acc, stash) => {
    if (stash.song_ids.includes(songId)) {
      acc.push({label: stash.name, value: stash.id})
      return acc;
    }
    return acc;
  }, []);
  const [selected, setSelected] = useState(songStashes);
  const options = stashes.map((stash) => ({label: stash.name, value: stash.id}))

  async function deleteHandler() {
    await dispatch(deleteSong(song.id));
    history.goBack();
  }

  async function updateHandler() {
    selected.forEach(async (stash) => {
      if (!songStashes.includes(stash)) {
        await SongStashApi.addSongToStash(song.id, stash.value);
      }
    });
    songStashes.forEach(async (stash) => {
      if (!selected.includes(stash)) {
        await SongStashApi.deleteSongFromStash(song.id, stash.value);
      }
    })
    await dispatch(await fetchUserStashes());
    window.location.reload(); // Last resort option to get the stashes list updating correctly
  }

  return (
    <>
      <Col md={12} className="d-flex mt-3 justify-content-between">
        <Button className="mr-auto" onClick={() => history.goBack()}>Back</Button>
        {id && <>
        <h5 className="d-inline-block ml-2 my-auto">Stashes:</h5>
        <MultiSelect
        hasSelectAll={false}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Stashes"}
        className="d-inline-block ml-2 w-25"
        />
        <Button color="warning" className="ml-2" onClick={updateHandler}>Update Stashes</Button>
        <Button color="info" className="mx-auto" onClick={toggleEdit}>Edit Song</Button>
        <DeleteButton text="Delete Song" classes="ml-auto" clickHandler={deleteHandler} />
        </>}
      </Col>
      <Col md={10} className="text-center mx-auto mt-5">
        {!isEditing && <Song song={song} />}
        {isEditing && <CreateEditSongContainer toggleEdit={toggleEdit} editSong={true} />}
      </Col>
    </>
  )
}