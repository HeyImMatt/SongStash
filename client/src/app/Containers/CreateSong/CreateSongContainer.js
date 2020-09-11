import React, { useState } from 'react';
import { Col } from 'reactstrap';
import CreateSongForm from '../../Components/CreateSongForm/CreateSongForm';

export default function CreateSongContainer() {
  const DEFAULT_FORM_STATE = {
    title: '',
    artist: '',
    lyrics: ''
  };
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <>
      <Col md={8} className="text-center mx-auto mb-5">
        <h2>Create Song</h2>
      </Col>
      <CreateSongForm formData={formData} formHandler={formHandler} />
    </>
  )
}