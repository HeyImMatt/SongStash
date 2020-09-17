import React from 'react';
import { Button } from 'reactstrap';

export default function DeleteButton({classes, text, clickHandler}) {
  return (
    <>
      <Button color="danger" className={classes} onClick={clickHandler}>{text}</Button>
    </>
  )
}