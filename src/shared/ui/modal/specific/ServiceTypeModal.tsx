import { Box, Card, Typography } from '@mui/material';
import { Modal,Checkbox } from '@/shared/ui';
import type { SpecificModalProps } from '@/shared/ui';

export const ServiceTypeModal = ({ open, onClose }: SpecificModalProps) => {
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
