// Libs
import { ChangeEvent, FC } from 'react';
import { Radio, FormControlLabel } from '@mui/material';
// Icons
import Checked from 'assets/icons/checkbox-checked.svg?react';
import NotChecked from 'assets/icons/checkbox-not-checked.svg?react';

interface CheckboxProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ value, onChange, label }) => {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          icon={<NotChecked />}
          checkedIcon={<Checked />}
          value={value}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
