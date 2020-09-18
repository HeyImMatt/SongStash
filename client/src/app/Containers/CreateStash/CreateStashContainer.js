import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import CreateStash from '../../Components/CreateStash/CreateStash';
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


  return (
    <>
    <Col md={12} className="d-flex mt-3 justify-content-between">
      <Button className="mr-auto" onClick={() => history.goBack()}>Back</Button>
    </Col>
    <Col md={10} className="text-center mx-auto">
      <div className="my-3">
        <CreateStash formData={formData} formHandler={formHandler} submitHandler={submitHandler} />
      </div>
    </Col>
  </>
  )
}