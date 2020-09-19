import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Col } from 'reactstrap';
import { fetchUserSongs, postNewSong } from '../../Actions/song';
import SongStashApi from '../../../SongStashApi';
import SongForm from '../../Components/SongForm/SongForm';

export default function CreateEditSongContainer({ editSong, toggleEdit }) {
  const DEFAULT_FORM_STATE = {
    id: null,
    title: '',
    artist: '',
    lyrics: ''
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const song = useSelector( store => store.song );
  const lyrics = song.lyrics ? song.lyrics.replace(/<br\s*\/?>/mg,'\n') : null;
  const [formData, setFormData] = useState( {...song, lyrics} || DEFAULT_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function() {
    async function submitSong() {
      if (!formData.id) {
        await dispatch(postNewSong(formData));
        await dispatch(fetchUserSongs());
        setIsSubmitting(false);
        history.replace(`/song/${song.id}`);
      }
    };
    if (isSubmitting) {
      submitSong();
    };
  }, [dispatch, isSubmitting, formData, history, song]);

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (editSong) {
      await SongStashApi.editSong(song.id, formData);
      dispatch(fetchUserSongs());
      toggleEdit();
    } else setIsSubmitting(true);
  }

  return (
    <>
      {!editSong && <Col md={8} className="text-center mx-auto mb-3">
        <h2>Create Song</h2>
      </Col>}
      <SongForm 
      toggleEdit={toggleEdit}
      formData={formData} 
      formHandler={formHandler} 
      submitHandler={submitHandler} 
      lyricsUrl={song.lyricsLocation} 
      text={editSong ? "Update Song" : "Create Song"}
      />
    </>
  )
}