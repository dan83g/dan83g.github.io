import React, { FC, ReactNode } from 'react';
import { Portal } from '@shared/ui/portal';
import Modal from '@shared/ui/modal';

interface IModalFormWrapper {
  children: ReactNode;
  isVisible?: boolean;
  onClose(): void;
}

export const ModalFormWrapper: FC<IModalFormWrapper> = ({ children, isVisible, onClose }) => {
  return (
    isVisible && (
      <Portal>
        <Modal visible={isVisible} onClose={onClose}>
          {children}
        </Modal>
      </Portal>
    )
  );
};
