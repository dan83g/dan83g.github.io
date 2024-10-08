import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ModalPortal from './ModalPortal';

const meta: Meta<typeof ModalPortal> = {
  title: 'Components/ModalPortal',
  component: ModalPortal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalPortal>;

const ModalContentExample = () => {
  return <div>This is a modal content</div>;
};

export const Default: Story = {
  args: {
    visible: true,
    children: <ModalContentExample />,
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    children: <ModalContentExample />,
  },
};
