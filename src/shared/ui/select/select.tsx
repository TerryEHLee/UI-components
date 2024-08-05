import { Box, Grid, MenuItem, Select as MuiSelect } from '@mui/material';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { OutlinedButton } from '@/shared/ui';
import { SelectOptionData } from '@/shared/ui/select/data.ts'
import { SearchTextField } from '@/shared/ui/textField/SearchTextField';
import type { SelectProps } from './type';


export const Select = ({
    moduleName,
    showTextFieldAndButton = false,
    placeholder,
    setSelectedInputFieldItem,
    ...props
}: SelectProps) => {
    const selectOption = SelectOptionData.find((option) => option.moduleName === moduleName);
    const selectValue = selectOption ? selectOption.value : [];

    const [selectedItem, setSelectedItem] = useState(placeholder || selectValue[0]);

    const handleClear = () => {
        setSelectedItem('');
    };

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
        setSelectedInputFieldItem ? setSelectedInputFieldItem(e.target.value) : null;
    };

    return (
        <MuiSelect
            value={selectedItem}
            onChange={handleChange}
            renderValue={(selected) => (
                <Box className="select-label" sx={{ lineHeight: '1.7' }}>
                    {(selected as ReactNode) || (placeholder as ReactNode)}
                </Box>
            )}
            displayEmpty
            {...props}
        >
            {showTextFieldAndButton && (
                <Grid sx={{ m: 1 }}>
                    <SearchTextField />
                </Grid>
            )}
            {selectValue.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
            {showTextFieldAndButton && (
                <Grid sx={{ borderTop: 1, borderColor: 'grey.400', p: 1, textAlign: 'right', mt: 1 }}>
                    <OutlinedButton onClick={handleClear} size="small">
                        Clear
                    </OutlinedButton>
                </Grid>
            )}
        </MuiSelect>
    );
};
