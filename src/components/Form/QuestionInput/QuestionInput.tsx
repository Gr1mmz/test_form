import React from 'react';
import {TextField} from '@mui/material';

type QuestionInputProps = {
  name: string,
  value: string,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const QuestionInput = ({name, value, onChange, onBlur, error}: QuestionInputProps) => {
  return (
    <TextField id='outlined-basic' label='Текст вопроса' variant='outlined' name={name} value={value}
               error={!!error} helperText={error ? error : ''} multiline rows={4}
               onChange={(e) => onChange(e)}
               onBlur={(e) => onBlur(e)} />
  );
};

export default QuestionInput;