// Libs
import { FC } from 'react';
// Components
import ContactInfo from './ContactInfo';
import Form from './Form';
// Styles
import * as Styled from './styles';

const Main: FC = () => {
  return (
    <main>
      <Styled.Title>Contact Us</Styled.Title>
      <Styled.Subtitle>Any question or remarks? Just write us a message!</Styled.Subtitle>
      <Styled.Content>
        <ContactInfo />
        <Form />
      </Styled.Content>
    </main>
  );
};

export default Main;
