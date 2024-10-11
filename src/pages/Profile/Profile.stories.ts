import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './Profile';

const meta: Meta<typeof Profile> = {
  title: 'Pages/Profile',
  component: Profile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {};
