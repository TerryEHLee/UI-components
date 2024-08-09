import React from 'react'; 
import type { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers-pro';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import dayjs from 'dayjs';

type TimePickerProps = MuiTimePickerProps<any, any> & {
    label?: string;
};

export const TimePicker = ({ label, value = dayjs('2024-06-24T00:00'), ...props }: TimePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiTimePicker
                value={value}
                slotProps={{ textField: { variant: 'standard', size: 'small' } }}
                sx={{ minWidth: '0 !important', mt: '0 !important' }}
                {...props}
            />
        </LocalizationProvider>
    );
};