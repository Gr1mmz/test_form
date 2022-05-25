import React from 'react';
import {TextField} from '@mui/material';

type EmailInputProps = {
  name: string,
  value: string,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const EmailInput = ({name, value, onChange, onBlur, error}: EmailInputProps) => {
  return (
    <TextField name={name} id='outlined-basic' label='E-mail' variant='outlined' type='email' value={value}
               error={!!error} helperText={error ? error : ''}
               onChange={(e) => onChange(e)}
               onBlur={(e) => onBlur(e)} />
  );
};

export default EmailInput;