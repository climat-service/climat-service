import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/ui/Input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input type="text" placeholder="placeholder" label="Подпись" />,
};

export const HasValue: Story = {
  render: () => <Input type="text" placeholder="placeholder" label="Подпись" value='Подпись' />,
};

export const Error: Story = {
  render: () => <Input type="text" error={true} placeholder="placeholder" label="Подпись" value='Подпись' />,
};
