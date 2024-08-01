import { Box, Typography } from '@mui/material';
import { LabeledButtonGroup } from 'src/new/components/ui/button-group/labeled-button-group';
import { DatePicker } from 'src/new/components/ui/date-picker/date-picker';
import { Modal } from 'src/new/components/ui/modal/modal';

type SelectDateModalProps = {
    open: boolean;
    onClose: () => void;
};

export const SelectDateModal = ({ open, onClose }: SelectDateModalProps) => {
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
