// Libs
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Subscribe = styled('div')`
  margin-top: 19px;
  width: 304px;
  height: 184px;
  box-sizing: border-box;
  padding: 14px 14px 21px 13px;
  border-radius: 10px;
  background: #131313;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    border-radius: 5px;
    //margin: 40px auto 0 auto;
  }
}
`;

export const Title = styled('p')`
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;

export const Form = styled('div')`
  margin-top: 29px;
  display: flex;
  width: 100%;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-top: 23px;
  }
`;

export const Input = styled('input')`
  background: rgba(30, 30, 30, 1);
  border: none;
  width: 100%;
  padding-left: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  &::placeholder {
    color: #616161;
    font-size: 11px;
    font-weight: 400;
  }
  caret-color: #fff;
`;

export const Subtitle = styled('p')`
  margin-top: 19px;
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-weight: 500;
  opacity: 0.5;
`;
