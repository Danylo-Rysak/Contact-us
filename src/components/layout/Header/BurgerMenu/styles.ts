// Libs
import { styled } from '@mui/material';
// Icons
import Close from 'assets/icons/close.svg?react';

export const Menu = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 58px;
  background: #000;
  padding: 29px 20px 0 20px;
`;

export const Header = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled('p')`
  font-family: Inter;
  font-weight: 800;
  color: #fff;
  font-size: 18px;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
`;
