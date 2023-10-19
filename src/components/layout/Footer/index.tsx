// Libs
import { FC } from 'react';
// Components
import Subscribe from './Subscribe';
import InfoList from './InfoList';
// Styles
import * as Styled from './styles';
// helpers
import { contactInfo } from 'utils/helpers';
import { companyInfo, legalInfo, linksInfo } from './helpers';

const Footer: FC = () => {
  return (
    <Styled.Footer>
      <Styled.Logo>Logo Here</Styled.Logo>
      <Styled.InfoWrapper>
        <InfoList title="Reach us" list={contactInfo} />
        <InfoList title="Company" list={companyInfo} />
        <InfoList title="Legal" list={legalInfo} />
        <InfoList title="Quick Links" list={linksInfo} />
        <Subscribe />
      </Styled.InfoWrapper>
    </Styled.Footer>
  );
};

export default Footer;
