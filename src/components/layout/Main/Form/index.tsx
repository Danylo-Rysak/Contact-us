// Libs
import { FC, useState } from 'react';
import { useFormik } from 'formik';
// Components
import Input from 'components/shared/Input';
import Checkbox from 'components/shared/Checkbox';
import Button from 'components/shared/Button';
// Hooks
import useToastify from 'utils/hooks/useToastify';
// Interfaces
import { FormValues } from 'utils/interfaces/form-interface';
// Validations
import { validationForm } from 'utils/validations/form-validation';
// Styles
import * as Styled from './styles';

const Form: FC = () => {
  // State for manage toastify
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  // I used useFormik cause it good hook to collect data
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    validationSchema: validationForm,
    onSubmit: () => {
      setIsOpenToastify(true);
      // We reset our form after sent
      formik.resetForm();
    },
  });

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  const toastify = useToastify(
    isOpenToastify,
    'Successfully sent',
    handleCloseToastify,
    'success'
  );

  const handleSendForm = () => {
    formik.handleSubmit();
  };

  // We can't stylize Button from MUI with styled, so I had to use arrow function and got it from Styled
  const buttonStyles = Styled.getButtonStyles();

  return (
    <>
      {toastify}
      <Styled.Form>
        {/*I prefer to write each of inputs, i don't like maping in this case cause sometimes*/}
        {/*some input has additional props*/}
        <Styled.InputsGroup>
          <Input
            id="firstName"
            name="firstName"
            label="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            isError={formik.touched.firstName && !!formik.errors.firstName}
          />
          <Input
            id="lastName"
            name="lastName"
            label="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            isError={formik.touched.lastName && !!formik.errors.lastName}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="example@email.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isError={formik.touched.email && !!formik.errors.email}
          />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            type="phoneNumber"
            placeholder="+380XXXXXXXXX"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            isError={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
          />
        </Styled.InputsGroup>
        <Styled.SelectWrapper>
          <Styled.SelectTitle>Select Subject?</Styled.SelectTitle>
          {/*In this case also, yes I understand that in this context maping looks logical,*/}
          {/*but I try to demonstrate that I'm thinking about logic extension*/}
          <Styled.CheckboxGroup
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          >
            <Checkbox
              value="General Inquiry"
              onChange={formik.handleChange}
              label="General Inquiry"
            />
            <Checkbox
              value="General Inquiry1"
              onChange={formik.handleChange}
              label="General Inquiry"
            />
            <Checkbox
              value="General Inquiry2"
              onChange={formik.handleChange}
              label="General Inquiry"
            />
            <Checkbox
              value="General Inquiry3"
              onChange={formik.handleChange}
              label="General Inquiry"
            />
          </Styled.CheckboxGroup>
          {formik.touched.subject && !!formik.errors.subject && (
            <Styled.Error>{formik.errors.subject}</Styled.Error>
          )}
        </Styled.SelectWrapper>
        <Input
          id="message"
          name="message"
          label="Message"
          placeholder="Write your message..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          isError={formik.touched.message && !!formik.errors.message}
        />
        <Styled.SendMessageWrapper>
          <Button styles={buttonStyles} title="Send Message" onClick={handleSendForm} />
          <Styled.SendMessageIcon />
        </Styled.SendMessageWrapper>
      </Styled.Form>
    </>
  );
};

export default Form;
