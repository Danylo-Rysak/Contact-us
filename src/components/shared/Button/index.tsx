// Libs
import { FC } from 'react';
import { Button as MuiButton, SxProps } from '@mui/material';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  styles?: SxProps;
}

const Button: FC<ButtonProps> = ({ title, disabled = false, onClick, styles }) => {
  return (
    <MuiButton
      title={title}
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...styles,
      }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
