import type { ButtonProps as MuiOutlinedButtonProps } from '@mui/material';
import { Button as MuiOutlinedButton } from '@mui/material';

export type OutlinedButtonProps = MuiOutlinedButtonProps & {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'inherit' | 'default';
    //AppTheme에 custom 된 것은 primary만, 나머지는 mui에서 지원하는 색상
};
export const OutlinedButton = ({
    children,
    size = 'medium',
    color = 'primary',
    ...OutlinedButtonProps
}: OutlinedButtonProps) => {
    return (
        <MuiOutlinedButton size={size} color={color} {...OutlinedButtonProps}>
            {children}
        </MuiOutlinedButton>
    );
};
