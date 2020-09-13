import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { Col } from 'reactstrap';
import CreateStash from '../../Components/CreateStash/CreateStash';
import { postNewStash } from '../../Actions/stash';

export default function StashContainer() {
  const DEFAULT_FORM_STATE = {
    name: '',
  };
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const user = useSelector( store => store.user );
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(function() {
    async function addStash() {
      if (!formData.id) {
        await dispatch(postNewStash(formData.name, user.id));
        setIsAdding(false);
        history.push('/');
      }
    };
    if (isAdding) {
      addStash();
    };
  }, [dispatch, isAdding, formData, history, user]);

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
    <Col md={8} className="text-center mx-auto">
      <div className="my-3">
        { location.pathname === '/stash/createstash' && <CreateStash formData={formData} formHandler={formHandler} submitHandler={submitHandler} />}
      </div>
    </Col>
  )
}