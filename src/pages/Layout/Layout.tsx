import React, { FC, ReactElement } from 'react';
import Header from 'src/widgets/Header/Header';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
