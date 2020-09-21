import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import SongList from '../../Components/SongList/SongList';
import StashNameForm from '../../Components/StashNameForm/StashNameForm';
import SongStashApi from '../../../SongStashApi';
import { fetchUserStashes } from '../../Actions/stash';
import EditIcon from '@material-ui/icons/Edit';

export default function StashContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const stashId = parseInt(id)
  const stashes = useSelector(store => store.stash.stashes);
  const stash = stashes.filter(stash => stash.id === stashId)[0];
  const songs = useSelector(store => store.song.songs);
  const stashSongs = songs.filter(song => stash.song_ids.includes(song.id));
  const [formData, setFormData] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing(!isEditing)

  useEffect(() => {
    setFormData({name: stash.name})
  }, [setFormData, stash])

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await SongStashApi.editStash(id, formData.name)
    setIsEditing(false);
    dispatch(fetchUserStashes());
  }

  async function deleteHandler() {
    await SongStashApi.deleteStash(id);
    dispatch(fetchUserStashes());
    history.goBack();
  }

  return (
    <>
      <Col md={12} className="d-flex mt-3 justify-content-between">
        <Button className="mr-auto" onClick={() => history.goBack()}>Back</Button>
        <DeleteButton text="Delete Stash" classes="ml-auto" clickHandler={deleteHandler} />
      </Col>
      <Col md={10} className="text-center mx-auto my-3">
        {!isEditing && <h5 className="d-inline-block mr-2">{stash.name}</h5>}
        {isEditing && 
        <StashNameForm 
        cancelAction={toggleEdit} 
        formData={formData} 
        formHandler={formHandler} 
        submitHandler={submitHandler} 
        text="Update" />}
        {!isEditing && <EditIcon className="mb-2" fontSize="small" onClick={toggleEdit} style={{cursor: "pointer"}} />}
        <SongList songs={stashSongs} />
      </Col>
    </>
  )
}