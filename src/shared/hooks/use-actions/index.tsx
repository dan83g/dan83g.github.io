import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormikHelpers } from 'formik';

export enum Action {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export type ActionFn = <T1 extends Partial<Record<keyof T1, unknown>>, T2 extends FormikHelpers<T1>>(
  token: string,
  id: string,
  values?: T1,
  actions?: T2
) => Promise<void>;

export interface IActionSettings {
  name: string;
  fn: ActionFn;
}

interface ICallBack {
  (): void;
}

export const useActions = (
  createAction: ActionFn,
  updateAction: ActionFn,
  deleteAction: ActionFn,
  callBack: ICallBack
) => {
  const [action, setAction] = useState<Action>(Action.CREATE);
  const [id, setId] = useState<string | undefined>(undefined);
  const { t } = useTranslation();

  const setActionAndId = (action: Action, id?: string) => {
    setAction(action);
    setId(id);
    callBack();
  };

  const actionMap = new Map<Action, IActionSettings>([
    [
      Action.CREATE,
      {
        name: t('barActions.create'),
        fn: createAction,
      },
    ],
    [
      Action.UPDATE,
      {
        name: t('barActions.update'),
        fn: updateAction,
      },
    ],
    [
      Action.DELETE,
      {
        name: t('barActions.delete'),
        fn: deleteAction,
      },
    ],
  ]);

  const actionName = actionMap.get(action).name;
  const actionFn = actionMap.get(action).fn;

  return { action, id, setActionAndId, actionName, actionFn };
};
