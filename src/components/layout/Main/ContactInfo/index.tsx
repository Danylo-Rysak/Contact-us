// Libs
import { FC } from 'react';
// Styles
import * as Styled from './styles';
// Helpers
import { contactInfo, links } from './helpers';

const ContactInfo: FC = () => {
  return (
    <Styled.ContactInfo>
      <div>
        <Styled.Title>Contact Information</Styled.Title>
        <Styled.Subtitle>Say something to start a live chat!</Styled.Subtitle>
      </div>
      <Styled.List>
        {contactInfo.map(({ icon, info }, index) => (
          <Styled.Item key={index}>
            {icon}
            <Styled.Name>{info}</Styled.Name>
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
};

export default ContactInfo;
