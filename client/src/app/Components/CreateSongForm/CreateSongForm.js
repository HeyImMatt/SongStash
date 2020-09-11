import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function CreateSongForm({ formData, formHandler, lyricsUrl }) {
  const { title, artist, lyrics } = formData;
  return (
    <Col md={8} className="text-center mx-auto">
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" id="title" name="title" value={title} onChange={formHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="artist">Artist</Label>
          <Input type="text" id="artist" name="artist" value={artist} onChange={formHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="lyrics">Lyrics</Label>
          <Input type="textarea" id="lyrics" name="lyrics" value={lyrics} onChange={formHandler} />
          {lyricsUrl && <FormText>No guarantees, but you might be able to find the rest of the lyrics at: 
          <a href={lyricsUrl} target="_blank" rel="noopener noreferrer">{lyricsUrl}</a></FormText>}
        </FormGroup>
      </Form>
    </Col>
  )
}