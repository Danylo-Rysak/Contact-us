// Libs
import * as Yup from 'yup';

export const validationForm = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string()
    .matches(/^\+380\d{9}$/)
    .required(),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required(),
});
