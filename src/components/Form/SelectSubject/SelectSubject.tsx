import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

const SelectSubject = () => {
  const [subject, setSubject] = React.useState('');

  const changeSubjectHandler = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };
  return (
    <FormControl>
      <InputLabel id='selectSubject'>Тема вопроса</InputLabel>
      <Select
        labelId='selectSubject'
        id='selectSubject'
        value={subject}
        label='Тема вопроса'
        onChange={changeSubjectHandler}
      >
        <MenuItem value='HTML'>HTML</MenuItem>
        <MenuItem value='CSS'>CSS</MenuItem>
        <MenuItem value='JavaScript'>JavaScript</MenuItem>
        <MenuItem value='React'>React</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSubject;