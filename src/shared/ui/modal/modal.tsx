import './modal.less';
import { Close } from '@mui/icons-material';
import { Box, Modal as MuiModal, Typography } from '@mui/material';
import { ContainedButton } from 'src/new/components/ui/button/contained-button';
import { IconButton } from 'src/new/components/ui/button/icon-button';

type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    title: string;
    sizeModal?: 'modal-sm' | 'modal-md' | 'modal-lg' | 'modal-xl' | 'modal-xs';
    sizeButton?: 'small' | 'medium' | 'large';
    isPrimaryButtonDisabled?: boolean;
    PrimaryButtonLabel?: string | null;
    PrimaryButtonAction?: () => void;
    isSecondaryButtonDisabled?: boolean;
    SecondaryButtonLabel?: string | null;
};

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
