// Libs
import { ChangeEvent, FC } from 'react';
import { Box, useTheme } from '@mui/material';
// Styles
import * as Styled from './styles';

interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  isError?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  name,
  label,
  onChange,
  value,
  type = 'text',
  isError = false,
}) => {
  const theme = useTheme();
  const isValue = value !== '';
  return (
    <Box>
      <Styled.Label theme={theme} isValue={isValue} isError={isError} htmlFor={id}>
        {label}
      </Styled.Label>
      <Styled.Field
        theme={theme}
        isValue={isValue}
        isError={isError}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Box>
  );
};

export default Input;
