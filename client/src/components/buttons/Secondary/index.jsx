import React from 'react';
import { Button } from './styles';
const Secondary = (props) => {
  return (
    <Button>
      <p>{props.children}</p>
    </Button>
  );
};

export default Secondary;
