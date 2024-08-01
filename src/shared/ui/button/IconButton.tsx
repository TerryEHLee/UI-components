import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { IconButton as MuiIconButton } from '@mui/material';

export type IconButtonProps = MuiIconButtonProps & {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'inherit' | 'default';
    //AppTheme에 custom 된 것은 primary만, 나머지는 mui에서 지원하는 색상
};

export const IconButton = ({ children, size = 'medium', color = 'primary', ...IconButtonProps }: IconButtonProps) => {
    return (
        <MuiIconButton size={size} color={color} {...IconButtonProps}>
            {children}
        </MuiIconButton>
    );
};
