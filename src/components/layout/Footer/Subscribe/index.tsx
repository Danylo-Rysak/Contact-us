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
  const [email, setEmail] = useState<string>('');
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  const isValidEmail = emailValidation.isValidSync({ email });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  const toastify = useToastify(
    isOpenToastify,
    isValidEmail ? 'Successfully subscribe' : 'Email is not valid!',
    handleCloseToastify,
    isValidEmail ? 'success' : 'error'
  );

  const handleSendEmail = () => {
    setIsOpenToastify(true);
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
