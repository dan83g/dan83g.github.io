import React from 'react';
import Modal from '../modal';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  visible: boolean;
  children: React.ReactNode;
}

const ModalPortal = ({ visible, children }: ModalPortalProps) => {
  if (!visible) return null;

  const bodyEl = document.querySelector('body');

  return (
    <div>
      {createPortal(
        <Modal visible={visible} onClose={() => true}>
          {children}
        </Modal>,
        bodyEl
      )}
    </div>
  );
};

export default ModalPortal;
