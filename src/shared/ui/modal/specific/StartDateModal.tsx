import { Box, Typography } from '@mui/material';
import { Modal, DatePicker } from '@/shared/ui';
import type { SpecificModalProps } from '@/shared/ui';

export const StartDateModal = ({ open, onClose }: SpecificModalProps) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                sizeModal="modal-xs"
                isPrimaryButtonDisabled={true}
                PrimaryButtonLabel="OK"
                SecondaryButtonLabel="CANCEL"
                title="Select Date"
            >
                <Box className="modal-content" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: 'text.dark', mb: 3 }}>
                        Select a RPM Start Date
                    </Typography>
                    <Box className="flex-center">
                        <Typography variant="h3" sx={{ color: 'primary.main', mb: 1, mr: 1 }}>
                            RPM Start Date:
                        </Typography>
                        <DatePicker />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
