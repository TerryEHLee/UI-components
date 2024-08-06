import { create } from 'zustand';

export type ModalState = {
    isStartDateModalOpen: boolean;
    isNameModalOpen: boolean;
    isServiceTypeModalOpen: boolean;
    isNotificationModalOpen: boolean;
    isAlertsModalOpen: boolean;
    isPatientConsentModalOpen: boolean;
    isEligibilityReviewVerifiedModalOpen: boolean;
    isCareTeamModalOpen: boolean;
    isSelectDateModalOpen: boolean;
    isAddNotesModalOpen: boolean;
    isBiometricParameterModalOpen: boolean;

    toggleState: (key: keyof ModalState) => void;
};

export const useModalStore = create<ModalState>((set) => ({
    isStartDateModalOpen: false,
    isNameModalOpen: false,
    isServiceTypeModalOpen: false,
    isNotificationModalOpen: false,
    isAlertsModalOpen: false,
    isPatientConsentModalOpen: false,
    isEligibilityReviewVerifiedModalOpen: false,
    isCareTeamModalOpen: false,
    isSelectDateModalOpen: false,
    isAddNotesModalOpen: false,
    isBiometricParameterModalOpen: false,

    toggleState: (key) => {
        set((state) => ({
            ...state,
            [key]: !state[key],
        }));
    },
}));
