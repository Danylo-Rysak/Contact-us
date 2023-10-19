// Libs
import { FC } from 'react';
// Styles
import * as Styled from './styles';
// Helpers
import { links } from './helpers';
import { contactInfo } from 'utils/helpers';

const ContactInfo: FC = () => (
  <Styled.ContactInfo>
    <div>
      <Styled.Title>Contact Information</Styled.Title>
      <Styled.Subtitle>Say something to start a live chat!</Styled.Subtitle>
    </div>
    <Styled.List>
      {contactInfo.map(({ icon, subtitle }, index) => (
        <Styled.Item key={index}>
          {icon}
          <Styled.Name>{subtitle}</Styled.Name>
        </Styled.Item>
      ))}
    </Styled.List>
    <Styled.LinksGroup>
      {links.map(({ icon, isActive }, index) => (
        <Styled.Link key={index} isActive={isActive}>
          {icon}
        </Styled.Link>
      ))}
    </Styled.LinksGroup>
    <Styled.SmallCircle />
    <Styled.BigCircle />
  </Styled.ContactInfo>
);

export default ContactInfo;
