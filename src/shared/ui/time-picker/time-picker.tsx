import type { TimePickerProps as MuiTimePicekrProps } from '@mui/x-date-pickers-pro';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import dayjs from 'dayjs';

type TimePickerProps = MuiTimePicekrProps<any, any> & {
    label?: string;
};
export const TimePicker = ({ label, ...props }: TimePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiTimePicker
                defaultValue={dayjs('2024-06-24T00:00')}
                slotProps={{ textField: { variant: 'standard', size: 'small' } }}
                sx={{ minWidth: '0 !important', mt: '0 !important' }}
                {...props}
            />
        </LocalizationProvider>
    );
};
