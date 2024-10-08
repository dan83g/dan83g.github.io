import type { Meta, StoryObj } from '@storybook/react';

import ProductList from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'Components/ProductList',
  component: ProductList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
