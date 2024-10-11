import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
  title: 'Pages/Cart',
  component: Cart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {};
