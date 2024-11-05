import type { Meta } from '@storybook/react';
import { UserForm } from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'Forms/UserForm',
  component: UserForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
export const Primary = {};
