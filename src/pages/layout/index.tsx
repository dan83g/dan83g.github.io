import React, { FC, ReactElement } from 'react';
import { Header } from 'src/widgets/header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Header />
      {children}
    </>
  );
};
