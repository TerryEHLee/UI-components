import { options } from './data';
import { FormControlLabel, FormGroup, Checkbox as MuiCheckbox } from '@mui/material';

export const Checkbox = ({ moduleName, ...props }) => {
    const moduleOption = options.find((option) => option.moduleName === moduleName);
    const moduleValue = moduleOption ? moduleOption.value : [];

    return (
        <FormGroup {...props}>
            {moduleValue.map((option, index) => (
                <FormControlLabel key={index} control={<MuiCheckbox {...props} />} label={option} />
            ))}
        </FormGroup>
    );
};
