import { AddAPatientConsentModal } from './add-patient-consent-modal';
import { Delete } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { ContainedButton } from 'src/new/components/ui/button/contained-button';
import { IconButton } from 'src/new/components/ui/button/icon-button';
import { Modal } from 'src/new/components/ui/modal/modal';

export const PatientConsentModal = ({ open, onClose }) => {
    const [isAddAPatientConsentOpen, setIsAddAPatientConsentOpen] = useState(false);
    const handleAddAPatientConsentToggle = () => setIsAddAPatientConsentOpen((prevState) => !prevState);
    return (
        <Modal open={open} onClose={onClose} SecondaryButtonLabel="CLOSE" title="Patient Consent">
            <Box className="modal-content">
                <Box className="flex-start" sx={{ mb: 2 }}>
                    <Typography variant="h3" sx={{ color: 'primary.main' }}>
                        Patient Consent List
                    </Typography>
                    <ContainedButton sx={{ ml: 'auto' }} onClick={handleAddAPatientConsentToggle}>
                        + Add a Patient Consent
                    </ContainedButton>
                    <AddAPatientConsentModal open={isAddAPatientConsentOpen} onClose={handleAddAPatientConsentToggle} />
                </Box>
                <Box className="flex-start">
                    <Typography variant="h4" sx={{ color: 'primary.dark' }}>
                        Pending Consent (0) :
                    </Typography>
                    <ContainedButton size="small" sx={{ ml: 1, color: 'white' }} color="success">
                        UPLOAD
                    </ContainedButton>
                    <ContainedButton size="small" sx={{ ml: 1, color: 'white' }} color="info">
                        VIEWED
                    </ContainedButton>
                    <IconButton sx={{ ml: 'auto' }} color="secondary">
                        <Delete />
                    </IconButton>
                </Box>
                <Box className="flex-start">
                    <Typography variant="h4" sx={{ color: 'primary.dark' }}>
                        Signed Consent (1) :
                    </Typography>
                </Box>
                <Card sx={{ mt: 2 }}>
                    <Box sx={{ px: 1.5, py: 1, height: '8rem' }}></Box>
                </Card>
            </Box>
        </Modal>
    );
};
