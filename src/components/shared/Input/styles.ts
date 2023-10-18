// Libs
import { css, Input, InputLabel, styled, Theme } from '@mui/material';

export const Field = styled(Input)<{ theme: Theme; isValue: boolean; isError: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};

  ${({ isValue, isError, theme }) => {
    if (isValue && !isError) {
      return css`
        border-bottom: 1px solid ${theme.palette.black};
      `;
    }
    if (isError) {
      return css`
        border-bottom: 1px solid ${theme.palette.red};
      `;
    }
  }}
`;

export const Label = styled(InputLabel)<{
  theme: Theme;
  isValue: boolean;
  isError: boolean;
}>`
  color: ${({ theme }) => theme.palette.gray};

  ${({ isValue, isError, theme }) => {
    if (isValue && !isError) {
      return css`
        color: ${theme.palette.black};
      `;
    }
    if (isError) {
      return css`
        color: ${theme.palette.red};
      `;
    }
  }}
`;
