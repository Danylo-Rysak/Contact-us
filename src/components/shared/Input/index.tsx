// Libs
import { ChangeEvent, FC, FocusEventHandler } from 'react';
import { Box, useTheme } from '@mui/material';
// Styles
import * as Styled from './styles';

interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value: string;
  type?: string;
  placeholder?: string;
  isError?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  name,
  label,
  onChange,
  onBlur,
  value,
  type = 'text',
  placeholder,
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
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Box>
  );
};

export default Input;
