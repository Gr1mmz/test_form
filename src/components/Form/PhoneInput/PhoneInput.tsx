import React from 'react';
import {InputAdornment, TextField} from '@mui/material';

type PhoneInputProps = {
  name: string,
  value: string,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const PhoneInput = ({name, value, onChange, onBlur, error}: PhoneInputProps) => {
  return (
    <TextField id='outlined-basic' label='Телефон' variant='outlined' type='phone' name={name} value={value}
               error={!!error} helperText={error ? error : ''}
               onChange={(e) => onChange(e)}
               onBlur={(e) => onBlur(e)}
               InputProps={{ startAdornment: <InputAdornment position="start">+7</InputAdornment> }} />
  );
};

export default PhoneInput;