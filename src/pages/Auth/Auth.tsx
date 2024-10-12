import React, { FC, useState } from 'react';
import { LoginForm } from 'src/features/forms/LoginForm/LoginForm';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate } from 'react-router-dom';

interface IAuth {
  visible: boolean;
}

export const Auth: FC<IAuth> = ({ visible }) => {
  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const navigate = useNavigate();
  const onCloseModal = () => {
    setIsVisible(false);
    navigate('/');
  };

  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
      <LoginForm />
    </ModalFormWrapper>
  );
};
