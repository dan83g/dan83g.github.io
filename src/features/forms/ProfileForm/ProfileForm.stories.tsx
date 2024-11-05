import type { Meta } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'Forms/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {};
