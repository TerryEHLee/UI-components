import { Button as MuiButton } from '@mui/material';
import { IconButton as MuiIconButton } from '@mui/material';

import type { ContainedButtonProps, IconButtonProps, OutlinedButtonProps } from '@/shared/ui/button/type.ts';

export const ContainedButton = ({
  children,
  size = 'medium',
  color = 'primary',
  ...ContainedButtonProps
}: ContainedButtonProps) => {
  return (
      <MuiButton variant="contained" size={size} color={color} {...ContainedButtonProps}>
          {children}
      </MuiButton>
  );
};

export const IconButton = ({ children, size = 'medium', color = 'primary', ...IconButtonProps }: IconButtonProps) => {
  return (
      <MuiIconButton size={size} color={color} {...IconButtonProps}>
          {children}
      </MuiIconButton>
  );
};

export const OutlinedButton = ({
  children,
  size = 'medium',
  color = 'primary',
  ...OutlinedButtonProps
}: OutlinedButtonProps) => {
  return (
      <MuiButton size={size} color={color} {...OutlinedButtonProps}>
          {children}
      </MuiButton>
  );
};