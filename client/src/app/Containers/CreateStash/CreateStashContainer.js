import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Col } from 'reactstrap';
import StashNameForm from '../../Components/StashNameForm/StashNameForm';
import { postNewStash } from '../../Actions/stash';

export default function CreateStashContainer() {
  const DEFAULT_FORM_STATE = {
    name: '',
  };
  const dispatch = useDispatch();
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

  const cancelAction = () => history.goBack();


  return (
    <>
    <Col md={10} className="text-center mx-auto my-3">
      <h4>Create Stash</h4>
      <StashNameForm  cancelAction={cancelAction} formData={formData} formHandler={formHandler} submitHandler={submitHandler} text="Create Stash" />
    </Col>
  </>
  )
}