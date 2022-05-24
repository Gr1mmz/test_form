import React from 'react';
import {
  Box, Button,
  FormControl,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import SelectCity from "./SelectCity/SelectCity";
import SelectSubject from "./SelectSubject/SelectSubject";
import SelectMethod from "./SelectMethod/SelectMethod";
import SubmitCheckbox from "./SubmitCheckbox/SubmitCheckbox";

const Form = () => {
  return (
    <Box
      component='form'
      sx={{
        width: '40%',
        minWidth: '300px',
        minHeight: 300,
        padding: '2em',
        margin: '1em 0',
        boxSizing: 'border-box',
        boxShadow: 3,
      }}
    >
      <Typography variant='h2' component='h2'
                  sx={{
                    fontSize: '20px',
                    color: 'primary.main',
                  }}
      >
        Форма обратной связи
      </Typography>
      <FormControl fullWidth>
        <Stack spacing={2}
               sx={{
                 margin: '2em 0 0 0'
               }}
        >
          <TextField id="outlined-basic" label="Ваше имя" variant="outlined" required />
          <SelectCity/>
          <TextField id="outlined-basic" label="Телефон" variant="outlined" type='number' />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" type='email' />
          <SelectSubject/>
          <SelectMethod/>
          <TextField id="outlined-basic" label="Текст вопроса" variant="outlined" required multiline maxRows={5} />
          <SubmitCheckbox/>
          <Button variant='contained' type='submit'>Отправить</Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Form;