import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineCreate, MdOutlineBorderColor, MdOutlineDeleteForever, MdOutlineCancel } from 'react-icons/md';
import s from './styles.module.sass';

export interface ICRUDActionBarProps {
  onCreate?: () => void;
  onUpdate?: () => void;
  onDelete?: () => void;
  onCancel?: () => void;
}

export const CRUDActionBar = ({ onCreate, onUpdate, onDelete, onCancel }: ICRUDActionBarProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      {Boolean(onCreate) && (
        <button className={s.button} onClick={onCreate} title={t`barActions.create`}>
          <MdOutlineCreate className={s.icon} />
        </button>
      )}
      {Boolean(onUpdate) && (
        <button className={s.button} onClick={onUpdate} title={t`barActions.update`}>
          <MdOutlineBorderColor className={s.icon} />
        </button>
      )}
      {Boolean(onDelete) && (
        <button className={s.button} onClick={onDelete} title={t`barActions.delete`}>
          <MdOutlineDeleteForever className={s.icon} />
        </button>
      )}
      {Boolean(onCancel) && (
        <button className={s.button} onClick={onCancel} title={t`barActions.cancel`}>
          <MdOutlineCancel className={s.icon} />
        </button>
      )}
    </div>
  );
};
