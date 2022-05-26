import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput {...other} mask="(#00) 000-00-00" definitions={{'#': /[1-9]/,}}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

type PhoneInputProps = {
  name: string,
  value: string,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const PhoneInput = ({name, value, onChange, onBlur, error}: PhoneInputProps) => {
  return (
    <TextField id='outlined-basic' label='Телефон' variant='outlined' type='tel' name={name} value={value}
               error={!!error} helperText={error ? error : ''}
               onChange={(e) => onChange(e)}
               onBlur={(e) => onBlur(e)}
               InputProps={{
                 startAdornment: <InputAdornment position="start">+7</InputAdornment>,
                 inputComponent: TextMaskCustom as any
                }}/>
  );
};

export default PhoneInput;