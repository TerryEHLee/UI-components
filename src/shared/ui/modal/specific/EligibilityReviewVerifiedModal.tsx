import { Box, Typography } from '@mui/material';
import { Modal } from '@/shared/ui/modal';
import type { SpecificModalProps } from '@/shared/ui/modal';

export const EligibilityReviewVerifiedModal = ({ open, onClose }: SpecificModalProps) => {
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
