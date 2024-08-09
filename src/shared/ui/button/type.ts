import type { ButtonProps as MuiButtonProps } from '@mui/material';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type ContainedButtonProps = MuiButtonProps & {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit' | 'default' | 'info' | 'success' | 'warning' | 'error';
};

export type IconButtonProps = MuiIconButtonProps & {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit' | 'default';
};

export type OutlinedButtonProps = MuiButtonProps & {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit' | 'default';
  //AppTheme에 custom 된 것은 primary만, 나머지는 mui에서 지원하는 색상
};