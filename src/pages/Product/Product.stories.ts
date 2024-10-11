import type { Meta, StoryObj } from '@storybook/react';

import { Product } from './Product';

const meta: Meta<typeof Product> = {
  title: 'Pages/Product',
  component: Product,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {};
