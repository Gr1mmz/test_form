import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Box, Button, FormControl, Stack, Typography} from '@mui/material';
import SelectCity from './SelectCity/SelectCity';
import SelectSubject from './SelectSubject/SelectSubject';
import SelectMethod from './SelectMethod/SelectMethod';
import SubmitCheckbox from './SubmitCheckbox/SubmitCheckbox';
import NameInput from './NameInput/NameInput';
import PhoneInput from './PhoneInput/PhoneInput';
import EmailInput from './EmailInput/EmailInput';
import QuestionInput from './QuestionInput/QuestionInput';

const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    question: yup.string().required('Обязательное поле'),
    checkbox: yup.boolean().oneOf([true]).required('Обязательное поле')
  });
  return (
    <Formik
      initialValues={{
        name: '',
        city: '',
        phone: '',
        email: '',
        subject: '',
        method: '',
        question: '',
        checkbox: false,
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <Box
          component='form'
          onSubmit={handleSubmit}
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
          <Typography variant='h2' component='h2' sx={{ fontSize: '20px', color: 'primary.main' }} >
            Форма обратной связи
          </Typography>
            <Stack spacing={2} sx={{ margin: '2em 0 0 0' }} >
              <NameInput name={'name'}
                         onChange={(e: React.SyntheticEvent) => handleChange(e)}
                         onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                         value={values.name} error={errors.name && touched.name ? errors.name : ''}
              />
              <SelectCity name={'city'}
                          onChange={handleChange}
                          onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                          value={values.city}
              />
              <PhoneInput/>
              <EmailInput/>
              <SelectSubject name={'subject'}
                             onChange={handleChange}
                             onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                             value={values.subject}
              />
              <SelectMethod name={'method'}
                            onChange={handleChange}
                            onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                            value={values.method}
              />
              <QuestionInput name={'question'}
                             onChange={(e: React.SyntheticEvent) => handleChange(e)}
                             onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                             value={values.question} error={errors.question && touched.question ? errors.question : ''}
              />
              <SubmitCheckbox name={'checkbox'}
                              onChange={(e: React.SyntheticEvent) => handleChange(e)}
                              onBlur={(e: React.SyntheticEvent) => handleBlur(e)}
                              value={values.checkbox}
                              error={errors.checkbox && !values.checkbox && touched.checkbox ? errors.checkbox : ''}
              />
              <Button variant='contained' type='submit'>Отправить</Button>
            </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default Form;