import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import type { DatePickerProps } from './type';


dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');
export const DatePicker = ({ size = 'small', fullWidth = false, ...props }: DatePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker slotProps={{ textField: { variant: 'standard', size, fullWidth } }} {...props} />
        </LocalizationProvider>
    );
};
