import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

const SelectMethod = () => {
  const [method, setMethod] = React.useState('');

  const changeMethodHandler = (event: SelectChangeEvent) => {
    setMethod(event.target.value as string);
  };
  return (
    <FormControl>
      <InputLabel id='selectMethod'>Предпочитаемый способ связи</InputLabel>
      <Select
        labelId='selectMethod'
        id='selectMethod'
        value={method}
        label='Предпочитаемый способ связи'
        onChange={changeMethodHandler}
      >
        <MenuItem value='E-mail'>E-mail</MenuItem>
        <MenuItem value='СМС'>СМС</MenuItem>
        <MenuItem value='Звонок'>Звонок</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMethod;