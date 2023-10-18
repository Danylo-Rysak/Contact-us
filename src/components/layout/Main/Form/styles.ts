// Libs
import { RadioGroup, styled } from '@mui/material';
// Icons
import SendMessage from 'assets/icons/letter-send.svg?react';
// Constants
import { MAX_MOBILE_WIDTH, MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Form = styled('form')`
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    padding: 30px 16px;
  }
`;

export const InputsGroup = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 39px;
  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: auto;
  }
`;

export const SelectWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    gap: 10px;
  }
`;

export const SelectTitle = styled('p')`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const CheckboxGroup = styled(RadioGroup)`
  flex-direction: row;
  gap: 20px;
`;

export const SendMessageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const getButtonStyles = () => ({
  '&.MuiButton-root': {
    width: '214px',
    height: '54px',
    zIndex: '1',
    [`@media (max-width: ${MIN_DESKTOP_WIDTH}px)`]: {
      margin: '0 auto',
      width: '100%',
    },
  },
});

export const SendMessageIcon = styled(SendMessage)`
  position: absolute;
  margin-top: 20px;
  right: 145px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    right: 50%;
    margin-top: 30px;
    width: 93px;
    height: 93px;
  }
`;

export const Error = styled('p')`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;
