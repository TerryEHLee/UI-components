import type { SelectProps as MuiSelectProps } from '@mui/material';


export type SelectProps = MuiSelectProps & {
  moduleName: string;
  showTextFieldAndButton?: boolean;
  placeholder?: string;
  setSelectedInputFieldItem?: (value: string) => void;
};