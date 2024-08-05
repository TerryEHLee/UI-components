import { RadioGroupOptionData } from './data';
import { FormControlLabel, RadioGroup as MuiRadioGroup, Radio } from '@mui/material';
import type { RadioGroupProps } from './type';

export const RadioGroup = ({ moduleName, ...props }: RadioGroupProps) => {
    const radioGroupOption = RadioGroupOptionData.find((option) => option.moduleName === moduleName);
    const radioGroupValue = radioGroupOption ? radioGroupOption.value : [];

    return (
        <MuiRadioGroup {...props}>
            {radioGroupValue.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
        </MuiRadioGroup>
    );
};
