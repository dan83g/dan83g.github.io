import React, { FC, ReactNode } from 'react';
import { Portal } from 'src/shared/Portal/Portal';
import Modal from 'src/widgets/Modal/Modal';

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
