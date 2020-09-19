import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function StashNameForm({ cancelAction, text, formData, formHandler, submitHandler }) {
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="name">Stash Name</Label>
        <Input className="text-center" type="text" id="name" name="name" value={formData.name} onChange={formHandler} required />
      </FormGroup>
      <Button type="submit" color="warning" className="mb-3 mr-2">{text}</Button>
      <Button type="button" color="secondary" className="mb-3" onClick={cancelAction}>Cancel</Button>
    </Form>
  )
}

