import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function CreateStash({ formData, formHandler, submitHandler }) {
  return (
    <>
      <h2>Add a New Stash</h2>
      <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="name">Stash Name</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={formHandler} required />
            </FormGroup>
            <Button className="mb-3">Add Stash</Button>
          </Form>
    </>
  )
}

