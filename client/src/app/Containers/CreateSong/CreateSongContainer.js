import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import { postNewSong } from '../../Actions/song';
import CreateSongForm from '../../Components/CreateSongForm/CreateSongForm';

export default function CreateSongContainer() {
  const DEFAULT_FORM_STATE = {
    id: '',
    title: '',
    artist: '',
    lyrics: ''
  };
  const dispatch = useDispatch();
  const user = useSelector( store => store.user );
  const song = useSelector( store => store.song );
  const [formData, setFormData] = useState(song || DEFAULT_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function() {
    async function postSong() {
      await dispatch(postNewSong(formData, user.id));
      setIsSubmitting(false);
    };
    if (isSubmitting) {
      postSong();
    };
  }, [dispatch, isSubmitting, formData, user]);

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <>
      <Col md={8} className="text-center mx-auto mb-5">
        <h2>Create Song</h2>
      </Col>
      <CreateSongForm formData={formData} formHandler={formHandler} submitHandler={submitHandler} />
    </>
  )
}