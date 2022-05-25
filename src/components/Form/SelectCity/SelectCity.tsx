import React, {ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

type SelectCityProps = {
  name: string,
  value: string,
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
  onBlur: (e: React.SyntheticEvent) => void,
}

const SelectCity = ({name, value, onChange, onBlur}: SelectCityProps) => {
  return (
    <FormControl>
      <InputLabel id='selectCity'>Город</InputLabel>
      <Select name={name} labelId='selectCity' id='selectCity' value={value} label='Город'
        onChange={onChange} onBlur={onBlur} >
        <MenuItem value='Иркутск'>Иркутск</MenuItem>
        <MenuItem value='Усолье-Сибирское'>Усолье-Сибирское</MenuItem>
        <MenuItem value='Черемхово'>Черемхово</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCity;