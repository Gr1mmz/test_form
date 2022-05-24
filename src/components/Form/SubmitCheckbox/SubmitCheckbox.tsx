import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

const SubmitCheckbox = () => {
  return (
    <FormControlLabel
      control={<Checkbox required />}
      label={`Нажимая на кнопку "отправить", я даю согласие на обработку персональных данных`}
      sx={{ '& .MuiTypography-root': { fontSize: '0.7em' } }}
    />
  );
};

export default SubmitCheckbox;