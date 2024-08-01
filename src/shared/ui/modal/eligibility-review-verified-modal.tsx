import { Box, Typography } from '@mui/material';
import { Modal } from 'src/new/components/ui/modal/modal';

export const EligibilityReviewVerifiedModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            PrimaryButtonLabel="UPLOAD FILES"
            SecondaryButtonLabel="CLOSE"
            title="RPM Enrollments"
        >
            <Box className="modal-content">
                <Typography variant="body1">Uploaded file exists.</Typography>
                <Typography variant="body1">Supported file types: PDF, jpg, bmp, png </Typography>
            </Box>
        </Modal>
    );
};
