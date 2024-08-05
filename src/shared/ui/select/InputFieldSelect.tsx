import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { DatePicker, Select, PhoneTextField } from '@/shared/ui';

export const InputFieldSelect = () => {
    const componentMap = {
        dob: <DatePicker fullWidth />,
        id: <TextField fullWidth placeholder="EHR ID(MRN)" variant="standard" size="small" />,
        phone: <PhoneTextField fullWidth size="small" />,
    };

    const [selectedMenuItem, setSelectedMenuItem] = useState('dob');
    const [component, setComponent] = useState(componentMap[selectedMenuItem]);

    useEffect(() => {
        setComponent(componentMap[selectedMenuItem]);
    }, [selectedMenuItem]);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <Select
                        fullWidth
                        moduleName="InputField"
                        setSelectedInputFieldItem={setSelectedMenuItem}
                        size="small"
                    />
                </Grid>
                <Grid item xs={7}>
                    {component}
                </Grid>
            </Grid>
        </>
    );
};
