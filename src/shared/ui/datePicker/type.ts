import type { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers-pro';
import type { Dayjs } from 'dayjs';

export type DatePickerProps = MuiDatePickerProps<Dayjs> & {
  size?: 'small' | 'medium';
  fullWidth?: boolean;
};