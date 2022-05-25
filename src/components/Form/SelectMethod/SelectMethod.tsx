import React, {ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

type SelectMethodProps = {
  name: string,
  value: string,
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
  onBlur: (e: React.SyntheticEvent) => void,
}

const SelectMethod = ({name, value, onChange, onBlur}: SelectMethodProps) => {
  return (
    <FormControl>
      <InputLabel id='selectMethod'>Предпочитаемый способ связи</InputLabel>
      <Select name={name} labelId='selectMethod' id='selectMethod' value={value} label='Предпочитаемый способ связи'
              onChange={onChange} onBlur={onBlur} >
        <MenuItem value='E-mail'>E-mail</MenuItem>
        <MenuItem value='СМС'>СМС</MenuItem>
        <MenuItem value='Звонок'>Звонок</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMethod;