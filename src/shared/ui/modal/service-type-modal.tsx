import { Box, Card, Typography } from '@mui/material';
import { Checkbox } from 'src/new/components/ui/checkbox/checkbox';
import { Modal } from 'src/new/components/ui/modal/modal';

export const ServiceTypeModal = ({ open, onClose }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                PrimaryButtonLabel="SAVE"
                SecondaryButtonLabel="CANCEL"
                title="RPM Service"
            >
                <Box className="modal-content">
                    <Typography variant="h3" sx={{ color: 'primary.main', mb: 2 }}>
                        RMP Care Categories
                    </Typography>
                    <Card>
                        <Typography variant="h4" sx={{ color: 'primary.dark' }}>
                            Confirm Standard Biometric Devices
                        </Typography>
                        <Box sx={{ px: 1.5, py: 1 }}>
                            <Checkbox moduleName="ServiceType" sx={{ p: 0.5 }} />
                        </Box>
                    </Card>
                </Box>
            </Modal>
        </div>
    );
};
