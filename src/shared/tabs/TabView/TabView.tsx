import React, { FC, useState, useTransition, Children } from 'react';
import { ITab, Tab } from '../Tab/Tab';
import s from './TabView.module.sass';

export interface ITabView {
  children?: React.ReactElement<ITab>[] | React.ReactElement<ITab>;
  initialTabKey: string;
}

export const TabView: FC<ITabView> = ({ children, initialTabKey }) => {
  const arrayChildren = Children.toArray(children);
  const [, startTransition] = useTransition();
  const [tabKey, setTab] = useState<string>(initialTabKey);

  const changeTab = (tabKey: string) => {
    startTransition(() => {
      setTab(tabKey);
    });
  };

  return (
    <div>
      {Children.map(arrayChildren, (child: React.ReactElement<ITab>) => {
        return (
          <Tab
            {...child.props}
            isActive={child.props.tabKey === tabKey}
            onClick={() => changeTab(child.props.tabKey)}
          />
        );
      })}
      <div className={s.content}>
        {Children.map(arrayChildren, (child: React.ReactElement<ITab>) => {
          if (child.props.tabKey === tabKey) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};
