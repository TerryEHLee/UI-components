import { InfoOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Modal } from '@/shared/ui/modal';
import type { SpecificModalProps } from '@/shared/ui/modal';

export const NameModal = ({ open, onClose }: SpecificModalProps) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                PrimaryButtonLabel="OK"
                SecondaryButtonLabel="CLOSE"
                title="RPM Monitoring"
            >
                <Box className="modal-content">
                    <Box className="flex-start" sx={{ mb: 1 }}>
                        <InfoOutlined className="icon-info" sx={{ color: 'primary.main' }} />
                        <Typography variant="h3" sx={{ color: 'text.dark' }}>
                            Start Monitoring
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 5 }}>
                        Monitoring time will begin now.{' '}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};
