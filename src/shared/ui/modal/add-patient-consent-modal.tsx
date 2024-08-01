import { Box, Typography } from '@mui/material';
import { Modal } from 'src/new/components/ui/modal/modal';
import { RadioGroup } from 'src/new/components/ui/radio-group/radio-group';

export const AddAPatientConsentModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sizeModal="modal-md"
            PrimaryButtonLabel="ADD"
            SecondaryButtonLabel="CANCEL"
            title="Patient Consent"
        >
            <Box>
                <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1rem', mb: 2 }}>
                    Add a patient consent
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>1. Select a Consent Type.</Typography>
                <RadioGroup moduleName="PatientConsent1" row sx={{ ml: 1.5, mt: 1, mb: 2 }} />
                <Typography sx={{ fontWeight: 600 }}>2. How will the patient sign the agreement?</Typography>
                <RadioGroup moduleName="PatientConsent2" sx={{ ml: 1.5, mt: 1, mb: 2 }} />
            </Box>
        </Modal>
    );
};
