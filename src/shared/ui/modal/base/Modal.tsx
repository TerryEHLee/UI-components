import './modal.less';
import { Close } from '@mui/icons-material';
import { Box, Modal as MuiModal, Typography } from '@mui/material';
import { ContainedButton, IconButton } from '@/shared/ui/button'
import type { ModalProps } from '../type';


export const Modal = ({
    children,
    open,
    onClose,
    title,
    sizeModal = 'modal-sm',
    sizeButton = 'large',
    isPrimaryButtonDisabled = false,
    PrimaryButtonLabel = null,
    PrimaryButtonAction,
    isSecondaryButtonDisabled = false,
    SecondaryButtonLabel = null,
}: ModalProps) => {
    return (
        <div>
            <MuiModal open={open} onClose={onClose}>
                <Box component="section" className={`modal ${sizeModal}`}>
                    <Box component="header" className={'modal-header'}>
                        <Typography className={title}>{title}</Typography>
                        <IconButton className={'close-icon'} size="large" onClick={onClose}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Box className={'modal-body'}>{children}</Box>
                    <Box component="footer" className={'modal-footer'}>
                        {PrimaryButtonLabel ? (
                            <ContainedButton
                                disabled={isPrimaryButtonDisabled}
                                onClick={PrimaryButtonAction}
                                size={sizeButton}
                            >
                                {PrimaryButtonLabel}
                            </ContainedButton>
                        ) : null}
                        {SecondaryButtonLabel ? (
                            <ContainedButton
                                disabled={isSecondaryButtonDisabled}
                                color="secondary"
                                onClick={onClose}
                                size={sizeButton}
                            >
                                {SecondaryButtonLabel}
                            </ContainedButton>
                        ) : null}
                    </Box>
                </Box>
            </MuiModal>
        </div>
    );
};
