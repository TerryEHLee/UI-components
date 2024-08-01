import type { ButtonProps as MuiContainedButtonProps } from '@mui/material';
import { Button as MuiContainedButton } from '@mui/material';

export type ContainedButtonProps = MuiContainedButtonProps & {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'inherit' | 'default' | 'info' | 'success' | 'warning' | 'error';
};
export const ContainedButton = ({
    children,
    size = 'medium',
    color = 'primary',
    ...ContainedButtonProps
}: ContainedButtonProps) => {
    return (
        <MuiContainedButton variant="contained" size={size} color={color} {...ContainedButtonProps}>
            {children}
        </MuiContainedButton>
    );
};
