import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import SongList from '../../Components/SongList/SongList';
import CreateStash from '../../Components/CreateStash/CreateStash';
import SongStashApi from '../../../SongStashApi';
import { postNewStash, fetchUserStashes } from '../../Actions/stash';

export default function StashContainer() {
  const DEFAULT_FORM_STATE = {
    name: '',
  };
  const { id } = useParams();
  const stashes = useSelector(store => store.stash.stashes);
  const songs = useSelector(store => store.song.songs);
  const stash = stashes.filter(stash => stash.id === parseInt(id))[0];
  const stashSongs = songs.filter(song => stash.song_ids.includes(song.id));
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(function() {
    async function addStash() {
      if (!formData.id) {
        await dispatch(postNewStash(formData.name));
        setIsAdding(false);
        history.push('/');
      }
    };
    if (isAdding) {
      addStash();
    };
  }, [dispatch, isAdding, formData, history]);

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsAdding(true);
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
      {id && 
      <>
        <DeleteButton text="Delete Stash" classes="ml-auto" clickHandler={deleteHandler} />
      </>}
    </Col>
    <Col md={10} className="text-center mx-auto">
      <div className="my-3">
        { location.pathname === '/stash/createstash' && <CreateStash formData={formData} formHandler={formHandler} submitHandler={submitHandler} />}
      </div>
      {location.pathname === `/stash/${id}` &&
      <> 
        <h5 className="my-3">{stash.name}</h5>
        <SongList songs={stashSongs} />
      </>
      }
    </Col>
  </>
  )
}