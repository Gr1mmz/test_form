import React from 'react';
import {TextField} from '@mui/material';

type NameInputProps = {
  name: string,
  value: string,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const NameInput = ({name, value, onChange, onBlur, error}: NameInputProps) => {
  return (
    <TextField id='outlined-basic' label='Ваше имя' variant='outlined' name={name} value={value}
               error={!!error} helperText={error ? error : ''}
               onChange={(e) => onChange(e)}
               onBlur={(e) => onBlur(e)} />
  );
};

export default NameInput;