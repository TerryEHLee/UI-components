import { SelectDateModal } from './SelectDateModal';
import { DateRange } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Tooltip, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import dayjs from 'dayjs';
import { useState } from 'react';
import { IconButton } from "@/shared/ui";
import { Checkbox } from '@/shared/ui/checkbox';
import { DataGridPro } from '@/shared/ui/dataGrid';
import { Modal } from '@/shared/ui/modal';
import type { SpecificModalProps } from '@/shared/ui';

export const AlertsModal = ({ open, onClose }: SpecificModalProps) => {
    const [isSelectDateOpen, setIsSelectDateOpen] = useState(false);
    const handleSelectDateToggle = () => setIsSelectDateOpen((prevState) => !prevState);

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                sizeModal="modal-xl"
                PrimaryButtonLabel="OK"
                PrimaryButtonAction={onClose}
                title="Alerts"
            >
                <Box className="modal-content" sx={{ mb: 1 }}>
                    <Box className="flex-start" sx={{ columnGap: 0.5 }}>
                        <AccountCircleIcon />
                        <Tooltip title="Test, Kim Test, Kim Test, Kim Test, Kim">
                            <Typography variant="h3" className="text-ellipsis" sx={{ width: '140px' }}>
                                Test, Kim Test, Kim Test, Kim Test, Kim
                            </Typography>
                        </Tooltip>
                        <Typography variant="h3" sx={{ fontWeight: 400 }}>
                            F 09/07/1990
                        </Typography>
                    </Box>
                    <Box className="flex-start" sx={{ columnGap: 0.5 }}>
                        <Typography variant="h3">Alerts </Typography>
                        <Typography variant="h2" color="primary.main">
                            1
                        </Typography>
                        <Checkbox moduleName="Alerts" row sx={{ ml: 2 }} />
                        <Box className="flex-start" sx={{ ml: 'auto' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <SingleInputDateRangeField
                                    onClick={handleSelectDateToggle}
                                    variant="standard"
                                    size="small"
                                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                                    sx={{ width: '100px' }}
                                />
                            </LocalizationProvider>
                            <IconButton onClick={handleSelectDateToggle}>
                                <DateRange color="secondary" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <DataGridPro
                    columns={[{ field: 'name' }]}
                    rows={[
                        { id: 1, name: 'React' },
                        { id: 2, name: 'MUI' },
                    ]}
                />
            </Modal>
            <SelectDateModal open={isSelectDateOpen} onClose={handleSelectDateToggle} />
        </div>
    );
};
