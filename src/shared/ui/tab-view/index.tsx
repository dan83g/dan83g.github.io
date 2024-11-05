import React, { FC, useState, useTransition, Children, ReactElement } from 'react';
import { ITab, Tab } from '../tab';
import s from './styles.module.sass';

export interface ITabView {
  children?: ReactElement<ITab>[] | ReactElement<ITab>;
  initialTabKey: string;
}

export const TabView: FC<ITabView> = ({ children, initialTabKey }) => {
  const [tabKey, setTab] = useState<string>(initialTabKey);
  const arrayChildren = Children.toArray(children);
  const [, startTransition] = useTransition();

  const changeTab = (tabKey: string) => {
    startTransition(() => {
      setTab(tabKey);
    });
  };

  return (
    <div>
      <div className={s.header}>
        {Children.map(arrayChildren, (child: ReactElement<ITab>) => {
          return (
            <Tab
              {...child.props}
              isActive={child.props.tabKey === tabKey}
              onClick={() => changeTab(child.props.tabKey)}
            />
          );
        })}
      </div>
      <div className={s.content}>
        {Children.map(arrayChildren, (child: ReactElement<ITab>) => {
          if (child.props.tabKey === tabKey) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};
