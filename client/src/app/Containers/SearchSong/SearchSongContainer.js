import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import SongList from '../../Components/SongList/SongList';
import { searchSongsApi } from '../../Actions/search';
import { getLyrics } from '../../Actions/song';

export default function SearchSongContainer() {
  const DEFAULT_FORM_STATE = {
    query: '',
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const search = useSelector( store => store.search );
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(function() {
    async function searchSongs() {
      if (!formData.id) {
        await dispatch(searchSongsApi(formData.query));
        setIsSearching(false);
      }
    };
    if (isSearching) {
      searchSongs();
    };
  }, [dispatch, isSearching, formData, history]);

  const formHandler = (e) => {
    const {name, value} = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSearching(true);
  }

  return (
    <Col md={8} className="text-center mx-auto">
      <div className="my-3">
        <h2>Search Songs</h2>
        <h5>Enter artist, title, or song lyrics to find new songs</h5>
      </div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Input type="text" id="query" name="query" value={formData.query} onChange={formHandler} required />
        </FormGroup>
        <Button className="mb-3">Search</Button>
      </Form>
      {search.results && <SongList songs={search.results} getLyrics={getLyrics} />}
    </Col>
  )
}