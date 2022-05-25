import React from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';

type CheckboxInputProps = {
  name: string,
  value: boolean,
  onChange: (e: React.SyntheticEvent) => void,
  onBlur: (e: React.SyntheticEvent) => void,
  error: string,
}

const SubmitCheckbox = ({name, value, onChange, onBlur, error}: CheckboxInputProps) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} checked={value} onChange={(e) => onChange(e)}
                         onBlur={(e) => onBlur(e)} />}
      label={`Нажимая на кнопку "отправить", я даю согласие на обработку персональных данных`}
      sx={{ '& .MuiTypography-root': { fontSize: '0.7em', color: `${error ? '#f44336' : 'primary.text'}` } }}
    />
  );
};

export default SubmitCheckbox;