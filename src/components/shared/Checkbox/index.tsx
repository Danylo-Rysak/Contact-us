// Libs
import { ChangeEvent, FC, ReactNode } from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';

interface CheckboxProps {
  id?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  checkedIcon: ReactNode;
  icon: ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({ id, onChange, isChecked, checkedIcon, icon }) => {
  return (
    <MuiCheckbox
      id={id}
      onChange={onChange}
      checked={isChecked}
      icon={icon}
      checkedIcon={checkedIcon}
    />
  );
};

export default Checkbox;
