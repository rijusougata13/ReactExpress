import React from 'react';
import { Button } from './styles';
const Primary = (props) => {
  return (
    <Button>
      <p>{props.children}</p>
    </Button>
  );
};

export default Primary;
