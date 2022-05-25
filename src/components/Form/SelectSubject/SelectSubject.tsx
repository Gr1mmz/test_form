import React, {ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

type SelectSubjectProps = {
  name: string,
  value: string,
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
  onBlur: (e: React.SyntheticEvent) => void,
}

const SelectSubject = ({name, value, onChange, onBlur}: SelectSubjectProps) => {
  return (
    <FormControl>
      <InputLabel id='selectSubject'>Тема вопроса</InputLabel>
      <Select name={name} labelId='selectSubject' id='selectSubject' value={value} label='Тема вопроса'
        onChange={onChange} onBlur={onBlur} >
        <MenuItem value='HTML'>HTML</MenuItem>
        <MenuItem value='CSS'>CSS</MenuItem>
        <MenuItem value='JavaScript'>JavaScript</MenuItem>
        <MenuItem value='React'>React</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSubject;