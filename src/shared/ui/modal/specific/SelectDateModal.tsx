import { Box, Typography } from '@mui/material';
import { LabeledButtonGroup } from '@/shared/ui/buttonGroup';
import { DatePicker } from '@/shared/ui/datePicker';
import { Modal } from '@/shared/ui/modal';
import type { SpecificModalProps } from '@/shared/ui/modal';

export const SelectDateModal = ({ open, onClose }: SpecificModalProps) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                sizeModal={'modal-xs'}
                PrimaryButtonLabel="APPLY"
                SecondaryButtonLabel="CANCEL"
                title="Select Date"
            >
                <Box className="modal-content">
                    <LabeledButtonGroup moduleName="SelectDate" size="small" />
                    <Typography variant="h3" sx={{ my: 2 }}>
                        Select a date range
                    </Typography>
                    <Box className="flex-center" sx={{ columnGap: 1 }}>
                        <DatePicker /> ~ <DatePicker />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
