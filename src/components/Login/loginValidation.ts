import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('Please provide a valid email id'),
  password: yup
    .string()
    .min(6)
    .required('Password is incorrect, minimum 6 characters required'),
});
