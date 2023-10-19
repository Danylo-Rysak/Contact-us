// Libs
import { ChangeEvent, FC, useState } from 'react';
// Components
import Button from 'components/shared/Button';
// Hooks
import useToastify from 'utils/hooks/useToastify';
// Validation
import { emailValidation } from 'utils/validations/email-validation';
// Styles
import * as Styled from './styles';

const Subscribe: FC = () => {
  // Use formik for one input isn't good, so I use useState for control input value
  const [email, setEmail] = useState<string>('');
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  // But use yup for validation cause it's convenient
  const isValidEmail = emailValidation.isValidSync({ email });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  // The user receives 2 different notifications, it depends on whether the email is valid
  const toastify = useToastify(
    isOpenToastify,
    isValidEmail ? 'Successfully subscribe' : 'Email is not valid!',
    handleCloseToastify,
    isValidEmail ? 'success' : 'error'
  );

  const handleSendEmail = () => {
    setIsOpenToastify(true);
    // Reset form after sent
    if (isValidEmail) {
      setEmail('');
    }
  };

  return (
    <>
      {toastify}
      <Styled.Subscribe>
        <Styled.Title>Join Our Newsletter</Styled.Title>
        <Styled.Form>
          <Styled.Input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email address"
          />
          <Button title="Subscribe" onClick={handleSendEmail} disabled={email === ''} />
        </Styled.Form>
        <Styled.Subtitle>
          * Will send you weekly updates for your better tool management.
        </Styled.Subtitle>
      </Styled.Subscribe>
    </>
  );
};

export default Subscribe;
