import { AddAPatientConsentModal } from './AddPatientConsentModal';
import { Delete } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { IconButton, ContainedButton } from "@/shared/ui/button";
import { Modal } from '@/shared/ui/modal';
import type { SpecificModalProps } from '@/shared/ui/modal';

export const PatientConsentModal = ({ open, onClose }: SpecificModalProps) => {
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
