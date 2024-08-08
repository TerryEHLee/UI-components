import { FilterAltOff, Search } from '@mui/icons-material';
import { Box, Grid, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { Header } from '@/app/layouts/Header.tsx';
import { useModalStore } from '@/shared/lib/ModalState';
import type { ModalState } from '@/shared/lib/ModalState';
import {
    AlertsModal,
    EligibilityReviewVerifiedModal,
    NameModal,
    PatientConsentModal,
    ServiceTypeModal,
    StartDateModal, IconButton, InputFieldSelect, Select, TimePicker
} from '@/shared/ui';
import { EnrollmentList } from '@/features/enrollment/ui/List';

export const EnrollmentView = () => {
    const state = useModalStore((state) => state);
    const toggleState = useModalStore((state) => state.toggleState);

    const handleToggle = (key: keyof ModalState) => () => {
        toggleState(key);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={isOpen ? 'main open' : 'main'}>
          
            <Box className="cont-body">
                <Grid container spacing={1} sx={{ mb: 1 }} alignItems="flex-end">
                    <Grid item xs={1}>
                        <InputLabel variant="standard" size="small">
                            Patient Name
                        </InputLabel>
                        <TextField
                            variant="standard"
                            placeholder="Last, First"
                            size="small"
                            className="placeholder-visible"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <InputFieldSelect />
                    </Grid>
                    <Grid item>
                        <Select showTextFieldAndButton placeholder="Provider" moduleName="Provider" size="small" />
                    </Grid>
                    <Grid item>
                        <Select showTextFieldAndButton placeholder="CareTeam" moduleName="CareTeam" size="small" />
                    </Grid>
                    <Grid item xs={1.2}>
                        <TextField
                            fullWidth
                            placeholder="ICD-10s"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Select moduleName="Service" size="small" />
                    </Grid>
                    <Grid item xs={2} alignItems="flex-end">
                        <InputLabel variant="standard" size="small">
                            Time Logged
                        </InputLabel>
                        <Grid item container alignItems="center">
                            <Grid item xs={5.5}>
                                <TimePicker />
                            </Grid>
                            <Grid item xs={1} sx={{ textAlign: 'center' }}>
                                ~
                            </Grid>
                            <Grid item xs={5.5}>
                                <TimePicker />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Select moduleName="PPO" size="small" />
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="filter" color="secondary">
                            <FilterAltOff />
                        </IconButton>
                    </Grid>
                </Grid>
                <Box sx={{ height: 650, width: '100%' }}>
                    <EnrollmentList handleToggle={handleToggle} />
                </Box>
            </Box>
            <StartDateModal open={state.isStartDateModalOpen} onClose={handleToggle('isStartDateModalOpen')} />
            <NameModal open={state.isNameModalOpen} onClose={handleToggle('isNameModalOpen')} />
            <ServiceTypeModal open={state.isServiceTypeModalOpen} onClose={handleToggle('isServiceTypeModalOpen')} />
            <AlertsModal open={state.isAlertsModalOpen} onClose={handleToggle('isAlertsModalOpen')} />
            <PatientConsentModal
                open={state.isPatientConsentModalOpen}
                onClose={handleToggle('isPatientConsentModalOpen')}
            />
            <EligibilityReviewVerifiedModal
                open={state.isEligibilityReviewVerifiedModalOpen}
                onClose={handleToggle('isEligibilityReviewVerifiedModalOpen')}
            />
        </main>
    );
};
