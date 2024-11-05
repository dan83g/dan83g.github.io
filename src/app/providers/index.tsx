import React, { FC } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../theming';
import { LocalizationInitiator } from '../localization/LocalizationInitiator';

export type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <LocalizationInitiator />
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
);
