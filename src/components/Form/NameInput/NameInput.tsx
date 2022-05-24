import React from 'react';
import {TextField} from '@mui/material';

const NameInput = () => {
  return (
    <TextField id='outlined-basic' label='Ваше имя' variant='outlined' required />
  );
};

export default NameInput;