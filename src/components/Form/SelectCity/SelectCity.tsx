import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

const SelectCity = () => {
  const [city, setCity] = React.useState('');

  const changeCityHandler = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <FormControl>
      <InputLabel id='selectCity'>Город</InputLabel>
      <Select
        labelId='selectCity'
        id='selectCity'
        value={city}
        label='Город'
        onChange={changeCityHandler}
      >

        <MenuItem value='Иркутск'>Иркутск</MenuItem>
        <MenuItem value='Усолье-Сибирское'>Усолье-Сибирское</MenuItem>
        <MenuItem value='Черемхово'>Черемхово</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCity;