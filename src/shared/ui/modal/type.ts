export type ModalProps = {
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

export type SpecificModalProps = Pick<ModalProps, 'open' | 'onClose'>;