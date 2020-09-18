import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { fetchUserStashes } from '../../Actions/stash';
import { deleteSong, setCurrentSong } from '../../Actions/song';
import { postSongToStash, deleteSongFromUserStash } from '../../Actions/stash';
import MultiSelect from 'react-multi-select-component';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import Song from '../../Components/Song/Song';

export default function SongDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const songs = useSelector( store => store.song.songs );

  useEffect(function() {
    if (id) {
      const songToSet = songs.filter(song => song.id === parseInt(id));
      if (!!songToSet[0]) {
        dispatch(setCurrentSong(songToSet[0]));
      } else history.push('/mysongs');
    };
  },[dispatch, history, id, songs])

  const song = useSelector( store => store.song );
  const stashes = useSelector( store => store.stash.stashes)
  const songStashes = stashes.reduce((acc, stash) => {
    if (stash.song_ids.includes(song.id)) {
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
    const newStashIds = [];
    const deleteStashIds = [];
    selected.forEach((stash) => {
      if (!songStashes.includes(stash)) {
        newStashIds.push(stash.value)
      }
    });
    songStashes.forEach((stash) => {
      if (!selected.includes(stash)) {
        deleteStashIds.push(stash.value)
      }
    })
    await postSongToStash(newStashIds, song.id);
    await deleteSongFromUserStash(deleteStashIds, song.id);
    await dispatch(await fetchUserStashes());
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
        className="d-inline-block ml-2 w-50"
        />
        <Button color="warning" className="ml-2" onClick={updateHandler}>Update</Button>
        <DeleteButton text="Delete Song" classes="ml-auto" clickHandler={deleteHandler} />
        </>}
      </Col>
      <Col md={10} className="text-center mx-auto mt-5">
        <Song song={song} />
      </Col>
    </>
  )
}