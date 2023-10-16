// Libs
import { FC } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button: FC<ButtonProps> = ({ title, disabled = false, onClick }) => {
  return (
    <MuiButton onClick={onClick} disabled={disabled}>
      {title}
    </MuiButton>
  );
};

export default Button;
