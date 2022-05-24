import React from 'react';
import {TextField} from '@mui/material';

const QuestionInput = () => {
  return (
    <TextField id='outlined-basic' label='Текст вопроса' variant='outlined' required
               multiline rows={4} maxRows={10} />
  );
};

export default QuestionInput;